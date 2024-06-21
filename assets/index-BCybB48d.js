const __vite__fileDeps=["assets/homepage.component-DJ_ZL4fT.js","assets/homepage-C9qRPidx.css","assets/sign-in-and-sign-out.component-CkvLE8Zd.js","assets/sign-in-and-sign-out-BLBt2cjx.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
function fN(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ff(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var WS={exports:{}},pf={},HS={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac=Symbol.for("react.element"),pN=Symbol.for("react.portal"),mN=Symbol.for("react.fragment"),gN=Symbol.for("react.strict_mode"),yN=Symbol.for("react.profiler"),vN=Symbol.for("react.provider"),_N=Symbol.for("react.context"),wN=Symbol.for("react.forward_ref"),EN=Symbol.for("react.suspense"),IN=Symbol.for("react.memo"),TN=Symbol.for("react.lazy"),HE=Symbol.iterator;function SN(t){return t===null||typeof t!="object"?null:(t=HE&&t[HE]||t["@@iterator"],typeof t=="function"?t:null)}var KS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},QS=Object.assign,YS={};function Ua(t,e,n){this.props=t,this.context=e,this.refs=YS,this.updater=n||KS}Ua.prototype.isReactComponent={};Ua.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ua.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function JS(){}JS.prototype=Ua.prototype;function Ky(t,e,n){this.props=t,this.context=e,this.refs=YS,this.updater=n||KS}var Qy=Ky.prototype=new JS;Qy.constructor=Ky;QS(Qy,Ua.prototype);Qy.isPureReactComponent=!0;var KE=Array.isArray,XS=Object.prototype.hasOwnProperty,Yy={current:null},ZS={key:!0,ref:!0,__self:!0,__source:!0};function eA(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)XS.call(e,r)&&!ZS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ac,type:t,key:s,ref:o,props:i,_owner:Yy.current}}function AN(t,e){return{$$typeof:ac,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jy(t){return typeof t=="object"&&t!==null&&t.$$typeof===ac}function PN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var QE=/\/+/g;function Zp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PN(""+t.key):e.toString(36)}function Rh(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ac:case pN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zp(o,0):r,KE(i)?(n="",t!=null&&(n=t.replace(QE,"$&/")+"/"),Rh(i,e,n,"",function(c){return c})):i!=null&&(Jy(i)&&(i=AN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(QE,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",KE(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Zp(s,a);o+=Rh(s,e,n,u,i)}else if(u=SN(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Zp(s,a++),o+=Rh(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xc(t,e,n){if(t==null)return t;var r=[],i=0;return Rh(t,r,"","",function(s){return e.call(n,s,i++)}),r}function RN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},Ch={transition:null},CN={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Ch,ReactCurrentOwner:Yy};function tA(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Xc,forEach:function(t,e,n){Xc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xc(t,function(){e++}),e},toArray:function(t){return Xc(t,function(e){return e})||[]},only:function(t){if(!Jy(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=Ua;me.Fragment=mN;me.Profiler=yN;me.PureComponent=Ky;me.StrictMode=gN;me.Suspense=EN;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CN;me.act=tA;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=QS({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yy.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)XS.call(e,u)&&!ZS.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ac,type:t.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:_N,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vN,_context:t},t.Consumer=t};me.createElement=eA;me.createFactory=function(t){var e=eA.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:wN,render:t}};me.isValidElement=Jy;me.lazy=function(t){return{$$typeof:TN,_payload:{_status:-1,_result:t},_init:RN}};me.memo=function(t,e){return{$$typeof:IN,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=Ch.transition;Ch.transition={};try{t()}finally{Ch.transition=e}};me.unstable_act=tA;me.useCallback=function(t,e){return dn.current.useCallback(t,e)};me.useContext=function(t){return dn.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};me.useEffect=function(t,e){return dn.current.useEffect(t,e)};me.useId=function(){return dn.current.useId()};me.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return dn.current.useMemo(t,e)};me.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};me.useRef=function(t){return dn.current.useRef(t)};me.useState=function(t){return dn.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return dn.current.useTransition()};me.version="18.3.1";HS.exports=me;var ln=HS.exports;const ae=ff(ln),YE=fN({__proto__:null,default:ae},[ln]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kN=ln,bN=Symbol.for("react.element"),xN=Symbol.for("react.fragment"),NN=Object.prototype.hasOwnProperty,DN=kN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ON={key:!0,ref:!0,__self:!0,__source:!0};function nA(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)NN.call(e,r)&&!ON.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bN,type:t,key:s,ref:o,props:i,_owner:DN.current}}pf.Fragment=xN;pf.jsx=nA;pf.jsxs=nA;WS.exports=pf;var ue=WS.exports,eg={},rA={exports:{}},Vn={},iA={exports:{}},sA={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,q){var B=W.length;W.push(q);e:for(;0<B;){var b=B-1>>>1,N=W[b];if(0<i(N,q))W[b]=q,W[B]=N,B=b;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var q=W[0],B=W.pop();if(B!==q){W[0]=B;e:for(var b=0,N=W.length,D=N>>>1;b<D;){var j=2*(b+1)-1,Y=W[j],Z=j+1,te=W[Z];if(0>i(Y,B))Z<N&&0>i(te,Y)?(W[b]=te,W[Z]=B,b=Z):(W[b]=Y,W[j]=B,b=j);else if(Z<N&&0>i(te,B))W[b]=te,W[Z]=B,b=Z;else break e}}return q}function i(W,q){var B=W.sortIndex-q.sortIndex;return B!==0?B:W.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,d=null,p=3,g=!1,I=!1,A=!1,k=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(W){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=W)r(c),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(c)}}function C(W){if(A=!1,T(W),!I)if(n(u)!==null)I=!0,ft(L);else{var q=n(c);q!==null&&Ne(C,q.startTime-W)}}function L(W,q){I=!1,A&&(A=!1,E(y),y=-1),g=!0;var B=p;try{for(T(q),d=n(u);d!==null&&(!(d.expirationTime>q)||W&&!x());){var b=d.callback;if(typeof b=="function"){d.callback=null,p=d.priorityLevel;var N=b(d.expirationTime<=q);q=t.unstable_now(),typeof N=="function"?d.callback=N:d===n(u)&&r(u),T(q)}else r(u);d=n(u)}if(d!==null)var D=!0;else{var j=n(c);j!==null&&Ne(C,j.startTime-q),D=!1}return D}finally{d=null,p=B,g=!1}}var V=!1,v=null,y=-1,S=5,P=-1;function x(){return!(t.unstable_now()-P<S)}function O(){if(v!==null){var W=t.unstable_now();P=W;var q=!0;try{q=v(!0,W)}finally{q?R():(V=!1,v=null)}}else V=!1}var R;if(typeof _=="function")R=function(){_(O)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,he=_e.port2;_e.port1.onmessage=O,R=function(){he.postMessage(null)}}else R=function(){k(O,0)};function ft(W){v=W,V||(V=!0,R())}function Ne(W,q){y=k(function(){W(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){I||g||(I=!0,ft(L))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var B=p;p=q;try{return W()}finally{p=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var B=p;p=W;try{return q()}finally{p=B}},t.unstable_scheduleCallback=function(W,q,B){var b=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?b+B:b):B=b,W){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=B+N,W={id:h++,callback:q,priorityLevel:W,startTime:B,expirationTime:N,sortIndex:-1},B>b?(W.sortIndex=B,e(c,W),n(u)===null&&W===n(c)&&(A?(E(y),y=-1):A=!0,Ne(C,B-b))):(W.sortIndex=N,e(u,W),I||g||(I=!0,ft(L))),W},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(W){var q=p;return function(){var B=p;p=q;try{return W.apply(this,arguments)}finally{p=B}}}})(sA);iA.exports=sA;var VN=iA.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LN=ln,Dn=VN;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oA=new Set,wl={};function oo(t,e){la(t,e),la(t+"Capture",e)}function la(t,e){for(wl[t]=e,t=0;t<e.length;t++)oA.add(e[t])}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tg=Object.prototype.hasOwnProperty,MN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,JE={},XE={};function FN(t){return tg.call(XE,t)?!0:tg.call(JE,t)?!1:MN.test(t)?XE[t]=!0:(JE[t]=!0,!1)}function UN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $N(t,e,n,r){if(e===null||typeof e>"u"||UN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xy=/[\-:]([a-z])/g;function Zy(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xy,Zy);jt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xy,Zy);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xy,Zy);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ev(t,e,n,r){var i=jt.hasOwnProperty(e)?jt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($N(e,n,i,r)&&(n=null),r||i===null?FN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ti=LN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zc=Symbol.for("react.element"),Lo=Symbol.for("react.portal"),Mo=Symbol.for("react.fragment"),tv=Symbol.for("react.strict_mode"),ng=Symbol.for("react.profiler"),aA=Symbol.for("react.provider"),uA=Symbol.for("react.context"),nv=Symbol.for("react.forward_ref"),rg=Symbol.for("react.suspense"),ig=Symbol.for("react.suspense_list"),rv=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),lA=Symbol.for("react.offscreen"),ZE=Symbol.iterator;function Tu(t){return t===null||typeof t!="object"?null:(t=ZE&&t[ZE]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Object.assign,em;function $u(t){if(em===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);em=e&&e[1]||""}return`
`+em+t}var tm=!1;function nm(t,e){if(!t||tm)return"";tm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{tm=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$u(t):""}function jN(t){switch(t.tag){case 5:return $u(t.type);case 16:return $u("Lazy");case 13:return $u("Suspense");case 19:return $u("SuspenseList");case 0:case 2:case 15:return t=nm(t.type,!1),t;case 11:return t=nm(t.type.render,!1),t;case 1:return t=nm(t.type,!0),t;default:return""}}function sg(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mo:return"Fragment";case Lo:return"Portal";case ng:return"Profiler";case tv:return"StrictMode";case rg:return"Suspense";case ig:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uA:return(t.displayName||"Context")+".Consumer";case aA:return(t._context.displayName||"Context")+".Provider";case nv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rv:return e=t.displayName||null,e!==null?e:sg(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return sg(t(e))}catch{}}return null}function BN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sg(e);case 8:return e===tv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cA(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zN(t){var e=cA(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eh(t){t._valueTracker||(t._valueTracker=zN(t))}function hA(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cA(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function og(t,e){var n=e.checked;return Xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function e0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dA(t,e){e=e.checked,e!=null&&ev(t,"checked",e,!1)}function ag(t,e){dA(t,e);var n=Bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ug(t,e.type,n):e.hasOwnProperty("defaultValue")&&ug(t,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function t0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ug(t,e,n){(e!=="number"||fd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ju=Array.isArray;function Yo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lg(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function n0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(ju(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bi(n)}}function fA(t,e){var n=Bi(e.value),r=Bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function r0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pA(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cg(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pA(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var th,mA=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(th=th||document.createElement("div"),th.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=th.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function El(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qN=["Webkit","ms","Moz","O"];Object.keys(Xu).forEach(function(t){qN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xu[e]=Xu[t]})});function gA(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xu.hasOwnProperty(t)&&Xu[t]?(""+e).trim():e+"px"}function yA(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gA(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var GN=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hg(t,e){if(e){if(GN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function dg(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fg=null;function iv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pg=null,Jo=null,Xo=null;function i0(t){if(t=cc(t)){if(typeof pg!="function")throw Error(H(280));var e=t.stateNode;e&&(e=_f(e),pg(t.stateNode,t.type,e))}}function vA(t){Jo?Xo?Xo.push(t):Xo=[t]:Jo=t}function _A(){if(Jo){var t=Jo,e=Xo;if(Xo=Jo=null,i0(t),e)for(t=0;t<e.length;t++)i0(e[t])}}function wA(t,e){return t(e)}function EA(){}var rm=!1;function IA(t,e,n){if(rm)return t(e,n);rm=!0;try{return wA(t,e,n)}finally{rm=!1,(Jo!==null||Xo!==null)&&(EA(),_A())}}function Il(t,e){var n=t.stateNode;if(n===null)return null;var r=_f(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var mg=!1;if(Kr)try{var Su={};Object.defineProperty(Su,"passive",{get:function(){mg=!0}}),window.addEventListener("test",Su,Su),window.removeEventListener("test",Su,Su)}catch{mg=!1}function WN(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Zu=!1,pd=null,md=!1,gg=null,HN={onError:function(t){Zu=!0,pd=t}};function KN(t,e,n,r,i,s,o,a,u){Zu=!1,pd=null,WN.apply(HN,arguments)}function QN(t,e,n,r,i,s,o,a,u){if(KN.apply(this,arguments),Zu){if(Zu){var c=pd;Zu=!1,pd=null}else throw Error(H(198));md||(md=!0,gg=c)}}function ao(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function TA(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function s0(t){if(ao(t)!==t)throw Error(H(188))}function YN(t){var e=t.alternate;if(!e){if(e=ao(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return s0(i),t;if(s===r)return s0(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function SA(t){return t=YN(t),t!==null?AA(t):null}function AA(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=AA(t);if(e!==null)return e;t=t.sibling}return null}var PA=Dn.unstable_scheduleCallback,o0=Dn.unstable_cancelCallback,JN=Dn.unstable_shouldYield,XN=Dn.unstable_requestPaint,ct=Dn.unstable_now,ZN=Dn.unstable_getCurrentPriorityLevel,sv=Dn.unstable_ImmediatePriority,RA=Dn.unstable_UserBlockingPriority,gd=Dn.unstable_NormalPriority,eD=Dn.unstable_LowPriority,CA=Dn.unstable_IdlePriority,mf=null,Tr=null;function tD(t){if(Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(mf,t,void 0,(t.current.flags&128)===128)}catch{}}var ir=Math.clz32?Math.clz32:iD,nD=Math.log,rD=Math.LN2;function iD(t){return t>>>=0,t===0?32:31-(nD(t)/rD|0)|0}var nh=64,rh=4194304;function Bu(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Bu(a):(s&=o,s!==0&&(r=Bu(s)))}else o=n&~i,o!==0?r=Bu(o):s!==0&&(r=Bu(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ir(e),i=1<<n,r|=t[n],e&=~i;return r}function sD(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oD(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ir(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=sD(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function yg(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kA(){var t=nh;return nh<<=1,!(nh&4194240)&&(nh=64),t}function im(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ir(e),t[e]=n}function aD(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ir(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ov(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ir(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function bA(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xA,av,NA,DA,OA,vg=!1,ih=[],xi=null,Ni=null,Di=null,Tl=new Map,Sl=new Map,Ti=[],uD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function a0(t,e){switch(t){case"focusin":case"focusout":xi=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":Tl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(e.pointerId)}}function Au(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=cc(e),e!==null&&av(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lD(t,e,n,r,i){switch(e){case"focusin":return xi=Au(xi,t,e,n,r,i),!0;case"dragenter":return Ni=Au(Ni,t,e,n,r,i),!0;case"mouseover":return Di=Au(Di,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Tl.set(s,Au(Tl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Sl.set(s,Au(Sl.get(s)||null,t,e,n,r,i)),!0}return!1}function VA(t){var e=Cs(t.target);if(e!==null){var n=ao(e);if(n!==null){if(e=n.tag,e===13){if(e=TA(n),e!==null){t.blockedOn=e,OA(t.priority,function(){NA(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kh(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_g(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fg=r,n.target.dispatchEvent(r),fg=null}else return e=cc(n),e!==null&&av(e),t.blockedOn=n,!1;e.shift()}return!0}function u0(t,e,n){kh(t)&&n.delete(e)}function cD(){vg=!1,xi!==null&&kh(xi)&&(xi=null),Ni!==null&&kh(Ni)&&(Ni=null),Di!==null&&kh(Di)&&(Di=null),Tl.forEach(u0),Sl.forEach(u0)}function Pu(t,e){t.blockedOn===e&&(t.blockedOn=null,vg||(vg=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,cD)))}function Al(t){function e(i){return Pu(i,t)}if(0<ih.length){Pu(ih[0],t);for(var n=1;n<ih.length;n++){var r=ih[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xi!==null&&Pu(xi,t),Ni!==null&&Pu(Ni,t),Di!==null&&Pu(Di,t),Tl.forEach(e),Sl.forEach(e),n=0;n<Ti.length;n++)r=Ti[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)VA(n),n.blockedOn===null&&Ti.shift()}var Zo=ti.ReactCurrentBatchConfig,vd=!0;function hD(t,e,n,r){var i=Ce,s=Zo.transition;Zo.transition=null;try{Ce=1,uv(t,e,n,r)}finally{Ce=i,Zo.transition=s}}function dD(t,e,n,r){var i=Ce,s=Zo.transition;Zo.transition=null;try{Ce=4,uv(t,e,n,r)}finally{Ce=i,Zo.transition=s}}function uv(t,e,n,r){if(vd){var i=_g(t,e,n,r);if(i===null)pm(t,e,r,_d,n),a0(t,r);else if(lD(i,t,e,n,r))r.stopPropagation();else if(a0(t,r),e&4&&-1<uD.indexOf(t)){for(;i!==null;){var s=cc(i);if(s!==null&&xA(s),s=_g(t,e,n,r),s===null&&pm(t,e,r,_d,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pm(t,e,r,null,n)}}var _d=null;function _g(t,e,n,r){if(_d=null,t=iv(r),t=Cs(t),t!==null)if(e=ao(t),e===null)t=null;else if(n=e.tag,n===13){if(t=TA(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _d=t,null}function LA(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZN()){case sv:return 1;case RA:return 4;case gd:case eD:return 16;case CA:return 536870912;default:return 16}default:return 16}}var Ri=null,lv=null,bh=null;function MA(){if(bh)return bh;var t,e=lv,n=e.length,r,i="value"in Ri?Ri.value:Ri.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return bh=i.slice(t,1<r?1-r:void 0)}function xh(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sh(){return!0}function l0(){return!1}function Ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sh:l0,this.isPropagationStopped=l0,this}return Xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sh)},persist:function(){},isPersistent:sh}),e}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cv=Ln($a),lc=Xe({},$a,{view:0,detail:0}),fD=Ln(lc),sm,om,Ru,gf=Xe({},lc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ru&&(Ru&&t.type==="mousemove"?(sm=t.screenX-Ru.screenX,om=t.screenY-Ru.screenY):om=sm=0,Ru=t),sm)},movementY:function(t){return"movementY"in t?t.movementY:om}}),c0=Ln(gf),pD=Xe({},gf,{dataTransfer:0}),mD=Ln(pD),gD=Xe({},lc,{relatedTarget:0}),am=Ln(gD),yD=Xe({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),vD=Ln(yD),_D=Xe({},$a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wD=Ln(_D),ED=Xe({},$a,{data:0}),h0=Ln(ED),ID={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AD(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SD[t])?!!e[t]:!1}function hv(){return AD}var PD=Xe({},lc,{key:function(t){if(t.key){var e=ID[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xh(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TD[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hv,charCode:function(t){return t.type==="keypress"?xh(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xh(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RD=Ln(PD),CD=Xe({},gf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),d0=Ln(CD),kD=Xe({},lc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hv}),bD=Ln(kD),xD=Xe({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),ND=Ln(xD),DD=Xe({},gf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OD=Ln(DD),VD=[9,13,27,32],dv=Kr&&"CompositionEvent"in window,el=null;Kr&&"documentMode"in document&&(el=document.documentMode);var LD=Kr&&"TextEvent"in window&&!el,FA=Kr&&(!dv||el&&8<el&&11>=el),f0=" ",p0=!1;function UA(t,e){switch(t){case"keyup":return VD.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $A(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fo=!1;function MD(t,e){switch(t){case"compositionend":return $A(e);case"keypress":return e.which!==32?null:(p0=!0,f0);case"textInput":return t=e.data,t===f0&&p0?null:t;default:return null}}function FD(t,e){if(Fo)return t==="compositionend"||!dv&&UA(t,e)?(t=MA(),bh=lv=Ri=null,Fo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return FA&&e.locale!=="ko"?null:e.data;default:return null}}var UD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function m0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UD[t.type]:e==="textarea"}function jA(t,e,n,r){vA(r),e=wd(e,"onChange"),0<e.length&&(n=new cv("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var tl=null,Pl=null;function $D(t){XA(t,0)}function yf(t){var e=jo(t);if(hA(e))return t}function jD(t,e){if(t==="change")return e}var BA=!1;if(Kr){var um;if(Kr){var lm="oninput"in document;if(!lm){var g0=document.createElement("div");g0.setAttribute("oninput","return;"),lm=typeof g0.oninput=="function"}um=lm}else um=!1;BA=um&&(!document.documentMode||9<document.documentMode)}function y0(){tl&&(tl.detachEvent("onpropertychange",zA),Pl=tl=null)}function zA(t){if(t.propertyName==="value"&&yf(Pl)){var e=[];jA(e,Pl,t,iv(t)),IA($D,e)}}function BD(t,e,n){t==="focusin"?(y0(),tl=e,Pl=n,tl.attachEvent("onpropertychange",zA)):t==="focusout"&&y0()}function zD(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yf(Pl)}function qD(t,e){if(t==="click")return yf(e)}function GD(t,e){if(t==="input"||t==="change")return yf(e)}function WD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ur=typeof Object.is=="function"?Object.is:WD;function Rl(t,e){if(ur(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tg.call(e,i)||!ur(t[i],e[i]))return!1}return!0}function v0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _0(t,e){var n=v0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=v0(n)}}function qA(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qA(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function GA(){for(var t=window,e=fd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fd(t.document)}return e}function fv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HD(t){var e=GA(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qA(n.ownerDocument.documentElement,n)){if(r!==null&&fv(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_0(n,s);var o=_0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KD=Kr&&"documentMode"in document&&11>=document.documentMode,Uo=null,wg=null,nl=null,Eg=!1;function w0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eg||Uo==null||Uo!==fd(r)||(r=Uo,"selectionStart"in r&&fv(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nl&&Rl(nl,r)||(nl=r,r=wd(wg,"onSelect"),0<r.length&&(e=new cv("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Uo)))}function oh(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $o={animationend:oh("Animation","AnimationEnd"),animationiteration:oh("Animation","AnimationIteration"),animationstart:oh("Animation","AnimationStart"),transitionend:oh("Transition","TransitionEnd")},cm={},WA={};Kr&&(WA=document.createElement("div").style,"AnimationEvent"in window||(delete $o.animationend.animation,delete $o.animationiteration.animation,delete $o.animationstart.animation),"TransitionEvent"in window||delete $o.transitionend.transition);function vf(t){if(cm[t])return cm[t];if(!$o[t])return t;var e=$o[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in WA)return cm[t]=e[n];return t}var HA=vf("animationend"),KA=vf("animationiteration"),QA=vf("animationstart"),YA=vf("transitionend"),JA=new Map,E0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(t,e){JA.set(t,e),oo(e,[t])}for(var hm=0;hm<E0.length;hm++){var dm=E0[hm],QD=dm.toLowerCase(),YD=dm[0].toUpperCase()+dm.slice(1);ns(QD,"on"+YD)}ns(HA,"onAnimationEnd");ns(KA,"onAnimationIteration");ns(QA,"onAnimationStart");ns("dblclick","onDoubleClick");ns("focusin","onFocus");ns("focusout","onBlur");ns(YA,"onTransitionEnd");la("onMouseEnter",["mouseout","mouseover"]);la("onMouseLeave",["mouseout","mouseover"]);la("onPointerEnter",["pointerout","pointerover"]);la("onPointerLeave",["pointerout","pointerover"]);oo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oo("onBeforeInput",["compositionend","keypress","textInput","paste"]);oo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JD=new Set("cancel close invalid load scroll toggle".split(" ").concat(zu));function I0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,QN(r,e,void 0,t),t.currentTarget=null}function XA(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;I0(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;I0(i,a,c),s=u}}}if(md)throw t=gg,md=!1,gg=null,t}function Le(t,e){var n=e[Pg];n===void 0&&(n=e[Pg]=new Set);var r=t+"__bubble";n.has(r)||(ZA(e,t,2,!1),n.add(r))}function fm(t,e,n){var r=0;e&&(r|=4),ZA(n,t,r,e)}var ah="_reactListening"+Math.random().toString(36).slice(2);function Cl(t){if(!t[ah]){t[ah]=!0,oA.forEach(function(n){n!=="selectionchange"&&(JD.has(n)||fm(n,!1,t),fm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ah]||(e[ah]=!0,fm("selectionchange",!1,e))}}function ZA(t,e,n,r){switch(LA(e)){case 1:var i=hD;break;case 4:i=dD;break;default:i=uv}n=i.bind(null,e,n,t),i=void 0,!mg||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pm(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Cs(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}IA(function(){var c=s,h=iv(n),d=[];e:{var p=JA.get(t);if(p!==void 0){var g=cv,I=t;switch(t){case"keypress":if(xh(n)===0)break e;case"keydown":case"keyup":g=RD;break;case"focusin":I="focus",g=am;break;case"focusout":I="blur",g=am;break;case"beforeblur":case"afterblur":g=am;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=c0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bD;break;case HA:case KA:case QA:g=vD;break;case YA:g=ND;break;case"scroll":g=fD;break;case"wheel":g=OD;break;case"copy":case"cut":case"paste":g=wD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=d0}var A=(e&4)!==0,k=!A&&t==="scroll",E=A?p!==null?p+"Capture":null:p;A=[];for(var _=c,T;_!==null;){T=_;var C=T.stateNode;if(T.tag===5&&C!==null&&(T=C,E!==null&&(C=Il(_,E),C!=null&&A.push(kl(_,C,T)))),k)break;_=_.return}0<A.length&&(p=new g(p,I,null,n,h),d.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==fg&&(I=n.relatedTarget||n.fromElement)&&(Cs(I)||I[Qr]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(I=n.relatedTarget||n.toElement,g=c,I=I?Cs(I):null,I!==null&&(k=ao(I),I!==k||I.tag!==5&&I.tag!==6)&&(I=null)):(g=null,I=c),g!==I)){if(A=c0,C="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(A=d0,C="onPointerLeave",E="onPointerEnter",_="pointer"),k=g==null?p:jo(g),T=I==null?p:jo(I),p=new A(C,_+"leave",g,n,h),p.target=k,p.relatedTarget=T,C=null,Cs(h)===c&&(A=new A(E,_+"enter",I,n,h),A.target=T,A.relatedTarget=k,C=A),k=C,g&&I)t:{for(A=g,E=I,_=0,T=A;T;T=So(T))_++;for(T=0,C=E;C;C=So(C))T++;for(;0<_-T;)A=So(A),_--;for(;0<T-_;)E=So(E),T--;for(;_--;){if(A===E||E!==null&&A===E.alternate)break t;A=So(A),E=So(E)}A=null}else A=null;g!==null&&T0(d,p,g,A,!1),I!==null&&k!==null&&T0(d,k,I,A,!0)}}e:{if(p=c?jo(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var L=jD;else if(m0(p))if(BA)L=GD;else{L=zD;var V=BD}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=qD);if(L&&(L=L(t,c))){jA(d,L,n,h);break e}V&&V(t,p,c),t==="focusout"&&(V=p._wrapperState)&&V.controlled&&p.type==="number"&&ug(p,"number",p.value)}switch(V=c?jo(c):window,t){case"focusin":(m0(V)||V.contentEditable==="true")&&(Uo=V,wg=c,nl=null);break;case"focusout":nl=wg=Uo=null;break;case"mousedown":Eg=!0;break;case"contextmenu":case"mouseup":case"dragend":Eg=!1,w0(d,n,h);break;case"selectionchange":if(KD)break;case"keydown":case"keyup":w0(d,n,h)}var v;if(dv)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Fo?UA(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(FA&&n.locale!=="ko"&&(Fo||y!=="onCompositionStart"?y==="onCompositionEnd"&&Fo&&(v=MA()):(Ri=h,lv="value"in Ri?Ri.value:Ri.textContent,Fo=!0)),V=wd(c,y),0<V.length&&(y=new h0(y,t,null,n,h),d.push({event:y,listeners:V}),v?y.data=v:(v=$A(n),v!==null&&(y.data=v)))),(v=LD?MD(t,n):FD(t,n))&&(c=wd(c,"onBeforeInput"),0<c.length&&(h=new h0("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=v))}XA(d,e)})}function kl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Il(t,n),s!=null&&r.unshift(kl(t,s,i)),s=Il(t,e),s!=null&&r.push(kl(t,s,i))),t=t.return}return r}function So(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function T0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Il(n,s),u!=null&&o.unshift(kl(n,u,a))):i||(u=Il(n,s),u!=null&&o.push(kl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XD=/\r\n?/g,ZD=/\u0000|\uFFFD/g;function S0(t){return(typeof t=="string"?t:""+t).replace(XD,`
`).replace(ZD,"")}function uh(t,e,n){if(e=S0(e),S0(t)!==e&&n)throw Error(H(425))}function Ed(){}var Ig=null,Tg=null;function Sg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ag=typeof setTimeout=="function"?setTimeout:void 0,eO=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,tO=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(t){return A0.resolve(null).then(t).catch(nO)}:Ag;function nO(t){setTimeout(function(){throw t})}function mm(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Al(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function P0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ja=Math.random().toString(36).slice(2),mr="__reactFiber$"+ja,bl="__reactProps$"+ja,Qr="__reactContainer$"+ja,Pg="__reactEvents$"+ja,rO="__reactListeners$"+ja,iO="__reactHandles$"+ja;function Cs(t){var e=t[mr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qr]||n[mr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=P0(t);t!==null;){if(n=t[mr])return n;t=P0(t)}return e}t=n,n=t.parentNode}return null}function cc(t){return t=t[mr]||t[Qr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function _f(t){return t[bl]||null}var Rg=[],Bo=-1;function rs(t){return{current:t}}function Ue(t){0>Bo||(t.current=Rg[Bo],Rg[Bo]=null,Bo--)}function De(t,e){Bo++,Rg[Bo]=t.current,t.current=e}var zi={},Yt=rs(zi),In=rs(!1),Bs=zi;function ca(t,e){var n=t.type.contextTypes;if(!n)return zi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tn(t){return t=t.childContextTypes,t!=null}function Id(){Ue(In),Ue(Yt)}function R0(t,e,n){if(Yt.current!==zi)throw Error(H(168));De(Yt,e),De(In,n)}function e1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,BN(t)||"Unknown",i));return Xe({},n,r)}function Td(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zi,Bs=Yt.current,De(Yt,t),De(In,In.current),!0}function C0(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=e1(t,e,Bs),r.__reactInternalMemoizedMergedChildContext=t,Ue(In),Ue(Yt),De(Yt,t)):Ue(In),De(In,n)}var Fr=null,wf=!1,gm=!1;function t1(t){Fr===null?Fr=[t]:Fr.push(t)}function sO(t){wf=!0,t1(t)}function is(){if(!gm&&Fr!==null){gm=!0;var t=0,e=Ce;try{var n=Fr;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fr=null,wf=!1}catch(i){throw Fr!==null&&(Fr=Fr.slice(t+1)),PA(sv,is),i}finally{Ce=e,gm=!1}}return null}var zo=[],qo=0,Sd=null,Ad=0,$n=[],jn=0,zs=null,$r=1,jr="";function vs(t,e){zo[qo++]=Ad,zo[qo++]=Sd,Sd=t,Ad=e}function n1(t,e,n){$n[jn++]=$r,$n[jn++]=jr,$n[jn++]=zs,zs=t;var r=$r;t=jr;var i=32-ir(r)-1;r&=~(1<<i),n+=1;var s=32-ir(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$r=1<<32-ir(e)+i|n<<i|r,jr=s+t}else $r=1<<s|n<<i|r,jr=t}function pv(t){t.return!==null&&(vs(t,1),n1(t,1,0))}function mv(t){for(;t===Sd;)Sd=zo[--qo],zo[qo]=null,Ad=zo[--qo],zo[qo]=null;for(;t===zs;)zs=$n[--jn],$n[jn]=null,jr=$n[--jn],$n[jn]=null,$r=$n[--jn],$n[jn]=null}var Nn=null,bn=null,Be=!1,rr=null;function r1(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function k0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,bn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zs!==null?{id:$r,overflow:jr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,bn=null,!0):!1;default:return!1}}function Cg(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kg(t){if(Be){var e=bn;if(e){var n=e;if(!k0(t,e)){if(Cg(t))throw Error(H(418));e=Oi(n.nextSibling);var r=Nn;e&&k0(t,e)?r1(r,n):(t.flags=t.flags&-4097|2,Be=!1,Nn=t)}}else{if(Cg(t))throw Error(H(418));t.flags=t.flags&-4097|2,Be=!1,Nn=t}}}function b0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function lh(t){if(t!==Nn)return!1;if(!Be)return b0(t),Be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sg(t.type,t.memoizedProps)),e&&(e=bn)){if(Cg(t))throw i1(),Error(H(418));for(;e;)r1(t,e),e=Oi(e.nextSibling)}if(b0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Nn?Oi(t.stateNode.nextSibling):null;return!0}function i1(){for(var t=bn;t;)t=Oi(t.nextSibling)}function ha(){bn=Nn=null,Be=!1}function gv(t){rr===null?rr=[t]:rr.push(t)}var oO=ti.ReactCurrentBatchConfig;function Cu(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function ch(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function x0(t){var e=t._init;return e(t._payload)}function s1(t){function e(E,_){if(t){var T=E.deletions;T===null?(E.deletions=[_],E.flags|=16):T.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Fi(E,_),E.index=0,E.sibling=null,E}function s(E,_,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<_?(E.flags|=2,_):T):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,_,T,C){return _===null||_.tag!==6?(_=Tm(T,E.mode,C),_.return=E,_):(_=i(_,T),_.return=E,_)}function u(E,_,T,C){var L=T.type;return L===Mo?h(E,_,T.props.children,C,T.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ei&&x0(L)===_.type)?(C=i(_,T.props),C.ref=Cu(E,_,T),C.return=E,C):(C=Fh(T.type,T.key,T.props,null,E.mode,C),C.ref=Cu(E,_,T),C.return=E,C)}function c(E,_,T,C){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Sm(T,E.mode,C),_.return=E,_):(_=i(_,T.children||[]),_.return=E,_)}function h(E,_,T,C,L){return _===null||_.tag!==7?(_=Ls(T,E.mode,C,L),_.return=E,_):(_=i(_,T),_.return=E,_)}function d(E,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Tm(""+_,E.mode,T),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zc:return T=Fh(_.type,_.key,_.props,null,E.mode,T),T.ref=Cu(E,null,_),T.return=E,T;case Lo:return _=Sm(_,E.mode,T),_.return=E,_;case Ei:var C=_._init;return d(E,C(_._payload),T)}if(ju(_)||Tu(_))return _=Ls(_,E.mode,T,null),_.return=E,_;ch(E,_)}return null}function p(E,_,T,C){var L=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return L!==null?null:a(E,_,""+T,C);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Zc:return T.key===L?u(E,_,T,C):null;case Lo:return T.key===L?c(E,_,T,C):null;case Ei:return L=T._init,p(E,_,L(T._payload),C)}if(ju(T)||Tu(T))return L!==null?null:h(E,_,T,C,null);ch(E,T)}return null}function g(E,_,T,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return E=E.get(T)||null,a(_,E,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Zc:return E=E.get(C.key===null?T:C.key)||null,u(_,E,C,L);case Lo:return E=E.get(C.key===null?T:C.key)||null,c(_,E,C,L);case Ei:var V=C._init;return g(E,_,T,V(C._payload),L)}if(ju(C)||Tu(C))return E=E.get(T)||null,h(_,E,C,L,null);ch(_,C)}return null}function I(E,_,T,C){for(var L=null,V=null,v=_,y=_=0,S=null;v!==null&&y<T.length;y++){v.index>y?(S=v,v=null):S=v.sibling;var P=p(E,v,T[y],C);if(P===null){v===null&&(v=S);break}t&&v&&P.alternate===null&&e(E,v),_=s(P,_,y),V===null?L=P:V.sibling=P,V=P,v=S}if(y===T.length)return n(E,v),Be&&vs(E,y),L;if(v===null){for(;y<T.length;y++)v=d(E,T[y],C),v!==null&&(_=s(v,_,y),V===null?L=v:V.sibling=v,V=v);return Be&&vs(E,y),L}for(v=r(E,v);y<T.length;y++)S=g(v,E,y,T[y],C),S!==null&&(t&&S.alternate!==null&&v.delete(S.key===null?y:S.key),_=s(S,_,y),V===null?L=S:V.sibling=S,V=S);return t&&v.forEach(function(x){return e(E,x)}),Be&&vs(E,y),L}function A(E,_,T,C){var L=Tu(T);if(typeof L!="function")throw Error(H(150));if(T=L.call(T),T==null)throw Error(H(151));for(var V=L=null,v=_,y=_=0,S=null,P=T.next();v!==null&&!P.done;y++,P=T.next()){v.index>y?(S=v,v=null):S=v.sibling;var x=p(E,v,P.value,C);if(x===null){v===null&&(v=S);break}t&&v&&x.alternate===null&&e(E,v),_=s(x,_,y),V===null?L=x:V.sibling=x,V=x,v=S}if(P.done)return n(E,v),Be&&vs(E,y),L;if(v===null){for(;!P.done;y++,P=T.next())P=d(E,P.value,C),P!==null&&(_=s(P,_,y),V===null?L=P:V.sibling=P,V=P);return Be&&vs(E,y),L}for(v=r(E,v);!P.done;y++,P=T.next())P=g(v,E,y,P.value,C),P!==null&&(t&&P.alternate!==null&&v.delete(P.key===null?y:P.key),_=s(P,_,y),V===null?L=P:V.sibling=P,V=P);return t&&v.forEach(function(O){return e(E,O)}),Be&&vs(E,y),L}function k(E,_,T,C){if(typeof T=="object"&&T!==null&&T.type===Mo&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Zc:e:{for(var L=T.key,V=_;V!==null;){if(V.key===L){if(L=T.type,L===Mo){if(V.tag===7){n(E,V.sibling),_=i(V,T.props.children),_.return=E,E=_;break e}}else if(V.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ei&&x0(L)===V.type){n(E,V.sibling),_=i(V,T.props),_.ref=Cu(E,V,T),_.return=E,E=_;break e}n(E,V);break}else e(E,V);V=V.sibling}T.type===Mo?(_=Ls(T.props.children,E.mode,C,T.key),_.return=E,E=_):(C=Fh(T.type,T.key,T.props,null,E.mode,C),C.ref=Cu(E,_,T),C.return=E,E=C)}return o(E);case Lo:e:{for(V=T.key;_!==null;){if(_.key===V)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(E,_.sibling),_=i(_,T.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Sm(T,E.mode,C),_.return=E,E=_}return o(E);case Ei:return V=T._init,k(E,_,V(T._payload),C)}if(ju(T))return I(E,_,T,C);if(Tu(T))return A(E,_,T,C);ch(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,T),_.return=E,E=_):(n(E,_),_=Tm(T,E.mode,C),_.return=E,E=_),o(E)):n(E,_)}return k}var da=s1(!0),o1=s1(!1),Pd=rs(null),Rd=null,Go=null,yv=null;function vv(){yv=Go=Rd=null}function _v(t){var e=Pd.current;Ue(Pd),t._currentValue=e}function bg(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ea(t,e){Rd=t,yv=Go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(yv!==t)if(t={context:t,memoizedValue:e,next:null},Go===null){if(Rd===null)throw Error(H(308));Go=t,Rd.dependencies={lanes:0,firstContext:t}}else Go=Go.next=t;return e}var ks=null;function wv(t){ks===null?ks=[t]:ks.push(t)}function a1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wv(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yr(t,r)}function Yr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function Ev(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yr(t,n)}return i=r.interleaved,i===null?(e.next=e,wv(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yr(t,n)}function Nh(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ov(t,n)}}function N0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cd(t,e,n,r){var i=t.updateQueue;Ii=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,A=a;switch(p=e,g=n,A.tag){case 1:if(I=A.payload,typeof I=="function"){d=I.call(g,d,p);break e}d=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=A.payload,p=typeof I=="function"?I.call(g,d,p):I,p==null)break e;d=Xe({},d,p);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,u=d):h=h.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gs|=o,t.lanes=o,t.memoizedState=d}}function D0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var hc={},Sr=rs(hc),xl=rs(hc),Nl=rs(hc);function bs(t){if(t===hc)throw Error(H(174));return t}function Iv(t,e){switch(De(Nl,e),De(xl,t),De(Sr,hc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cg(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cg(e,t)}Ue(Sr),De(Sr,e)}function fa(){Ue(Sr),Ue(xl),Ue(Nl)}function l1(t){bs(Nl.current);var e=bs(Sr.current),n=cg(e,t.type);e!==n&&(De(xl,t),De(Sr,n))}function Tv(t){xl.current===t&&(Ue(Sr),Ue(xl))}var Qe=rs(0);function kd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ym=[];function Sv(){for(var t=0;t<ym.length;t++)ym[t]._workInProgressVersionPrimary=null;ym.length=0}var Dh=ti.ReactCurrentDispatcher,vm=ti.ReactCurrentBatchConfig,qs=0,Ye=null,_t=null,At=null,bd=!1,rl=!1,Dl=0,aO=0;function Gt(){throw Error(H(321))}function Av(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ur(t[n],e[n]))return!1;return!0}function Pv(t,e,n,r,i,s){if(qs=s,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dh.current=t===null||t.memoizedState===null?hO:dO,t=n(r,i),rl){s=0;do{if(rl=!1,Dl=0,25<=s)throw Error(H(301));s+=1,At=_t=null,e.updateQueue=null,Dh.current=fO,t=n(r,i)}while(rl)}if(Dh.current=xd,e=_t!==null&&_t.next!==null,qs=0,At=_t=Ye=null,bd=!1,e)throw Error(H(300));return t}function Rv(){var t=Dl!==0;return Dl=0,t}function fr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?Ye.memoizedState=At=t:At=At.next=t,At}function Hn(){if(_t===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=At===null?Ye.memoizedState:At.next;if(e!==null)At=e,_t=t;else{if(t===null)throw Error(H(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},At===null?Ye.memoizedState=At=t:At=At.next=t}return At}function Ol(t,e){return typeof e=="function"?e(t):e}function _m(t){var e=Hn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=_t,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((qs&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=d,o=r):u=u.next=d,Ye.lanes|=h,Gs|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,ur(r,e.memoizedState)||(vn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ye.lanes|=s,Gs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wm(t){var e=Hn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ur(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function c1(){}function h1(t,e){var n=Ye,r=Hn(),i=e(),s=!ur(r.memoizedState,i);if(s&&(r.memoizedState=i,vn=!0),r=r.queue,Cv(p1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,Vl(9,f1.bind(null,n,r,i,e),void 0,null),Ct===null)throw Error(H(349));qs&30||d1(n,e,i)}return i}function d1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f1(t,e,n,r){e.value=n,e.getSnapshot=r,m1(e)&&g1(t)}function p1(t,e,n){return n(function(){m1(e)&&g1(t)})}function m1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ur(t,n)}catch{return!0}}function g1(t){var e=Yr(t,1);e!==null&&sr(e,t,1,-1)}function O0(t){var e=fr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ol,lastRenderedState:t},e.queue=t,t=t.dispatch=cO.bind(null,Ye,t),[e.memoizedState,t]}function Vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function y1(){return Hn().memoizedState}function Oh(t,e,n,r){var i=fr();Ye.flags|=t,i.memoizedState=Vl(1|e,n,void 0,r===void 0?null:r)}function Ef(t,e,n,r){var i=Hn();r=r===void 0?null:r;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,r!==null&&Av(r,o.deps)){i.memoizedState=Vl(e,n,s,r);return}}Ye.flags|=t,i.memoizedState=Vl(1|e,n,s,r)}function V0(t,e){return Oh(8390656,8,t,e)}function Cv(t,e){return Ef(2048,8,t,e)}function v1(t,e){return Ef(4,2,t,e)}function _1(t,e){return Ef(4,4,t,e)}function w1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E1(t,e,n){return n=n!=null?n.concat([t]):null,Ef(4,4,w1.bind(null,e,t),n)}function kv(){}function I1(t,e){var n=Hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Av(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function T1(t,e){var n=Hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Av(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function S1(t,e,n){return qs&21?(ur(n,e)||(n=kA(),Ye.lanes|=n,Gs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function uO(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=vm.transition;vm.transition={};try{t(!1),e()}finally{Ce=n,vm.transition=r}}function A1(){return Hn().memoizedState}function lO(t,e,n){var r=Mi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P1(t))R1(e,n);else if(n=a1(t,e,n,r),n!==null){var i=sn();sr(n,t,r,i),C1(n,e,r)}}function cO(t,e,n){var r=Mi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P1(t))R1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ur(a,o)){var u=e.interleaved;u===null?(i.next=i,wv(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=a1(t,e,i,r),n!==null&&(i=sn(),sr(n,t,r,i),C1(n,e,r))}}function P1(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function R1(t,e){rl=bd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ov(t,n)}}var xd={readContext:Wn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},hO={readContext:Wn,useCallback:function(t,e){return fr().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:V0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oh(4194308,4,w1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oh(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oh(4,2,t,e)},useMemo:function(t,e){var n=fr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lO.bind(null,Ye,t),[r.memoizedState,t]},useRef:function(t){var e=fr();return t={current:t},e.memoizedState=t},useState:O0,useDebugValue:kv,useDeferredValue:function(t){return fr().memoizedState=t},useTransition:function(){var t=O0(!1),e=t[0];return t=uO.bind(null,t[1]),fr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ye,i=fr();if(Be){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),Ct===null)throw Error(H(349));qs&30||d1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,V0(p1.bind(null,r,s,t),[t]),r.flags|=2048,Vl(9,f1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fr(),e=Ct.identifierPrefix;if(Be){var n=jr,r=$r;n=(r&~(1<<32-ir(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Dl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aO++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dO={readContext:Wn,useCallback:I1,useContext:Wn,useEffect:Cv,useImperativeHandle:E1,useInsertionEffect:v1,useLayoutEffect:_1,useMemo:T1,useReducer:_m,useRef:y1,useState:function(){return _m(Ol)},useDebugValue:kv,useDeferredValue:function(t){var e=Hn();return S1(e,_t.memoizedState,t)},useTransition:function(){var t=_m(Ol)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:c1,useSyncExternalStore:h1,useId:A1,unstable_isNewReconciler:!1},fO={readContext:Wn,useCallback:I1,useContext:Wn,useEffect:Cv,useImperativeHandle:E1,useInsertionEffect:v1,useLayoutEffect:_1,useMemo:T1,useReducer:wm,useRef:y1,useState:function(){return wm(Ol)},useDebugValue:kv,useDeferredValue:function(t){var e=Hn();return _t===null?e.memoizedState=t:S1(e,_t.memoizedState,t)},useTransition:function(){var t=wm(Ol)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:c1,useSyncExternalStore:h1,useId:A1,unstable_isNewReconciler:!1};function tr(t,e){if(t&&t.defaultProps){e=Xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xg(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var If={isMounted:function(t){return(t=t._reactInternals)?ao(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=sn(),i=Mi(t),s=Gr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,i),e!==null&&(sr(e,t,i,r),Nh(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=sn(),i=Mi(t),s=Gr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,i),e!==null&&(sr(e,t,i,r),Nh(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),r=Mi(t),i=Gr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vi(t,i,r),e!==null&&(sr(e,t,r,n),Nh(e,t,r))}};function L0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Rl(n,r)||!Rl(i,s):!0}function k1(t,e,n){var r=!1,i=zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(i=Tn(e)?Bs:Yt.current,r=e.contextTypes,s=(r=r!=null)?ca(t,i):zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=If,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function M0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&If.enqueueReplaceState(e,e.state,null)}function Ng(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ev(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wn(s):(s=Tn(e)?Bs:Yt.current,i.context=ca(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xg(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&If.enqueueReplaceState(i,i.state,null),Cd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function pa(t,e){try{var n="",r=e;do n+=jN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Em(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pO=typeof WeakMap=="function"?WeakMap:Map;function b1(t,e,n){n=Gr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Dd||(Dd=!0,zg=r),Dg(t,e)},n}function x1(t,e,n){n=Gr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dg(t,e),typeof r!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function F0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CO.bind(null,t,e,n),e.then(t,t))}function U0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gr(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var mO=ti.ReactCurrentOwner,vn=!1;function Xt(t,e,n,r){e.child=t===null?o1(e,null,n,r):da(e,t.child,n,r)}function j0(t,e,n,r,i){n=n.render;var s=e.ref;return ea(e,i),r=Pv(t,e,n,r,s,i),n=Rv(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jr(t,e,i)):(Be&&n&&pv(e),e.flags|=1,Xt(t,e,r,i),e.child)}function B0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,N1(t,e,s,r,i)):(t=Fh(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Rl,n(o,r)&&t.ref===e.ref)return Jr(t,e,i)}return e.flags|=1,t=Fi(s,r),t.ref=e.ref,t.return=e,e.child=t}function N1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Rl(s,r)&&t.ref===e.ref)if(vn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Jr(t,e,i)}return Og(t,e,n,r,i)}function D1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Ho,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De(Ho,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,De(Ho,Cn),Cn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,De(Ho,Cn),Cn|=r;return Xt(t,e,i,n),e.child}function O1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Og(t,e,n,r,i){var s=Tn(n)?Bs:Yt.current;return s=ca(e,s),ea(e,i),n=Pv(t,e,n,r,s,i),r=Rv(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jr(t,e,i)):(Be&&r&&pv(e),e.flags|=1,Xt(t,e,n,i),e.child)}function z0(t,e,n,r,i){if(Tn(n)){var s=!0;Td(e)}else s=!1;if(ea(e,i),e.stateNode===null)Vh(t,e),k1(e,n,r),Ng(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=Tn(n)?Bs:Yt.current,c=ca(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&M0(e,o,r,c),Ii=!1;var p=e.memoizedState;o.state=p,Cd(e,r,o,i),u=e.memoizedState,a!==r||p!==u||In.current||Ii?(typeof h=="function"&&(xg(e,n,h,r),u=e.memoizedState),(a=Ii||L0(e,n,a,r,p,u,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,u1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:tr(e.type,a),o.props=c,d=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Wn(u):(u=Tn(n)?Bs:Yt.current,u=ca(e,u));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==u)&&M0(e,o,r,u),Ii=!1,p=e.memoizedState,o.state=p,Cd(e,r,o,i);var I=e.memoizedState;a!==d||p!==I||In.current||Ii?(typeof g=="function"&&(xg(e,n,g,r),I=e.memoizedState),(c=Ii||L0(e,n,c,r,p,I,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Vg(t,e,n,r,s,i)}function Vg(t,e,n,r,i,s){O1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&C0(e,n,!1),Jr(t,e,s);r=e.stateNode,mO.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=da(e,t.child,null,s),e.child=da(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=r.state,i&&C0(e,n,!0),e.child}function V1(t){var e=t.stateNode;e.pendingContext?R0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&R0(t,e.context,!1),Iv(t,e.containerInfo)}function q0(t,e,n,r,i){return ha(),gv(i),e.flags|=256,Xt(t,e,n,r),e.child}var Lg={dehydrated:null,treeContext:null,retryLane:0};function Mg(t){return{baseLanes:t,cachePool:null,transitions:null}}function L1(t,e,n){var r=e.pendingProps,i=Qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De(Qe,i&1),t===null)return kg(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Af(o,r,0,null),t=Ls(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mg(n),e.memoizedState=Lg,t):bv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gO(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Fi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fi(a,s):(s=Ls(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lg,r}return s=t.child,t=s.sibling,r=Fi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bv(t,e){return e=Af({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hh(t,e,n,r){return r!==null&&gv(r),da(e,t.child,null,n),t=bv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gO(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Em(Error(H(422))),hh(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Af({mode:"visible",children:r.children},i,0,null),s=Ls(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&da(e,t.child,null,o),e.child.memoizedState=Mg(o),e.memoizedState=Lg,s);if(!(e.mode&1))return hh(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=Em(s,r,void 0),hh(t,e,o,r)}if(a=(o&t.childLanes)!==0,vn||a){if(r=Ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yr(t,i),sr(r,t,i,-1))}return Lv(),r=Em(Error(H(421))),hh(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kO.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,bn=Oi(i.nextSibling),Nn=e,Be=!0,rr=null,t!==null&&($n[jn++]=$r,$n[jn++]=jr,$n[jn++]=zs,$r=t.id,jr=t.overflow,zs=e),e=bv(e,r.children),e.flags|=4096,e)}function G0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bg(t.return,e,n)}function Im(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function M1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Xt(t,e,r.children,n),r=Qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&G0(t,n,e);else if(t.tag===19)G0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De(Qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Im(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Im(e,!0,n,null,s);break;case"together":Im(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=Fi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yO(t,e,n){switch(e.tag){case 3:V1(e),ha();break;case 5:l1(e);break;case 1:Tn(e.type)&&Td(e);break;case 4:Iv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De(Pd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De(Qe,Qe.current&1),e.flags|=128,null):n&e.child.childLanes?L1(t,e,n):(De(Qe,Qe.current&1),t=Jr(t,e,n),t!==null?t.sibling:null);De(Qe,Qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return M1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(Qe,Qe.current),r)break;return null;case 22:case 23:return e.lanes=0,D1(t,e,n)}return Jr(t,e,n)}var F1,Fg,U1,$1;F1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fg=function(){};U1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,bs(Sr.current);var s=null;switch(n){case"input":i=og(t,i),r=og(t,r),s=[];break;case"select":i=Xe({},i,{value:void 0}),r=Xe({},r,{value:void 0}),s=[];break;case"textarea":i=lg(t,i),r=lg(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ed)}hg(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Le("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$1=function(t,e,n,r){n!==r&&(e.flags|=4)};function ku(t,e){if(!Be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vO(t,e,n){var r=e.pendingProps;switch(mv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return Tn(e.type)&&Id(),Wt(e),null;case 3:return r=e.stateNode,fa(),Ue(In),Ue(Yt),Sv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lh(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rr!==null&&(Wg(rr),rr=null))),Fg(t,e),Wt(e),null;case 5:Tv(e);var i=bs(Nl.current);if(n=e.type,t!==null&&e.stateNode!=null)U1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Wt(e),null}if(t=bs(Sr.current),lh(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mr]=e,r[bl]=s,t=(e.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<zu.length;i++)Le(zu[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":e0(r,s),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Le("invalid",r);break;case"textarea":n0(r,s),Le("invalid",r)}hg(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&uh(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&uh(r.textContent,a,t),i=["children",""+a]):wl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Le("scroll",r)}switch(n){case"input":eh(r),t0(r,s,!0);break;case"textarea":eh(r),r0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ed)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pA(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mr]=e,t[bl]=r,F1(t,e,!1,!1),e.stateNode=t;e:{switch(o=dg(n,r),n){case"dialog":Le("cancel",t),Le("close",t),i=r;break;case"iframe":case"object":case"embed":Le("load",t),i=r;break;case"video":case"audio":for(i=0;i<zu.length;i++)Le(zu[i],t);i=r;break;case"source":Le("error",t),i=r;break;case"img":case"image":case"link":Le("error",t),Le("load",t),i=r;break;case"details":Le("toggle",t),i=r;break;case"input":e0(t,r),i=og(t,r),Le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Xe({},r,{value:void 0}),Le("invalid",t);break;case"textarea":n0(t,r),i=lg(t,r),Le("invalid",t);break;default:i=r}hg(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?yA(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&mA(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&El(t,u):typeof u=="number"&&El(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Le("scroll",t):u!=null&&ev(t,s,u,o))}switch(n){case"input":eh(t),t0(t,r,!1);break;case"textarea":eh(t),r0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Bi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ed)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)$1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=bs(Nl.current),bs(Sr.current),lh(e)){if(r=e.stateNode,n=e.memoizedProps,r[mr]=e,(s=r.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:uh(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uh(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mr]=e,e.stateNode=r}return Wt(e),null;case 13:if(Ue(Qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&bn!==null&&e.mode&1&&!(e.flags&128))i1(),ha(),e.flags|=98560,s=!1;else if(s=lh(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[mr]=e}else ha(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else rr!==null&&(Wg(rr),rr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Qe.current&1?Et===0&&(Et=3):Lv())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return fa(),Fg(t,e),t===null&&Cl(e.stateNode.containerInfo),Wt(e),null;case 10:return _v(e.type._context),Wt(e),null;case 17:return Tn(e.type)&&Id(),Wt(e),null;case 19:if(Ue(Qe),s=e.memoizedState,s===null)return Wt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ku(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kd(t),o!==null){for(e.flags|=128,ku(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De(Qe,Qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ct()>ma&&(e.flags|=128,r=!0,ku(s,!1),e.lanes=4194304)}else{if(!r)if(t=kd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ku(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return Wt(e),null}else 2*ct()-s.renderingStartTime>ma&&n!==1073741824&&(e.flags|=128,r=!0,ku(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ct(),e.sibling=null,n=Qe.current,De(Qe,r?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Vv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Cn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function _O(t,e){switch(mv(e),e.tag){case 1:return Tn(e.type)&&Id(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fa(),Ue(In),Ue(Yt),Sv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tv(e),null;case 13:if(Ue(Qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue(Qe),null;case 4:return fa(),null;case 10:return _v(e.type._context),null;case 22:case 23:return Vv(),null;case 24:return null;default:return null}}var dh=!1,Kt=!1,wO=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Wo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){tt(t,e,r)}else n.current=null}function Ug(t,e,n){try{n()}catch(r){tt(t,e,r)}}var W0=!1;function EO(t,e){if(Ig=vd,t=GA(),fv(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,d=t,p=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tg={focusedElem:t,selectionRange:n},vd=!1,ne=e;ne!==null;)if(e=ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ne=t;else for(;ne!==null;){e=ne;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var A=I.memoizedProps,k=I.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?A:tr(e.type,A),k);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(C){tt(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,ne=t;break}ne=e.return}return I=W0,W0=!1,I}function il(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ug(e,n,s)}i=i.next}while(i!==r)}}function Tf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $g(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j1(t){var e=t.alternate;e!==null&&(t.alternate=null,j1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mr],delete e[bl],delete e[Pg],delete e[rO],delete e[iO])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B1(t){return t.tag===5||t.tag===3||t.tag===4}function H0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ed));else if(r!==4&&(t=t.child,t!==null))for(jg(t,e,n),t=t.sibling;t!==null;)jg(t,e,n),t=t.sibling}function Bg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bg(t,e,n),t=t.sibling;t!==null;)Bg(t,e,n),t=t.sibling}var Mt=null,nr=!1;function mi(t,e,n){for(n=n.child;n!==null;)z1(t,e,n),n=n.sibling}function z1(t,e,n){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(mf,n)}catch{}switch(n.tag){case 5:Kt||Wo(n,e);case 6:var r=Mt,i=nr;Mt=null,mi(t,e,n),Mt=r,nr=i,Mt!==null&&(nr?(t=Mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(nr?(t=Mt,n=n.stateNode,t.nodeType===8?mm(t.parentNode,n):t.nodeType===1&&mm(t,n),Al(t)):mm(Mt,n.stateNode));break;case 4:r=Mt,i=nr,Mt=n.stateNode.containerInfo,nr=!0,mi(t,e,n),Mt=r,nr=i;break;case 0:case 11:case 14:case 15:if(!Kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ug(n,e,o),i=i.next}while(i!==r)}mi(t,e,n);break;case 1:if(!Kt&&(Wo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){tt(n,e,a)}mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:n.mode&1?(Kt=(r=Kt)||n.memoizedState!==null,mi(t,e,n),Kt=r):mi(t,e,n);break;default:mi(t,e,n)}}function K0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wO),e.forEach(function(r){var i=bO.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function er(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,nr=!1;break e;case 3:Mt=a.stateNode.containerInfo,nr=!0;break e;case 4:Mt=a.stateNode.containerInfo,nr=!0;break e}a=a.return}if(Mt===null)throw Error(H(160));z1(s,o,i),Mt=null,nr=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){tt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q1(e,t),e=e.sibling}function q1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(er(e,t),dr(t),r&4){try{il(3,t,t.return),Tf(3,t)}catch(A){tt(t,t.return,A)}try{il(5,t,t.return)}catch(A){tt(t,t.return,A)}}break;case 1:er(e,t),dr(t),r&512&&n!==null&&Wo(n,n.return);break;case 5:if(er(e,t),dr(t),r&512&&n!==null&&Wo(n,n.return),t.flags&32){var i=t.stateNode;try{El(i,"")}catch(A){tt(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dA(i,s),dg(a,o);var c=dg(a,s);for(o=0;o<u.length;o+=2){var h=u[o],d=u[o+1];h==="style"?yA(i,d):h==="dangerouslySetInnerHTML"?mA(i,d):h==="children"?El(i,d):ev(i,h,d,c)}switch(a){case"input":ag(i,s);break;case"textarea":fA(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Yo(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Yo(i,!!s.multiple,s.defaultValue,!0):Yo(i,!!s.multiple,s.multiple?[]:"",!1))}i[bl]=s}catch(A){tt(t,t.return,A)}}break;case 6:if(er(e,t),dr(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){tt(t,t.return,A)}}break;case 3:if(er(e,t),dr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Al(e.containerInfo)}catch(A){tt(t,t.return,A)}break;case 4:er(e,t),dr(t);break;case 13:er(e,t),dr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dv=ct())),r&4&&K0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||h,er(e,t),Kt=c):er(e,t),dr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ne=t,h=t.child;h!==null;){for(d=ne=h;ne!==null;){switch(p=ne,g=p.child,p.tag){case 0:case 11:case 14:case 15:il(4,p,p.return);break;case 1:Wo(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(A){tt(r,n,A)}}break;case 5:Wo(p,p.return);break;case 22:if(p.memoizedState!==null){Y0(d);continue}}g!==null?(g.return=p,ne=g):Y0(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=gA("display",o))}catch(A){tt(t,t.return,A)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(A){tt(t,t.return,A)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:er(e,t),dr(t),r&4&&K0(t);break;case 21:break;default:er(e,t),dr(t)}}function dr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B1(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(El(i,""),r.flags&=-33);var s=H0(t);Bg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=H0(t);jg(t,a,o);break;default:throw Error(H(161))}}catch(u){tt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IO(t,e,n){ne=t,G1(t)}function G1(t,e,n){for(var r=(t.mode&1)!==0;ne!==null;){var i=ne,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dh;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Kt;a=dh;var c=Kt;if(dh=o,(Kt=u)&&!c)for(ne=i;ne!==null;)o=ne,u=o.child,o.tag===22&&o.memoizedState!==null?J0(i):u!==null?(u.return=o,ne=u):J0(i);for(;s!==null;)ne=s,G1(s),s=s.sibling;ne=i,dh=a,Kt=c}Q0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ne=s):Q0(t)}}function Q0(t){for(;ne!==null;){var e=ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Tf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Kt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&D0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}D0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Al(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Kt||e.flags&512&&$g(e)}catch(p){tt(e,e.return,p)}}if(e===t){ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,ne=n;break}ne=e.return}}function Y0(t){for(;ne!==null;){var e=ne;if(e===t){ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ne=n;break}ne=e.return}}function J0(t){for(;ne!==null;){var e=ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tf(4,e)}catch(u){tt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){tt(e,i,u)}}var s=e.return;try{$g(e)}catch(u){tt(e,s,u)}break;case 5:var o=e.return;try{$g(e)}catch(u){tt(e,o,u)}}}catch(u){tt(e,e.return,u)}if(e===t){ne=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ne=a;break}ne=e.return}}var TO=Math.ceil,Nd=ti.ReactCurrentDispatcher,xv=ti.ReactCurrentOwner,qn=ti.ReactCurrentBatchConfig,we=0,Ct=null,yt=null,$t=0,Cn=0,Ho=rs(0),Et=0,Ll=null,Gs=0,Sf=0,Nv=0,sl=null,yn=null,Dv=0,ma=1/0,Lr=null,Dd=!1,zg=null,Li=null,fh=!1,Ci=null,Od=0,ol=0,qg=null,Lh=-1,Mh=0;function sn(){return we&6?ct():Lh!==-1?Lh:Lh=ct()}function Mi(t){return t.mode&1?we&2&&$t!==0?$t&-$t:oO.transition!==null?(Mh===0&&(Mh=kA()),Mh):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:LA(t.type)),t):1}function sr(t,e,n,r){if(50<ol)throw ol=0,qg=null,Error(H(185));uc(t,n,r),(!(we&2)||t!==Ct)&&(t===Ct&&(!(we&2)&&(Sf|=n),Et===4&&Si(t,$t)),Sn(t,r),n===1&&we===0&&!(e.mode&1)&&(ma=ct()+500,wf&&is()))}function Sn(t,e){var n=t.callbackNode;oD(t,e);var r=yd(t,t===Ct?$t:0);if(r===0)n!==null&&o0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&o0(n),e===1)t.tag===0?sO(X0.bind(null,t)):t1(X0.bind(null,t)),tO(function(){!(we&6)&&is()}),n=null;else{switch(bA(r)){case 1:n=sv;break;case 4:n=RA;break;case 16:n=gd;break;case 536870912:n=CA;break;default:n=gd}n=Z1(n,W1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W1(t,e){if(Lh=-1,Mh=0,we&6)throw Error(H(327));var n=t.callbackNode;if(ta()&&t.callbackNode!==n)return null;var r=yd(t,t===Ct?$t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vd(t,r);else{e=r;var i=we;we|=2;var s=K1();(Ct!==t||$t!==e)&&(Lr=null,ma=ct()+500,Vs(t,e));do try{PO();break}catch(a){H1(t,a)}while(!0);vv(),Nd.current=s,we=i,yt!==null?e=0:(Ct=null,$t=0,e=Et)}if(e!==0){if(e===2&&(i=yg(t),i!==0&&(r=i,e=Gg(t,i))),e===1)throw n=Ll,Vs(t,0),Si(t,r),Sn(t,ct()),n;if(e===6)Si(t,r);else{if(i=t.current.alternate,!(r&30)&&!SO(i)&&(e=Vd(t,r),e===2&&(s=yg(t),s!==0&&(r=s,e=Gg(t,s))),e===1))throw n=Ll,Vs(t,0),Si(t,r),Sn(t,ct()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:_s(t,yn,Lr);break;case 3:if(Si(t,r),(r&130023424)===r&&(e=Dv+500-ct(),10<e)){if(yd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){sn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ag(_s.bind(null,t,yn,Lr),e);break}_s(t,yn,Lr);break;case 4:if(Si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ir(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TO(r/1960))-r,10<r){t.timeoutHandle=Ag(_s.bind(null,t,yn,Lr),r);break}_s(t,yn,Lr);break;case 5:_s(t,yn,Lr);break;default:throw Error(H(329))}}}return Sn(t,ct()),t.callbackNode===n?W1.bind(null,t):null}function Gg(t,e){var n=sl;return t.current.memoizedState.isDehydrated&&(Vs(t,e).flags|=256),t=Vd(t,e),t!==2&&(e=yn,yn=n,e!==null&&Wg(e)),t}function Wg(t){yn===null?yn=t:yn.push.apply(yn,t)}function SO(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ur(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Si(t,e){for(e&=~Nv,e&=~Sf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ir(e),r=1<<n;t[n]=-1,e&=~r}}function X0(t){if(we&6)throw Error(H(327));ta();var e=yd(t,0);if(!(e&1))return Sn(t,ct()),null;var n=Vd(t,e);if(t.tag!==0&&n===2){var r=yg(t);r!==0&&(e=r,n=Gg(t,r))}if(n===1)throw n=Ll,Vs(t,0),Si(t,e),Sn(t,ct()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_s(t,yn,Lr),Sn(t,ct()),null}function Ov(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(ma=ct()+500,wf&&is())}}function Ws(t){Ci!==null&&Ci.tag===0&&!(we&6)&&ta();var e=we;we|=1;var n=qn.transition,r=Ce;try{if(qn.transition=null,Ce=1,t)return t()}finally{Ce=r,qn.transition=n,we=e,!(we&6)&&is()}}function Vv(){Cn=Ho.current,Ue(Ho)}function Vs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eO(n)),yt!==null)for(n=yt.return;n!==null;){var r=n;switch(mv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Id();break;case 3:fa(),Ue(In),Ue(Yt),Sv();break;case 5:Tv(r);break;case 4:fa();break;case 13:Ue(Qe);break;case 19:Ue(Qe);break;case 10:_v(r.type._context);break;case 22:case 23:Vv()}n=n.return}if(Ct=t,yt=t=Fi(t.current,null),$t=Cn=e,Et=0,Ll=null,Nv=Sf=Gs=0,yn=sl=null,ks!==null){for(e=0;e<ks.length;e++)if(n=ks[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ks=null}return t}function H1(t,e){do{var n=yt;try{if(vv(),Dh.current=xd,bd){for(var r=Ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bd=!1}if(qs=0,At=_t=Ye=null,rl=!1,Dl=0,xv.current=null,n===null||n.return===null){Et=1,Ll=e,yt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=$t,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=U0(o);if(g!==null){g.flags&=-257,$0(g,o,a,s,e),g.mode&1&&F0(s,c,e),e=g,u=c;var I=e.updateQueue;if(I===null){var A=new Set;A.add(u),e.updateQueue=A}else I.add(u);break e}else{if(!(e&1)){F0(s,c,e),Lv();break e}u=Error(H(426))}}else if(Be&&a.mode&1){var k=U0(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),$0(k,o,a,s,e),gv(pa(u,a));break e}}s=u=pa(u,a),Et!==4&&(Et=2),sl===null?sl=[s]:sl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=b1(s,u,e);N0(s,E);break e;case 1:a=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Li===null||!Li.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=x1(s,a,e);N0(s,C);break e}}s=s.return}while(s!==null)}Y1(n)}catch(L){e=L,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function K1(){var t=Nd.current;return Nd.current=xd,t===null?xd:t}function Lv(){(Et===0||Et===3||Et===2)&&(Et=4),Ct===null||!(Gs&268435455)&&!(Sf&268435455)||Si(Ct,$t)}function Vd(t,e){var n=we;we|=2;var r=K1();(Ct!==t||$t!==e)&&(Lr=null,Vs(t,e));do try{AO();break}catch(i){H1(t,i)}while(!0);if(vv(),we=n,Nd.current=r,yt!==null)throw Error(H(261));return Ct=null,$t=0,Et}function AO(){for(;yt!==null;)Q1(yt)}function PO(){for(;yt!==null&&!JN();)Q1(yt)}function Q1(t){var e=X1(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?Y1(t):yt=e,xv.current=null}function Y1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_O(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,yt=null;return}}else if(n=vO(n,e,Cn),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Et===0&&(Et=5)}function _s(t,e,n){var r=Ce,i=qn.transition;try{qn.transition=null,Ce=1,RO(t,e,n,r)}finally{qn.transition=i,Ce=r}return null}function RO(t,e,n,r){do ta();while(Ci!==null);if(we&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(aD(t,s),t===Ct&&(yt=Ct=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fh||(fh=!0,Z1(gd,function(){return ta(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=Ce;Ce=1;var a=we;we|=4,xv.current=null,EO(t,n),q1(n,t),HD(Tg),vd=!!Ig,Tg=Ig=null,t.current=n,IO(n),XN(),we=a,Ce=o,qn.transition=s}else t.current=n;if(fh&&(fh=!1,Ci=t,Od=i),s=t.pendingLanes,s===0&&(Li=null),tD(n.stateNode),Sn(t,ct()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Dd)throw Dd=!1,t=zg,zg=null,t;return Od&1&&t.tag!==0&&ta(),s=t.pendingLanes,s&1?t===qg?ol++:(ol=0,qg=t):ol=0,is(),null}function ta(){if(Ci!==null){var t=bA(Od),e=qn.transition,n=Ce;try{if(qn.transition=null,Ce=16>t?16:t,Ci===null)var r=!1;else{if(t=Ci,Ci=null,Od=0,we&6)throw Error(H(331));var i=we;for(we|=4,ne=t.current;ne!==null;){var s=ne,o=s.child;if(ne.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(ne=c;ne!==null;){var h=ne;switch(h.tag){case 0:case 11:case 15:il(8,h,s)}var d=h.child;if(d!==null)d.return=h,ne=d;else for(;ne!==null;){h=ne;var p=h.sibling,g=h.return;if(j1(h),h===c){ne=null;break}if(p!==null){p.return=g,ne=p;break}ne=g}}}var I=s.alternate;if(I!==null){var A=I.child;if(A!==null){I.child=null;do{var k=A.sibling;A.sibling=null,A=k}while(A!==null)}}ne=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ne=o;else e:for(;ne!==null;){if(s=ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:il(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,ne=E;break e}ne=s.return}}var _=t.current;for(ne=_;ne!==null;){o=ne;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,ne=T;else e:for(o=_;ne!==null;){if(a=ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tf(9,a)}}catch(L){tt(a,a.return,L)}if(a===o){ne=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,ne=C;break e}ne=a.return}}if(we=i,is(),Tr&&typeof Tr.onPostCommitFiberRoot=="function")try{Tr.onPostCommitFiberRoot(mf,t)}catch{}r=!0}return r}finally{Ce=n,qn.transition=e}}return!1}function Z0(t,e,n){e=pa(n,e),e=b1(t,e,1),t=Vi(t,e,1),e=sn(),t!==null&&(uc(t,1,e),Sn(t,e))}function tt(t,e,n){if(t.tag===3)Z0(t,t,n);else for(;e!==null;){if(e.tag===3){Z0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Li===null||!Li.has(r))){t=pa(n,t),t=x1(e,t,1),e=Vi(e,t,1),t=sn(),e!==null&&(uc(e,1,t),Sn(e,t));break}}e=e.return}}function CO(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&($t&n)===n&&(Et===4||Et===3&&($t&130023424)===$t&&500>ct()-Dv?Vs(t,0):Nv|=n),Sn(t,e)}function J1(t,e){e===0&&(t.mode&1?(e=rh,rh<<=1,!(rh&130023424)&&(rh=4194304)):e=1);var n=sn();t=Yr(t,e),t!==null&&(uc(t,e,n),Sn(t,n))}function kO(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J1(t,n)}function bO(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),J1(t,n)}var X1;X1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||In.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,yO(t,e,n);vn=!!(t.flags&131072)}else vn=!1,Be&&e.flags&1048576&&n1(e,Ad,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vh(t,e),t=e.pendingProps;var i=ca(e,Yt.current);ea(e,n),i=Pv(null,e,r,t,i,n);var s=Rv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(r)?(s=!0,Td(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ev(e),i.updater=If,e.stateNode=i,i._reactInternals=e,Ng(e,r,t,n),e=Vg(null,e,r,!0,s,n)):(e.tag=0,Be&&s&&pv(e),Xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vh(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=NO(r),t=tr(r,t),i){case 0:e=Og(null,e,r,t,n);break e;case 1:e=z0(null,e,r,t,n);break e;case 11:e=j0(null,e,r,t,n);break e;case 14:e=B0(null,e,r,tr(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),Og(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),z0(t,e,r,i,n);case 3:e:{if(V1(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,u1(t,e),Cd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=pa(Error(H(423)),e),e=q0(t,e,r,n,i);break e}else if(r!==i){i=pa(Error(H(424)),e),e=q0(t,e,r,n,i);break e}else for(bn=Oi(e.stateNode.containerInfo.firstChild),Nn=e,Be=!0,rr=null,n=o1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ha(),r===i){e=Jr(t,e,n);break e}Xt(t,e,r,n)}e=e.child}return e;case 5:return l1(e),t===null&&kg(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sg(r,i)?o=null:s!==null&&Sg(r,s)&&(e.flags|=32),O1(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&kg(e),null;case 13:return L1(t,e,n);case 4:return Iv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=da(e,null,r,n):Xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),j0(t,e,r,i,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,De(Pd,r._currentValue),r._currentValue=o,s!==null)if(ur(s.value,o)){if(s.children===i.children&&!In.current){e=Jr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Gr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bg(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bg(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ea(e,n),i=Wn(i),r=r(i),e.flags|=1,Xt(t,e,r,n),e.child;case 14:return r=e.type,i=tr(r,e.pendingProps),i=tr(r.type,i),B0(t,e,r,i,n);case 15:return N1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tr(r,i),Vh(t,e),e.tag=1,Tn(r)?(t=!0,Td(e)):t=!1,ea(e,n),k1(e,r,i),Ng(e,r,i,n),Vg(null,e,r,!0,t,n);case 19:return M1(t,e,n);case 22:return D1(t,e,n)}throw Error(H(156,e.tag))};function Z1(t,e){return PA(t,e)}function xO(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,r){return new xO(t,e,n,r)}function Mv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NO(t){if(typeof t=="function")return Mv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nv)return 11;if(t===rv)return 14}return 2}function Fi(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fh(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mo:return Ls(n.children,i,s,e);case tv:o=8,i|=8;break;case ng:return t=Bn(12,n,e,i|2),t.elementType=ng,t.lanes=s,t;case rg:return t=Bn(13,n,e,i),t.elementType=rg,t.lanes=s,t;case ig:return t=Bn(19,n,e,i),t.elementType=ig,t.lanes=s,t;case lA:return Af(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case aA:o=10;break e;case uA:o=9;break e;case nv:o=11;break e;case rv:o=14;break e;case Ei:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ls(t,e,n,r){return t=Bn(7,t,r,e),t.lanes=n,t}function Af(t,e,n,r){return t=Bn(22,t,r,e),t.elementType=lA,t.lanes=n,t.stateNode={isHidden:!1},t}function Tm(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Sm(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DO(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=im(0),this.expirationTimes=im(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=im(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fv(t,e,n,r,i,s,o,a,u){return t=new DO(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ev(s),t}function OO(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function eP(t){if(!t)return zi;t=t._reactInternals;e:{if(ao(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(Tn(n))return e1(t,n,e)}return e}function tP(t,e,n,r,i,s,o,a,u){return t=Fv(n,r,!0,t,i,s,o,a,u),t.context=eP(null),n=t.current,r=sn(),i=Mi(n),s=Gr(r,i),s.callback=e??null,Vi(n,s,i),t.current.lanes=i,uc(t,i,r),Sn(t,r),t}function Pf(t,e,n,r){var i=e.current,s=sn(),o=Mi(i);return n=eP(n),e.context===null?e.context=n:e.pendingContext=n,e=Gr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vi(i,e,o),t!==null&&(sr(t,i,o,s),Nh(t,i,o)),o}function Ld(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eI(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uv(t,e){eI(t,e),(t=t.alternate)&&eI(t,e)}function VO(){return null}var nP=typeof reportError=="function"?reportError:function(t){console.error(t)};function $v(t){this._internalRoot=t}Rf.prototype.render=$v.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Pf(t,e,null,null)};Rf.prototype.unmount=$v.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ws(function(){Pf(null,t,null,null)}),e[Qr]=null}};function Rf(t){this._internalRoot=t}Rf.prototype.unstable_scheduleHydration=function(t){if(t){var e=DA();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&VA(t)}};function jv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tI(){}function LO(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ld(o);s.call(c)}}var o=tP(e,r,t,0,null,!1,!1,"",tI);return t._reactRootContainer=o,t[Qr]=o.current,Cl(t.nodeType===8?t.parentNode:t),Ws(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ld(u);a.call(c)}}var u=Fv(t,0,!1,null,null,!1,!1,"",tI);return t._reactRootContainer=u,t[Qr]=u.current,Cl(t.nodeType===8?t.parentNode:t),Ws(function(){Pf(e,u,n,r)}),u}function kf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Ld(o);a.call(u)}}Pf(e,o,t,i)}else o=LO(n,e,t,i,r);return Ld(o)}xA=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bu(e.pendingLanes);n!==0&&(ov(e,n|1),Sn(e,ct()),!(we&6)&&(ma=ct()+500,is()))}break;case 13:Ws(function(){var r=Yr(t,1);if(r!==null){var i=sn();sr(r,t,1,i)}}),Uv(t,1)}};av=function(t){if(t.tag===13){var e=Yr(t,134217728);if(e!==null){var n=sn();sr(e,t,134217728,n)}Uv(t,134217728)}};NA=function(t){if(t.tag===13){var e=Mi(t),n=Yr(t,e);if(n!==null){var r=sn();sr(n,t,e,r)}Uv(t,e)}};DA=function(){return Ce};OA=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};pg=function(t,e,n){switch(e){case"input":if(ag(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_f(r);if(!i)throw Error(H(90));hA(r),ag(r,i)}}}break;case"textarea":fA(t,n);break;case"select":e=n.value,e!=null&&Yo(t,!!n.multiple,e,!1)}};wA=Ov;EA=Ws;var MO={usingClientEntryPoint:!1,Events:[cc,jo,_f,vA,_A,Ov]},bu={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FO={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=SA(t),t===null?null:t.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||VO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ph=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ph.isDisabled&&ph.supportsFiber)try{mf=ph.inject(FO),Tr=ph}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MO;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jv(e))throw Error(H(200));return OO(t,e,null,n)};Vn.createRoot=function(t,e){if(!jv(t))throw Error(H(299));var n=!1,r="",i=nP;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fv(t,1,!1,null,null,n,!1,r,i),t[Qr]=e.current,Cl(t.nodeType===8?t.parentNode:t),new $v(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=SA(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return Ws(t)};Vn.hydrate=function(t,e,n){if(!Cf(e))throw Error(H(200));return kf(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!jv(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=nP;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tP(e,null,t,1,n??null,i,!1,s,o),t[Qr]=e.current,Cl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rf(e)};Vn.render=function(t,e,n){if(!Cf(e))throw Error(H(200));return kf(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!Cf(t))throw Error(H(40));return t._reactRootContainer?(Ws(function(){kf(null,null,t,!1,function(){t._reactRootContainer=null,t[Qr]=null})}),!0):!1};Vn.unstable_batchedUpdates=Ov;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cf(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return kf(t,e,n,!1,r)};Vn.version="18.3.1-next-f1338f8080-20240426";function rP(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rP)}catch(t){console.error(t)}}rP(),rA.exports=Vn;var UO=rA.exports,nI=UO;eg.createRoot=nI.createRoot,eg.hydrateRoot=nI.hydrateRoot;function Hg(t,e){return Hg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Hg(t,e)}function Rr(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Hg(t,e)}var iP={exports:{}},$O="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jO=$O,BO=jO;function sP(){}function oP(){}oP.resetWarningCache=sP;var zO=function(){function t(r,i,s,o,a,u){if(u!==BO){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:oP,resetWarningCache:sP};return n.PropTypes=n,n};iP.exports=zO();var qO=iP.exports;const rI=ff(qO);function vt(){return vt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vt.apply(null,arguments)}function mh(t){return t.charAt(0)==="/"}function Am(t,e){for(var n=e,r=n+1,i=t.length;r<i;n+=1,r+=1)t[n]=t[r];t.pop()}function GO(t,e){e===void 0&&(e="");var n=t&&t.split("/")||[],r=e&&e.split("/")||[],i=t&&mh(t),s=e&&mh(e),o=i||s;if(t&&mh(t)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var a;if(r.length){var u=r[r.length-1];a=u==="."||u===".."||u===""}else a=!1;for(var c=0,h=r.length;h>=0;h--){var d=r[h];d==="."?Am(r,h):d===".."?(Am(r,h),c++):c&&(Am(r,h),c--)}if(!o)for(;c--;c)r.unshift("..");o&&r[0]!==""&&(!r[0]||!mh(r[0]))&&r.unshift("");var p=r.join("/");return a&&p.substr(-1)!=="/"&&(p+="/"),p}function iI(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}function Uh(t,e){if(t===e)return!0;if(t==null||e==null)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(i,s){return Uh(i,e[s])});if(typeof t=="object"||typeof e=="object"){var n=iI(t),r=iI(e);return n!==t||r!==e?Uh(n,r):Object.keys(Object.assign({},t,e)).every(function(i){return Uh(t[i],e[i])})}return!1}var WO="Invariant failed";function ni(t,e){throw new Error(WO)}function al(t){return t.charAt(0)==="/"?t:"/"+t}function sI(t){return t.charAt(0)==="/"?t.substr(1):t}function HO(t,e){return t.toLowerCase().indexOf(e.toLowerCase())===0&&"/?#".indexOf(t.charAt(e.length))!==-1}function aP(t,e){return HO(t,e)?t.substr(e.length):t}function uP(t){return t.charAt(t.length-1)==="/"?t.slice(0,-1):t}function KO(t){var e=t||"/",n="",r="",i=e.indexOf("#");i!==-1&&(r=e.substr(i),e=e.substr(0,i));var s=e.indexOf("?");return s!==-1&&(n=e.substr(s),e=e.substr(0,s)),{pathname:e,search:n==="?"?"":n,hash:r==="#"?"":r}}function pn(t){var e=t.pathname,n=t.search,r=t.hash,i=e||"/";return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function rn(t,e,n,r){var i;typeof t=="string"?(i=KO(t),i.state=e):(i=vt({},t),i.pathname===void 0&&(i.pathname=""),i.search?i.search.charAt(0)!=="?"&&(i.search="?"+i.search):i.search="",i.hash?i.hash.charAt(0)!=="#"&&(i.hash="#"+i.hash):i.hash="",e!==void 0&&i.state===void 0&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(s){throw s instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):s}return n&&(i.key=n),r?i.pathname?i.pathname.charAt(0)!=="/"&&(i.pathname=GO(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function QO(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&Uh(t.state,e.state)}function Bv(){var t=null;function e(o){return t=o,function(){t===o&&(t=null)}}function n(o,a,u,c){if(t!=null){var h=typeof t=="function"?t(o,a):t;typeof h=="string"?typeof u=="function"?u(h,c):c(!0):c(h!==!1)}else c(!0)}var r=[];function i(o){var a=!0;function u(){a&&o.apply(void 0,arguments)}return r.push(u),function(){a=!1,r=r.filter(function(c){return c!==u})}}function s(){for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];r.forEach(function(c){return c.apply(void 0,a)})}return{setPrompt:e,confirmTransitionTo:n,appendListener:i,notifyListeners:s}}var lP=!!(typeof window<"u"&&window.document&&window.document.createElement);function cP(t,e){e(window.confirm(t))}function YO(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function JO(){return window.navigator.userAgent.indexOf("Trident")===-1}function XO(){return window.navigator.userAgent.indexOf("Firefox")===-1}function ZO(t){return t.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var oI="popstate",aI="hashchange";function uI(){try{return window.history.state||{}}catch{return{}}}function eV(t){t===void 0&&(t={}),lP||ni();var e=window.history,n=YO(),r=!JO(),i=t,s=i.forceRefresh,o=s===void 0?!1:s,a=i.getUserConfirmation,u=a===void 0?cP:a,c=i.keyLength,h=c===void 0?6:c,d=t.basename?uP(al(t.basename)):"";function p(q){var B=q||{},b=B.key,N=B.state,D=window.location,j=D.pathname,Y=D.search,Z=D.hash,te=j+Y+Z;return d&&(te=aP(te,d)),rn(te,N,b)}function g(){return Math.random().toString(36).substr(2,h)}var I=Bv();function A(q){vt(W,q),W.length=e.length,I.notifyListeners(W.location,W.action)}function k(q){ZO(q)||T(p(q.state))}function E(){T(p(uI()))}var _=!1;function T(q){if(_)_=!1,A();else{var B="POP";I.confirmTransitionTo(q,B,u,function(b){b?A({action:B,location:q}):C(q)})}}function C(q){var B=W.location,b=V.indexOf(B.key);b===-1&&(b=0);var N=V.indexOf(q.key);N===-1&&(N=0);var D=b-N;D&&(_=!0,P(D))}var L=p(uI()),V=[L.key];function v(q){return d+pn(q)}function y(q,B){var b="PUSH",N=rn(q,B,g(),W.location);I.confirmTransitionTo(N,b,u,function(D){if(D){var j=v(N),Y=N.key,Z=N.state;if(n)if(e.pushState({key:Y,state:Z},null,j),o)window.location.href=j;else{var te=V.indexOf(W.location.key),se=V.slice(0,te+1);se.push(N.key),V=se,A({action:b,location:N})}else window.location.href=j}})}function S(q,B){var b="REPLACE",N=rn(q,B,g(),W.location);I.confirmTransitionTo(N,b,u,function(D){if(D){var j=v(N),Y=N.key,Z=N.state;if(n)if(e.replaceState({key:Y,state:Z},null,j),o)window.location.replace(j);else{var te=V.indexOf(W.location.key);te!==-1&&(V[te]=N.key),A({action:b,location:N})}else window.location.replace(j)}})}function P(q){e.go(q)}function x(){P(-1)}function O(){P(1)}var R=0;function _e(q){R+=q,R===1&&q===1?(window.addEventListener(oI,k),r&&window.addEventListener(aI,E)):R===0&&(window.removeEventListener(oI,k),r&&window.removeEventListener(aI,E))}var he=!1;function ft(q){q===void 0&&(q=!1);var B=I.setPrompt(q);return he||(_e(1),he=!0),function(){return he&&(he=!1,_e(-1)),B()}}function Ne(q){var B=I.appendListener(q);return _e(1),function(){_e(-1),B()}}var W={length:e.length,action:"POP",location:L,createHref:v,push:y,replace:S,go:P,goBack:x,goForward:O,block:ft,listen:Ne};return W}var lI="hashchange",tV={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+sI(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:sI,decodePath:al},slash:{encodePath:al,decodePath:al}};function hP(t){var e=t.indexOf("#");return e===-1?t:t.slice(0,e)}function xu(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.substring(e+1)}function nV(t){window.location.hash=t}function Pm(t){window.location.replace(hP(window.location.href)+"#"+t)}function rV(t){t===void 0&&(t={}),lP||ni();var e=window.history;XO();var n=t,r=n.getUserConfirmation,i=r===void 0?cP:r,s=n.hashType,o=s===void 0?"slash":s,a=t.basename?uP(al(t.basename)):"",u=tV[o],c=u.encodePath,h=u.decodePath;function d(){var B=h(xu());return a&&(B=aP(B,a)),rn(B)}var p=Bv();function g(B){vt(q,B),q.length=e.length,p.notifyListeners(q.location,q.action)}var I=!1,A=null;function k(B,b){return B.pathname===b.pathname&&B.search===b.search&&B.hash===b.hash}function E(){var B=xu(),b=c(B);if(B!==b)Pm(b);else{var N=d(),D=q.location;if(!I&&k(D,N)||A===pn(N))return;A=null,_(N)}}function _(B){if(I)I=!1,g();else{var b="POP";p.confirmTransitionTo(B,b,i,function(N){N?g({action:b,location:B}):T(B)})}}function T(B){var b=q.location,N=v.lastIndexOf(pn(b));N===-1&&(N=0);var D=v.lastIndexOf(pn(B));D===-1&&(D=0);var j=N-D;j&&(I=!0,x(j))}var C=xu(),L=c(C);C!==L&&Pm(L);var V=d(),v=[pn(V)];function y(B){var b=document.querySelector("base"),N="";return b&&b.getAttribute("href")&&(N=hP(window.location.href)),N+"#"+c(a+pn(B))}function S(B,b){var N="PUSH",D=rn(B,void 0,void 0,q.location);p.confirmTransitionTo(D,N,i,function(j){if(j){var Y=pn(D),Z=c(a+Y),te=xu()!==Z;if(te){A=Y,nV(Z);var se=v.lastIndexOf(pn(q.location)),Te=v.slice(0,se+1);Te.push(Y),v=Te,g({action:N,location:D})}else g()}})}function P(B,b){var N="REPLACE",D=rn(B,void 0,void 0,q.location);p.confirmTransitionTo(D,N,i,function(j){if(j){var Y=pn(D),Z=c(a+Y),te=xu()!==Z;te&&(A=Y,Pm(Z));var se=v.indexOf(pn(q.location));se!==-1&&(v[se]=Y),g({action:N,location:D})}})}function x(B){e.go(B)}function O(){x(-1)}function R(){x(1)}var _e=0;function he(B){_e+=B,_e===1&&B===1?window.addEventListener(lI,E):_e===0&&window.removeEventListener(lI,E)}var ft=!1;function Ne(B){B===void 0&&(B=!1);var b=p.setPrompt(B);return ft||(he(1),ft=!0),function(){return ft&&(ft=!1,he(-1)),b()}}function W(B){var b=p.appendListener(B);return he(1),function(){he(-1),b()}}var q={length:e.length,action:"POP",location:V,createHref:y,push:S,replace:P,go:x,goBack:O,goForward:R,block:Ne,listen:W};return q}function cI(t,e,n){return Math.min(Math.max(t,e),n)}function iV(t){t===void 0&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,i=r===void 0?["/"]:r,s=e.initialIndex,o=s===void 0?0:s,a=e.keyLength,u=a===void 0?6:a,c=Bv();function h(y){vt(v,y),v.length=v.entries.length,c.notifyListeners(v.location,v.action)}function d(){return Math.random().toString(36).substr(2,u)}var p=cI(o,0,i.length-1),g=i.map(function(y){return typeof y=="string"?rn(y,void 0,d()):rn(y,void 0,y.key||d())}),I=pn;function A(y,S){var P="PUSH",x=rn(y,S,d(),v.location);c.confirmTransitionTo(x,P,n,function(O){if(O){var R=v.index,_e=R+1,he=v.entries.slice(0);he.length>_e?he.splice(_e,he.length-_e,x):he.push(x),h({action:P,location:x,index:_e,entries:he})}})}function k(y,S){var P="REPLACE",x=rn(y,S,d(),v.location);c.confirmTransitionTo(x,P,n,function(O){O&&(v.entries[v.index]=x,h({action:P,location:x}))})}function E(y){var S=cI(v.index+y,0,v.entries.length-1),P="POP",x=v.entries[S];c.confirmTransitionTo(x,P,n,function(O){O?h({action:P,location:x,index:S}):h()})}function _(){E(-1)}function T(){E(1)}function C(y){var S=v.index+y;return S>=0&&S<v.entries.length}function L(y){return y===void 0&&(y=!1),c.setPrompt(y)}function V(y){return c.appendListener(y)}var v={length:g.length,action:"POP",location:g[p],index:p,entries:g,createHref:I,push:A,replace:k,go:E,goBack:_,goForward:T,canGo:C,block:L,listen:V};return v}var Ba={exports:{}},sV=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},Md=sV;Ba.exports=pP;Ba.exports.parse=zv;Ba.exports.compile=aV;Ba.exports.tokensToFunction=dP;Ba.exports.tokensToRegExp=fP;var oV=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function zv(t,e){for(var n=[],r=0,i=0,s="",o=e&&e.delimiter||"/",a;(a=oV.exec(t))!=null;){var u=a[0],c=a[1],h=a.index;if(s+=t.slice(i,h),i=h+u.length,c){s+=c[1];continue}var d=t[i],p=a[2],g=a[3],I=a[4],A=a[5],k=a[6],E=a[7];s&&(n.push(s),s="");var _=p!=null&&d!=null&&d!==p,T=k==="+"||k==="*",C=k==="?"||k==="*",L=a[2]||o,V=I||A;n.push({name:g||r++,prefix:p||"",delimiter:L,optional:C,repeat:T,partial:_,asterisk:!!E,pattern:V?cV(V):E?".*":"[^"+$h(L)+"]+?"})}return i<t.length&&(s+=t.substr(i)),s&&n.push(s),n}function aV(t,e){return dP(zv(t,e),e)}function uV(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function lV(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function dP(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",Gv(e)));return function(i,s){for(var o="",a=i||{},u=s||{},c=u.pretty?uV:encodeURIComponent,h=0;h<t.length;h++){var d=t[h];if(typeof d=="string"){o+=d;continue}var p=a[d.name],g;if(p==null)if(d.optional){d.partial&&(o+=d.prefix);continue}else throw new TypeError('Expected "'+d.name+'" to be defined');if(Md(p)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(p.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var I=0;I<p.length;I++){if(g=c(p[I]),!n[h].test(g))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(g)+"`");o+=(I===0?d.prefix:d.delimiter)+g}continue}if(g=d.asterisk?lV(p):c(p),!n[h].test(g))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+g+'"');o+=d.prefix+g}return o}}function $h(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function cV(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function qv(t,e){return t.keys=e,t}function Gv(t){return t&&t.sensitive?"":"i"}function hV(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return qv(t,e)}function dV(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(pP(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",Gv(n));return qv(s,e)}function fV(t,e,n){return fP(zv(t,n),e,n)}function fP(t,e,n){Md(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=n.end!==!1,s="",o=0;o<t.length;o++){var a=t[o];if(typeof a=="string")s+=$h(a);else{var u=$h(a.prefix),c="(?:"+a.pattern+")";e.push(a),a.repeat&&(c+="(?:"+u+c+")*"),a.optional?a.partial?c=u+"("+c+")?":c="(?:"+u+"("+c+"))?":c=u+"("+c+")",s+=c}}var h=$h(n.delimiter||"/"),d=s.slice(-h.length)===h;return r||(s=(d?s.slice(0,-h.length):s)+"(?:"+h+"(?=$))?"),i?s+="$":s+=r&&d?"":"(?="+h+"|$)",qv(new RegExp("^"+s,Gv(n)),e)}function pP(t,e,n){return Md(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?hV(t,e):Md(t)?dV(t,e,n):fV(t,e,n)}var pV=Ba.exports;const mP=ff(pV);var gP={exports:{}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xt=typeof Symbol=="function"&&Symbol.for,Wv=xt?Symbol.for("react.element"):60103,Hv=xt?Symbol.for("react.portal"):60106,bf=xt?Symbol.for("react.fragment"):60107,xf=xt?Symbol.for("react.strict_mode"):60108,Nf=xt?Symbol.for("react.profiler"):60114,Df=xt?Symbol.for("react.provider"):60109,Of=xt?Symbol.for("react.context"):60110,Kv=xt?Symbol.for("react.async_mode"):60111,Vf=xt?Symbol.for("react.concurrent_mode"):60111,Lf=xt?Symbol.for("react.forward_ref"):60112,Mf=xt?Symbol.for("react.suspense"):60113,mV=xt?Symbol.for("react.suspense_list"):60120,Ff=xt?Symbol.for("react.memo"):60115,Uf=xt?Symbol.for("react.lazy"):60116,gV=xt?Symbol.for("react.block"):60121,yV=xt?Symbol.for("react.fundamental"):60117,vV=xt?Symbol.for("react.responder"):60118,_V=xt?Symbol.for("react.scope"):60119;function Mn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Wv:switch(t=t.type,t){case Kv:case Vf:case bf:case Nf:case xf:case Mf:return t;default:switch(t=t&&t.$$typeof,t){case Of:case Lf:case Uf:case Ff:case Df:return t;default:return e}}case Hv:return e}}}function yP(t){return Mn(t)===Vf}ke.AsyncMode=Kv;ke.ConcurrentMode=Vf;ke.ContextConsumer=Of;ke.ContextProvider=Df;ke.Element=Wv;ke.ForwardRef=Lf;ke.Fragment=bf;ke.Lazy=Uf;ke.Memo=Ff;ke.Portal=Hv;ke.Profiler=Nf;ke.StrictMode=xf;ke.Suspense=Mf;ke.isAsyncMode=function(t){return yP(t)||Mn(t)===Kv};ke.isConcurrentMode=yP;ke.isContextConsumer=function(t){return Mn(t)===Of};ke.isContextProvider=function(t){return Mn(t)===Df};ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wv};ke.isForwardRef=function(t){return Mn(t)===Lf};ke.isFragment=function(t){return Mn(t)===bf};ke.isLazy=function(t){return Mn(t)===Uf};ke.isMemo=function(t){return Mn(t)===Ff};ke.isPortal=function(t){return Mn(t)===Hv};ke.isProfiler=function(t){return Mn(t)===Nf};ke.isStrictMode=function(t){return Mn(t)===xf};ke.isSuspense=function(t){return Mn(t)===Mf};ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===bf||t===Vf||t===Nf||t===xf||t===Mf||t===mV||typeof t=="object"&&t!==null&&(t.$$typeof===Uf||t.$$typeof===Ff||t.$$typeof===Df||t.$$typeof===Of||t.$$typeof===Lf||t.$$typeof===yV||t.$$typeof===vV||t.$$typeof===_V||t.$$typeof===gV)};ke.typeOf=Mn;gP.exports=ke;var wV=gP.exports;function za(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}var Qv=wV,EV={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},IV={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},TV={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yv={};Yv[Qv.ForwardRef]=TV;Yv[Qv.Memo]=vP;function hI(t){return Qv.isMemo(t)?vP:Yv[t.$$typeof]||EV}var SV=Object.defineProperty,AV=Object.getOwnPropertyNames,dI=Object.getOwnPropertySymbols,PV=Object.getOwnPropertyDescriptor,RV=Object.getPrototypeOf,fI=Object.prototype;function _P(t,e,n){if(typeof e!="string"){if(fI){var r=RV(e);r&&r!==fI&&_P(t,r,n)}var i=AV(e);dI&&(i=i.concat(dI(e)));for(var s=hI(t),o=hI(e),a=0;a<i.length;++a){var u=i[a];if(!IV[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=PV(e,u);try{SV(t,u,c)}catch{}}}}return t}var CV=_P;const kV=ff(CV);var Rm=1073741823,pI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function bV(){var t="__global_unique_id__";return pI[t]=(pI[t]||0)+1}function xV(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function NV(t){var e=[];return{on:function(r){e.push(r)},off:function(r){e=e.filter(function(i){return i!==r})},get:function(){return t},set:function(r,i){t=r,e.forEach(function(s){return s(t,i)})}}}function DV(t){return Array.isArray(t)?t[0]:t}function OV(t,e){var n,r,i="__create-react-context-"+bV()+"__",s=function(a){Rr(u,a);function u(){for(var h,d=arguments.length,p=new Array(d),g=0;g<d;g++)p[g]=arguments[g];return h=a.call.apply(a,[this].concat(p))||this,h.emitter=NV(h.props.value),h}var c=u.prototype;return c.getChildContext=function(){var d;return d={},d[i]=this.emitter,d},c.componentWillReceiveProps=function(d){if(this.props.value!==d.value){var p=this.props.value,g=d.value,I;xV(p,g)?I=0:(I=typeof e=="function"?e(p,g):Rm,I|=0,I!==0&&this.emitter.set(d.value,I))}},c.render=function(){return this.props.children},u}(ae.Component);s.childContextTypes=(n={},n[i]=rI.object.isRequired,n);var o=function(a){Rr(u,a);function u(){for(var h,d=arguments.length,p=new Array(d),g=0;g<d;g++)p[g]=arguments[g];return h=a.call.apply(a,[this].concat(p))||this,h.observedBits=void 0,h.state={value:h.getValue()},h.onUpdate=function(I,A){var k=h.observedBits|0;k&A&&h.setState({value:h.getValue()})},h}var c=u.prototype;return c.componentWillReceiveProps=function(d){var p=d.observedBits;this.observedBits=p??Rm},c.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var d=this.props.observedBits;this.observedBits=d??Rm},c.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},c.getValue=function(){return this.context[i]?this.context[i].get():t},c.render=function(){return DV(this.props.children)(this.state.value)},u}(ae.Component);return o.contextTypes=(r={},r[i]=rI.object,r),{Provider:s,Consumer:o}}var VV=ae.createContext||OV,wP=function(e){var n=VV();return n.displayName=e,n},LV=wP("Router-History"),qi=wP("Router"),$f=function(t){Rr(e,t),e.computeRootMatch=function(i){return{path:"/",url:"/",params:{},isExact:i==="/"}};function e(r){var i;return i=t.call(this,r)||this,i.state={location:r.history.location},i._isMounted=!1,i._pendingLocation=null,r.staticContext||(i.unlisten=r.history.listen(function(s){i._pendingLocation=s})),i}var n=e.prototype;return n.componentDidMount=function(){var i=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(s){i._isMounted&&i.setState({location:s})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return ae.createElement(qi.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},ae.createElement(LV.Provider,{children:this.props.children||null,value:this.props.history}))},e}(ae.Component);ae.Component;var MV=function(t){Rr(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(i){this.props.onUpdate&&this.props.onUpdate.call(this,this,i)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(ae.Component),Cm={},FV=1e4,mI=0;function UV(t){if(Cm[t])return Cm[t];var e=mP.compile(t);return mI<FV&&(Cm[t]=e,mI++),e}function gI(t,e){return t===void 0&&(t="/"),e===void 0&&(e={}),t==="/"?t:UV(t)(e,{pretty:!0})}function yI(t){var e=t.computedMatch,n=t.to,r=t.push,i=r===void 0?!1:r;return ae.createElement(qi.Consumer,null,function(s){s||ni();var o=s.history,a=s.staticContext,u=i?o.push:o.replace,c=rn(e?typeof n=="string"?gI(n,e.params):vt({},n,{pathname:gI(n.pathname,e.params)}):n);return a?(u(c),null):ae.createElement(MV,{onMount:function(){u(c)},onUpdate:function(d,p){var g=rn(p.to);QO(g,vt({},c,{key:g.key}))||u(c)},to:n})})}var vI={},$V=1e4,_I=0;function jV(t,e){var n=""+e.end+e.strict+e.sensitive,r=vI[n]||(vI[n]={});if(r[t])return r[t];var i=[],s=mP(t,i,e),o={regexp:s,keys:i};return _I<$V&&(r[t]=o,_I++),o}function Jv(t,e){e===void 0&&(e={}),(typeof e=="string"||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,i=n.exact,s=i===void 0?!1:i,o=n.strict,a=o===void 0?!1:o,u=n.sensitive,c=u===void 0?!1:u,h=[].concat(r);return h.reduce(function(d,p){if(!p&&p!=="")return null;if(d)return d;var g=jV(p,{end:s,strict:a,sensitive:c}),I=g.regexp,A=g.keys,k=I.exec(t);if(!k)return null;var E=k[0],_=k.slice(1),T=t===E;return s&&!T?null:{path:p,url:p==="/"&&E===""?"/":E,isExact:T,params:A.reduce(function(C,L,V){return C[L.name]=_[V],C},{})}},null)}function BV(t){return ae.Children.count(t)===0}var gh=function(t){Rr(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return ae.createElement(qi.Consumer,null,function(s){s||ni();var o=i.props.location||s.location,a=i.props.computedMatch?i.props.computedMatch:i.props.path?Jv(o.pathname,i.props):s.match,u=vt({},s,{location:o,match:a}),c=i.props,h=c.children,d=c.component,p=c.render;return Array.isArray(h)&&BV(h)&&(h=null),ae.createElement(qi.Provider,{value:u},u.match?h?typeof h=="function"?h(u):h:d?ae.createElement(d,u):p?p(u):null:typeof h=="function"?h(u):null)})},e}(ae.Component);function Xv(t){return t.charAt(0)==="/"?t:"/"+t}function zV(t,e){return t?vt({},e,{pathname:Xv(t)+e.pathname}):e}function qV(t,e){if(!t)return e;var n=Xv(t);return e.pathname.indexOf(n)!==0?e:vt({},e,{pathname:e.pathname.substr(n.length)})}function wI(t){return typeof t=="string"?t:pn(t)}function km(t){return function(){ni()}}function EI(){}ae.Component;var GV=function(t){Rr(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return ae.createElement(qi.Consumer,null,function(s){s||ni();var o=i.props.location||s.location,a,u;return ae.Children.forEach(i.props.children,function(c){if(u==null&&ae.isValidElement(c)){a=c;var h=c.props.path||c.props.from;u=h?Jv(o.pathname,vt({},c.props,{path:h})):s.match}}),u?ae.cloneElement(a,{location:o,computedMatch:u}):null})},e}(ae.Component);function WV(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(i){var s=i.wrappedComponentRef,o=za(i,["wrappedComponentRef"]);return ae.createElement(qi.Consumer,null,function(a){return a||ni(),ae.createElement(t,vt({},o,a,{ref:s}))})};return n.displayName=e,n.WrappedComponent=t,kV(n,t)}ae.useContext;var HV=function(t){Rr(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.history=eV(r.props),r}var n=e.prototype;return n.render=function(){return ae.createElement($f,{history:this.history,children:this.props.children})},e}(ae.Component);ae.Component;var Kg=function(e,n){return typeof e=="function"?e(n):e},Qg=function(e,n){return typeof e=="string"?rn(e,null,null,n):e},Zv=function(e){return e},ga=ae.forwardRef;typeof ga>"u"&&(ga=Zv);function KV(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}var QV=ga(function(t,e){var n=t.innerRef,r=t.navigate,i=t.onClick,s=za(t,["innerRef","navigate","onClick"]),o=s.target,a=vt({},s,{onClick:function(c){try{i&&i(c)}catch(h){throw c.preventDefault(),h}!c.defaultPrevented&&c.button===0&&(!o||o==="_self")&&!KV(c)&&(c.preventDefault(),r())}});return Zv!==ga?a.ref=e||n:a.ref=n,ae.createElement("a",a)}),e_=ga(function(t,e){var n=t.component,r=n===void 0?QV:n,i=t.replace,s=t.to,o=t.innerRef,a=za(t,["component","replace","to","innerRef"]);return ae.createElement(qi.Consumer,null,function(u){u||ni();var c=u.history,h=Qg(Kg(s,u.location),u.location),d=h?c.createHref(h):"",p=vt({},a,{href:d,navigate:function(){var I=Kg(s,u.location),A=pn(u.location)===pn(Qg(I)),k=i||A?c.replace:c.push;k(I)}});return Zv!==ga?p.ref=e||o:p.innerRef=o,ae.createElement(r,p)})}),EP=function(e){return e},Fd=ae.forwardRef;typeof Fd>"u"&&(Fd=EP);function YV(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(function(r){return r}).join(" ")}Fd(function(t,e){var n=t["aria-current"],r=n===void 0?"page":n,i=t.activeClassName,s=i===void 0?"active":i,o=t.activeStyle,a=t.className,u=t.exact,c=t.isActive,h=t.location,d=t.sensitive,p=t.strict,g=t.style,I=t.to,A=t.innerRef,k=za(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return ae.createElement(qi.Consumer,null,function(E){E||ni();var _=h||E.location,T=Qg(Kg(I,_),_),C=T.pathname,L=C&&C.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),V=L?Jv(_.pathname,{path:L,exact:u,sensitive:d,strict:p}):null,v=!!(c?c(V,_):V),y=typeof a=="function"?a(v):a,S=typeof g=="function"?g(v):g;v&&(y=YV(y,s),S=vt({},S,o));var P=vt({"aria-current":v&&r||null,className:y,style:S,to:T},k);return EP!==Fd?P.ref=e||A:P.innerRef=A,ae.createElement(e_,P)})});var JV={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=ln;function XV(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ZV=typeof Object.is=="function"?Object.is:XV,eL=dc.useSyncExternalStore,tL=dc.useRef,nL=dc.useEffect,rL=dc.useMemo,iL=dc.useDebugValue;JV.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=tL(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=rL(function(){function u(g){if(!c){if(c=!0,h=g,g=r(g),i!==void 0&&o.hasValue){var I=o.value;if(i(I,g))return d=I}return d=g}if(I=d,ZV(h,g))return I;var A=r(g);return i!==void 0&&i(I,A)?I:(h=g,d=A)}var c=!1,h,d,p=n===void 0?null:n;return[function(){return u(e())},p===null?void 0:function(){return u(p())}]},[e,n,r,i]);var a=eL(t,s[0],s[1]);return nL(function(){o.hasValue=!0,o.value=a},[a]),iL(a),a};var Pe="default"in YE?ae:YE,II=Symbol.for("react-redux-context"),TI=typeof globalThis<"u"?globalThis:{};function sL(){if(!Pe.createContext)return{};const t=TI[II]??(TI[II]=new Map);let e=t.get(Pe.createContext);return e||(e=Pe.createContext(null),t.set(Pe.createContext,e)),e}var IP=sL(),oL=()=>{throw new Error("uSES not initialized!")},aL=Symbol.for("react.element"),uL=Symbol.for("react.portal"),lL=Symbol.for("react.fragment"),cL=Symbol.for("react.strict_mode"),hL=Symbol.for("react.profiler"),dL=Symbol.for("react.provider"),fL=Symbol.for("react.context"),pL=Symbol.for("react.server_context"),TP=Symbol.for("react.forward_ref"),mL=Symbol.for("react.suspense"),gL=Symbol.for("react.suspense_list"),t_=Symbol.for("react.memo"),yL=Symbol.for("react.lazy"),vL=TP,_L=t_;function wL(t){if(typeof t=="object"&&t!==null){const e=t.$$typeof;switch(e){case aL:{const n=t.type;switch(n){case lL:case hL:case cL:case mL:case gL:return n;default:{const r=n&&n.$$typeof;switch(r){case pL:case fL:case TP:case yL:case t_:case dL:return r;default:return e}}}}case uL:return e}}}function EL(t){return wL(t)===t_}function IL(t,e,n,r,{areStatesEqual:i,areOwnPropsEqual:s,areStatePropsEqual:o}){let a=!1,u,c,h,d,p;function g(_,T){return u=_,c=T,h=t(u,c),d=e(r,c),p=n(h,d,c),a=!0,p}function I(){return h=t(u,c),e.dependsOnOwnProps&&(d=e(r,c)),p=n(h,d,c),p}function A(){return t.dependsOnOwnProps&&(h=t(u,c)),e.dependsOnOwnProps&&(d=e(r,c)),p=n(h,d,c),p}function k(){const _=t(u,c),T=!o(_,h);return h=_,T&&(p=n(h,d,c)),p}function E(_,T){const C=!s(T,c),L=!i(_,u,T,c);return u=_,c=T,C&&L?I():C?A():L?k():p}return function(T,C){return a?E(T,C):g(T,C)}}function TL(t,{initMapStateToProps:e,initMapDispatchToProps:n,initMergeProps:r,...i}){const s=e(t,i),o=n(t,i),a=r(t,i);return IL(s,o,a,t,i)}function SL(t,e){const n={};for(const r in t){const i=t[r];typeof i=="function"&&(n[r]=(...s)=>e(i(...s)))}return n}function Yg(t){return function(n){const r=t(n);function i(){return r}return i.dependsOnOwnProps=!1,i}}function SI(t){return t.dependsOnOwnProps?!!t.dependsOnOwnProps:t.length!==1}function SP(t,e){return function(r,{displayName:i}){const s=function(a,u){return s.dependsOnOwnProps?s.mapToProps(a,u):s.mapToProps(a,void 0)};return s.dependsOnOwnProps=!0,s.mapToProps=function(a,u){s.mapToProps=t,s.dependsOnOwnProps=SI(t);let c=s(a,u);return typeof c=="function"&&(s.mapToProps=c,s.dependsOnOwnProps=SI(c),c=s(a,u)),c},s}}function n_(t,e){return(n,r)=>{throw new Error(`Invalid value of type ${typeof t} for ${e} argument when connecting component ${r.wrappedComponentName}.`)}}function AL(t){return t&&typeof t=="object"?Yg(e=>SL(t,e)):t?typeof t=="function"?SP(t):n_(t,"mapDispatchToProps"):Yg(e=>({dispatch:e}))}function PL(t){return t?typeof t=="function"?SP(t):n_(t,"mapStateToProps"):Yg(()=>({}))}function RL(t,e,n){return{...n,...t,...e}}function CL(t){return function(n,{displayName:r,areMergedPropsEqual:i}){let s=!1,o;return function(u,c,h){const d=t(u,c,h);return s?i(d,o)||(o=d):(s=!0,o=d),o}}}function kL(t){return t?typeof t=="function"?CL(t):n_(t,"mergeProps"):()=>RL}function bL(t){t()}function xL(){let t=null,e=null;return{clear(){t=null,e=null},notify(){bL(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var AI={notify(){},get:()=>[]};function AP(t,e){let n,r=AI,i=0,s=!1;function o(A){h();const k=r.subscribe(A);let E=!1;return()=>{E||(E=!0,k(),d())}}function a(){r.notify()}function u(){I.onStateChange&&I.onStateChange()}function c(){return s}function h(){i++,n||(n=e?e.addNestedSub(u):t.subscribe(u),r=xL())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=AI)}function p(){s||(s=!0,h())}function g(){s&&(s=!1,d())}const I={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:p,tryUnsubscribe:g,getListeners:()=>r};return I}var NL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DL=typeof navigator<"u"&&navigator.product==="ReactNative",Ud=NL||DL?Pe.useLayoutEffect:Pe.useEffect;function PI(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function bm(t,e){if(PI(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!PI(t[n[i]],e[n[i]]))return!1;return!0}var OL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},VL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},LL={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},PP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ML={[vL]:LL,[_L]:PP};function RI(t){return EL(t)?PP:ML[t.$$typeof]||OL}var FL=Object.defineProperty,UL=Object.getOwnPropertyNames,CI=Object.getOwnPropertySymbols,$L=Object.getOwnPropertyDescriptor,jL=Object.getPrototypeOf,kI=Object.prototype;function Jg(t,e){if(typeof e!="string"){if(kI){const s=jL(e);s&&s!==kI&&Jg(t,s)}let n=UL(e);CI&&(n=n.concat(CI(e)));const r=RI(t),i=RI(e);for(let s=0;s<n.length;++s){const o=n[s];if(!VL[o]&&!(i&&i[o])&&!(r&&r[o])){const a=$L(e,o);try{FL(t,o,a)}catch{}}}}return t}var RP=oL,BL=t=>{RP=t},zL=[null,null];function qL(t,e,n){Ud(()=>t(...e),n)}function GL(t,e,n,r,i,s){t.current=r,n.current=!1,i.current&&(i.current=null,s())}function WL(t,e,n,r,i,s,o,a,u,c,h){if(!t)return()=>{};let d=!1,p=null;const g=()=>{if(d||!a.current)return;const A=e.getState();let k,E;try{k=r(A,i.current)}catch(_){E=_,p=_}E||(p=null),k===s.current?o.current||c():(s.current=k,u.current=k,o.current=!0,h())};return n.onStateChange=g,n.trySubscribe(),g(),()=>{if(d=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}function HL(t,e){return t===e}function KL(t,e,n,{pure:r,areStatesEqual:i=HL,areOwnPropsEqual:s=bm,areStatePropsEqual:o=bm,areMergedPropsEqual:a=bm,forwardRef:u=!1,context:c=IP}={}){const h=c,d=PL(t),p=AL(e),g=kL(n),I=!!t;return k=>{const E=k.displayName||k.name||"Component",_=`Connect(${E})`,T={shouldHandleStateChanges:I,displayName:_,wrappedComponentName:E,WrappedComponent:k,initMapStateToProps:d,initMapDispatchToProps:p,initMergeProps:g,areStatesEqual:i,areStatePropsEqual:o,areOwnPropsEqual:s,areMergedPropsEqual:a};function C(v){const[y,S,P]=Pe.useMemo(()=>{const{reactReduxForwardedRef:de,...ut}=v;return[v.context,de,ut]},[v]),x=Pe.useMemo(()=>{let de=h;return y!=null&&y.Consumer,de},[y,h]),O=Pe.useContext(x),R=!!v.store&&!!v.store.getState&&!!v.store.dispatch,_e=!!O&&!!O.store,he=R?v.store:O.store,ft=_e?O.getServerState:he.getState,Ne=Pe.useMemo(()=>TL(he.dispatch,T),[he]),[W,q]=Pe.useMemo(()=>{if(!I)return zL;const de=AP(he,R?void 0:O.subscription),ut=de.notifyNestedSubs.bind(de);return[de,ut]},[he,R,O]),B=Pe.useMemo(()=>R?O:{...O,subscription:W},[R,O,W]),b=Pe.useRef(void 0),N=Pe.useRef(P),D=Pe.useRef(void 0),j=Pe.useRef(!1),Y=Pe.useRef(!1),Z=Pe.useRef(void 0);Ud(()=>(Y.current=!0,()=>{Y.current=!1}),[]);const te=Pe.useMemo(()=>()=>D.current&&P===N.current?D.current:Ne(he.getState(),P),[he,P]),se=Pe.useMemo(()=>ut=>W?WL(I,he,W,Ne,N,b,j,Y,D,q,ut):()=>{},[W]);qL(GL,[N,b,j,P,D,q]);let Te;try{Te=RP(se,te,ft?()=>Ne(ft(),P):te)}catch(de){throw Z.current&&(de.message+=`
The error may be correlated with this previous error:
${Z.current.stack}

`),de}Ud(()=>{Z.current=void 0,D.current=void 0,b.current=Te});const $e=Pe.useMemo(()=>Pe.createElement(k,{...Te,ref:S}),[S,k,Te]);return Pe.useMemo(()=>I?Pe.createElement(x.Provider,{value:B},$e):$e,[x,$e,B])}const V=Pe.memo(C);if(V.WrappedComponent=k,V.displayName=C.displayName=_,u){const y=Pe.forwardRef(function(P,x){return Pe.createElement(V,{...P,reactReduxForwardedRef:x})});return y.displayName=_,y.WrappedComponent=k,Jg(y,k)}return Jg(V,k)}}var jf=KL;function QL({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Pe.useMemo(()=>{const c=AP(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Pe.useMemo(()=>t.getState(),[t]);Ud(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||IP;return Pe.createElement(u.Provider,{value:o},n)}var YL=QL;BL(ln.useSyncExternalStore);function jh(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?jh=function(n){return typeof n}:jh=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jh(t)}function JL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function XL(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ZL(t,e,n){return e&&XL(t.prototype,e),t}function e2(t,e){return e&&(jh(e)==="object"||typeof e=="function")?e:Bh(t)}function Xg(t){return Xg=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Xg(t)}function Bh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function t2(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Zg(t,e)}function Zg(t,e){return Zg=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Zg(t,e)}function zh(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var CP=function(t){t2(e,t);function e(){var n,r;JL(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e2(this,(n=Xg(e)).call.apply(n,[this].concat(s))),zh(Bh(r),"state",{bootstrapped:!1}),zh(Bh(r),"_unsubscribe",void 0),zh(Bh(r),"handlePersistorState",function(){var a=r.props.persistor,u=a.getState(),c=u.bootstrapped;c&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return ZL(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(ln.PureComponent);zh(CP,"defaultProps",{children:null,loading:null});function Lt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var n2=typeof Symbol=="function"&&Symbol.observable||"@@observable",bI=n2,xm=()=>Math.random().toString(36).substring(7).split("").join("."),r2={INIT:`@@redux/INIT${xm()}`,REPLACE:`@@redux/REPLACE${xm()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${xm()}`},$d=r2;function i2(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function r_(t,e,n){if(typeof t!="function")throw new Error(Lt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Lt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Lt(1));return n(r_)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((k,E)=>{o.set(E,k)}))}function h(){if(u)throw new Error(Lt(3));return i}function d(k){if(typeof k!="function")throw new Error(Lt(4));if(u)throw new Error(Lt(5));let E=!0;c();const _=a++;return o.set(_,k),function(){if(E){if(u)throw new Error(Lt(6));E=!1,c(),o.delete(_),s=null}}}function p(k){if(!i2(k))throw new Error(Lt(7));if(typeof k.type>"u")throw new Error(Lt(8));if(typeof k.type!="string")throw new Error(Lt(17));if(u)throw new Error(Lt(9));try{u=!0,i=r(i,k)}finally{u=!1}return(s=o).forEach(_=>{_()}),k}function g(k){if(typeof k!="function")throw new Error(Lt(10));r=k,p({type:$d.REPLACE})}function I(){const k=d;return{subscribe(E){if(typeof E!="object"||E===null)throw new Error(Lt(11));function _(){const C=E;C.next&&C.next(h())}return _(),{unsubscribe:k(_)}},[bI](){return this}}}return p({type:$d.INIT}),{dispatch:p,subscribe:d,getState:h,replaceReducer:g,[bI]:I}}function s2(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:$d.INIT})>"u")throw new Error(Lt(12));if(typeof n(void 0,{type:$d.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Lt(13))})}function o2(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{s2(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let h=0;h<r.length;h++){const d=r[h],p=n[d],g=o[d],I=p(g,a);if(typeof I>"u")throw a&&a.type,new Error(Lt(14));c[d]=I,u=u||I!==g}return u=u||r.length!==Object.keys(o).length,u?c:o}}function a2(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function u2(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Lt(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=a2(...a)(i.dispatch),{...i,dispatch:s}}}var i_="persist:",kP="persist/FLUSH",s_="persist/REHYDRATE",bP="persist/PAUSE",xP="persist/PERSIST",NP="persist/PURGE",DP="persist/REGISTER",l2=-1;function qh(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qh=function(n){return typeof n}:qh=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qh(t)}function xI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function c2(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xI(n,!0).forEach(function(r){h2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xI(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function h2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d2(t,e,n,r){r.debug;var i=c2({},n);return t&&qh(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function f2(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:i_).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(L){return L}:typeof t.serialize=="function"?a=t.serialize:a=p2;var u=t.writeFailHandler||null,c={},h={},d=[],p=null,g=null,I=function(L){Object.keys(L).forEach(function(V){E(V)&&c[V]!==L[V]&&d.indexOf(V)===-1&&d.push(V)}),Object.keys(c).forEach(function(V){L[V]===void 0&&E(V)&&d.indexOf(V)===-1&&c[V]!==void 0&&d.push(V)}),p===null&&(p=setInterval(A,i)),c=L};function A(){if(d.length===0){p&&clearInterval(p),p=null;return}var C=d.shift(),L=r.reduce(function(V,v){return v.in(V,C,c)},c[C]);if(L!==void 0)try{h[C]=a(L)}catch(V){console.error("redux-persist/createPersistoid: error serializing state",V)}else delete h[C];d.length===0&&k()}function k(){Object.keys(h).forEach(function(C){c[C]===void 0&&delete h[C]}),g=o.setItem(s,a(h)).catch(_)}function E(C){return!(n&&n.indexOf(C)===-1&&C!=="_persist"||e&&e.indexOf(C)!==-1)}function _(C){u&&u(C)}var T=function(){for(;d.length!==0;)A();return g||Promise.resolve()};return{update:I,flush:T}}function p2(t){return JSON.stringify(t)}function m2(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:i_).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=g2,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(u){o[u]=e.reduceRight(function(c,h){return h.out(c,u,a)},i(a[u]))}),o}catch(u){throw u}else return})}function g2(t){return JSON.parse(t)}function y2(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:i_).concat(t.key);return e.removeItem(n,v2)}function v2(t){}function NI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Vr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?NI(n,!0).forEach(function(r){_2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):NI(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w2(t,e){if(t==null)return{};var n=E2(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function E2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var I2=5e3;function T2(t,e){var n=t.version!==void 0?t.version:l2;t.debug;var r=t.stateReconciler===void 0?d2:t.stateReconciler,i=t.getStoredState||m2,s=t.timeout!==void 0?t.timeout:I2,o=null,a=!1,u=!0,c=function(d){return d._persist.rehydrated&&o&&!u&&o.update(d),d};return function(h,d){var p=h||{},g=p._persist,I=w2(p,["_persist"]),A=I;if(d.type===xP){var k=!1,E=function(y,S){k||(d.rehydrate(t.key,y,S),k=!0)};if(s&&setTimeout(function(){!k&&E(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),u=!1,o||(o=f2(t)),g)return Vr({},e(A,d),{_persist:g});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(t.key),i(t).then(function(v){var y=t.migrate||function(S,P){return Promise.resolve(S)};y(v,n).then(function(S){E(S)},function(S){E(void 0,S)})},function(v){E(void 0,v)}),Vr({},e(A,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===NP)return a=!0,d.result(y2(t)),Vr({},e(A,d),{_persist:g});if(d.type===kP)return d.result(o&&o.flush()),Vr({},e(A,d),{_persist:g});if(d.type===bP)u=!0;else if(d.type===s_){if(a)return Vr({},A,{_persist:Vr({},g,{rehydrated:!0})});if(d.key===t.key){var _=e(A,d),T=d.payload,C=r!==!1&&T!==void 0?r(T,h,_,t):_,L=Vr({},C,{_persist:Vr({},g,{rehydrated:!0})});return c(L)}}}if(!g)return e(h,d);var V=e(A,d);return V===A?h:c(Vr({},V,{_persist:g}))}}function DI(t){return P2(t)||A2(t)||S2()}function S2(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function A2(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function P2(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function OI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ey(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?OI(n,!0).forEach(function(r){R2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):OI(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function R2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var OP={registry:[],bootstrapped:!1},C2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:OP,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case DP:return ey({},e,{registry:[].concat(DI(e.registry),[n.key])});case s_:var r=e.registry.indexOf(n.key),i=DI(e.registry);return i.splice(r,1),ey({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function k2(t,e,n){var r=r_(C2,OP,void 0),i=function(u){r.dispatch({type:DP,key:u})},s=function(u,c,h){var d={type:s_,payload:c,err:h,key:u};t.dispatch(d),r.dispatch(d)},o=ey({},r,{purge:function(){var u=[];return t.dispatch({type:NP,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:kP,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){t.dispatch({type:bP})},persist:function(){t.dispatch({type:xP,register:i,rehydrate:s})}});return o.persist(),o}var VI={exports:{}};(function(t,e){(function(n,r){r(e)})(Iu,function(n){function r(b,N){b.super_=N,b.prototype=Object.create(N.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}})}function i(b,N){Object.defineProperty(this,"kind",{value:b,enumerable:!0}),N&&N.length&&Object.defineProperty(this,"path",{value:N,enumerable:!0})}function s(b,N,D){s.super_.call(this,"E",b),Object.defineProperty(this,"lhs",{value:N,enumerable:!0}),Object.defineProperty(this,"rhs",{value:D,enumerable:!0})}function o(b,N){o.super_.call(this,"N",b),Object.defineProperty(this,"rhs",{value:N,enumerable:!0})}function a(b,N){a.super_.call(this,"D",b),Object.defineProperty(this,"lhs",{value:N,enumerable:!0})}function u(b,N,D){u.super_.call(this,"A",b),Object.defineProperty(this,"index",{value:N,enumerable:!0}),Object.defineProperty(this,"item",{value:D,enumerable:!0})}function c(b,N,D){var j=b.slice(N+1||b.length);return b.length=N<0?b.length+N:N,b.push.apply(b,j),b}function h(b){var N=typeof b>"u"?"undefined":he(b);return N!=="object"?N:b===Math?"math":b===null?"null":Array.isArray(b)?"array":Object.prototype.toString.call(b)==="[object Date]"?"date":typeof b.toString=="function"&&/^\/.*\//.test(b.toString())?"regexp":"object"}function d(b,N,D,j,Y,Z,te){Y=Y||[],te=te||[];var se=Y.slice(0);if(typeof Z<"u"){if(j){if(typeof j=="function"&&j(se,Z))return;if((typeof j>"u"?"undefined":he(j))==="object"){if(j.prefilter&&j.prefilter(se,Z))return;if(j.normalize){var Te=j.normalize(se,Z,b,N);Te&&(b=Te[0],N=Te[1])}}}se.push(Z)}h(b)==="regexp"&&h(N)==="regexp"&&(b=b.toString(),N=N.toString());var $e=typeof b>"u"?"undefined":he(b),je=typeof N>"u"?"undefined":he(N),de=$e!=="undefined"||te&&te[te.length-1].lhs&&te[te.length-1].lhs.hasOwnProperty(Z),ut=je!=="undefined"||te&&te[te.length-1].rhs&&te[te.length-1].rhs.hasOwnProperty(Z);if(!de&&ut)D(new o(se,N));else if(!ut&&de)D(new a(se,b));else if(h(b)!==h(N))D(new s(se,b,N));else if(h(b)==="date"&&b-N!==0)D(new s(se,b,N));else if($e==="object"&&b!==null&&N!==null)if(te.filter(function(Ke){return Ke.lhs===b}).length)b!==N&&D(new s(se,b,N));else{if(te.push({lhs:b,rhs:N}),Array.isArray(b)){var Se;for(b.length,Se=0;Se<b.length;Se++)Se>=N.length?D(new u(se,Se,new a(void 0,b[Se]))):d(b[Se],N[Se],D,j,se,Se,te);for(;Se<N.length;)D(new u(se,Se,new o(void 0,N[Se++])))}else{var Jn=Object.keys(b),Fn=Object.keys(N);Jn.forEach(function(Ke,li){var ci=Fn.indexOf(Ke);ci>=0?(d(b[Ke],N[Ke],D,j,se,Ke,te),Fn=c(Fn,ci)):d(b[Ke],void 0,D,j,se,Ke,te)}),Fn.forEach(function(Ke){d(void 0,N[Ke],D,j,se,Ke,te)})}te.length=te.length-1}else b!==N&&($e==="number"&&isNaN(b)&&isNaN(N)||D(new s(se,b,N)))}function p(b,N,D,j){return j=j||[],d(b,N,function(Y){Y&&j.push(Y)},D),j.length?j:void 0}function g(b,N,D){if(D.path&&D.path.length){var j,Y=b[N],Z=D.path.length-1;for(j=0;j<Z;j++)Y=Y[D.path[j]];switch(D.kind){case"A":g(Y[D.path[j]],D.index,D.item);break;case"D":delete Y[D.path[j]];break;case"E":case"N":Y[D.path[j]]=D.rhs}}else switch(D.kind){case"A":g(b[N],D.index,D.item);break;case"D":b=c(b,N);break;case"E":case"N":b[N]=D.rhs}return b}function I(b,N,D){if(b&&N&&D&&D.kind){for(var j=b,Y=-1,Z=D.path?D.path.length-1:0;++Y<Z;)typeof j[D.path[Y]]>"u"&&(j[D.path[Y]]=typeof D.path[Y]=="number"?[]:{}),j=j[D.path[Y]];switch(D.kind){case"A":g(D.path?j[D.path[Y]]:j,D.index,D.item);break;case"D":delete j[D.path[Y]];break;case"E":case"N":j[D.path[Y]]=D.rhs}}}function A(b,N,D){if(D.path&&D.path.length){var j,Y=b[N],Z=D.path.length-1;for(j=0;j<Z;j++)Y=Y[D.path[j]];switch(D.kind){case"A":A(Y[D.path[j]],D.index,D.item);break;case"D":Y[D.path[j]]=D.lhs;break;case"E":Y[D.path[j]]=D.lhs;break;case"N":delete Y[D.path[j]]}}else switch(D.kind){case"A":A(b[N],D.index,D.item);break;case"D":b[N]=D.lhs;break;case"E":b[N]=D.lhs;break;case"N":b=c(b,N)}return b}function k(b,N,D){if(b&&N&&D&&D.kind){var j,Y,Z=b;for(Y=D.path.length-1,j=0;j<Y;j++)typeof Z[D.path[j]]>"u"&&(Z[D.path[j]]={}),Z=Z[D.path[j]];switch(D.kind){case"A":A(Z[D.path[j]],D.index,D.item);break;case"D":Z[D.path[j]]=D.lhs;break;case"E":Z[D.path[j]]=D.lhs;break;case"N":delete Z[D.path[j]]}}}function E(b,N,D){if(b&&N){var j=function(Y){D&&!D(b,N,Y)||I(b,N,Y)};d(b,N,j)}}function _(b){return"color: "+W[b].color+"; font-weight: bold"}function T(b){var N=b.kind,D=b.path,j=b.lhs,Y=b.rhs,Z=b.index,te=b.item;switch(N){case"E":return[D.join("."),j,"→",Y];case"N":return[D.join("."),Y];case"D":return[D.join(".")];case"A":return[D.join(".")+"["+Z+"]",te];default:return[]}}function C(b,N,D,j){var Y=p(b,N);try{j?D.groupCollapsed("diff"):D.group("diff")}catch{D.log("diff")}Y?Y.forEach(function(Z){var te=Z.kind,se=T(Z);D.log.apply(D,["%c "+W[te].text,_(te)].concat(ft(se)))}):D.log("—— no diff ——");try{D.groupEnd()}catch{D.log("—— diff end —— ")}}function L(b,N,D,j){switch(typeof b>"u"?"undefined":he(b)){case"object":return typeof b[j]=="function"?b[j].apply(b,ft(D)):b[j];case"function":return b(N);default:return b}}function V(b){var N=b.timestamp,D=b.duration;return function(j,Y,Z){var te=["action"];return te.push("%c"+String(j.type)),N&&te.push("%c@ "+Y),D&&te.push("%c(in "+Z.toFixed(2)+" ms)"),te.join(" ")}}function v(b,N){var D=N.logger,j=N.actionTransformer,Y=N.titleFormatter,Z=Y===void 0?V(N):Y,te=N.collapsed,se=N.colors,Te=N.level,$e=N.diff,je=typeof N.titleFormatter>"u";b.forEach(function(de,ut){var Se=de.started,Jn=de.startedTime,Fn=de.action,Ke=de.prevState,li=de.error,ci=de.took,Xn=de.nextState,go=b[ut+1];go&&(Xn=go.prevState,ci=go.started-Se);var Un=j(Fn),yo=typeof te=="function"?te(function(){return Xn},Fn,de):te,ou=R(Jn),Vc=se.title?"color: "+se.title(Un)+";":"",Ze=["color: gray; font-weight: lighter;"];Ze.push(Vc),N.timestamp&&Ze.push("color: gray; font-weight: lighter;"),N.duration&&Ze.push("color: gray; font-weight: lighter;");var lt=Z(Un,ou,ci);try{yo?se.title&&je?D.groupCollapsed.apply(D,["%c "+lt].concat(Ze)):D.groupCollapsed(lt):se.title&&je?D.group.apply(D,["%c "+lt].concat(Ze)):D.group(lt)}catch{D.log(lt)}var hi=L(Te,Un,[Ke],"prevState"),vo=L(Te,Un,[Un],"action"),_o=L(Te,Un,[li,Ke],"error"),au=L(Te,Un,[Xn],"nextState");if(hi)if(se.prevState){var ds="color: "+se.prevState(Ke)+"; font-weight: bold";D[hi]("%c prev state",ds,Ke)}else D[hi]("prev state",Ke);if(vo)if(se.action){var Lc="color: "+se.action(Un)+"; font-weight: bold";D[vo]("%c action    ",Lc,Un)}else D[vo]("action    ",Un);if(li&&_o)if(se.error){var Mc="color: "+se.error(li,Ke)+"; font-weight: bold;";D[_o]("%c error     ",Mc,li)}else D[_o]("error     ",li);if(au)if(se.nextState){var uu="color: "+se.nextState(Xn)+"; font-weight: bold";D[au]("%c next state",uu,Xn)}else D[au]("next state",Xn);$e&&C(Ke,Xn,D,yo);try{D.groupEnd()}catch{D.log("—— log end ——")}})}function y(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=Object.assign({},q,b),D=N.logger,j=N.stateTransformer,Y=N.errorTransformer,Z=N.predicate,te=N.logErrors,se=N.diffPredicate;if(typeof D>"u")return function(){return function($e){return function(je){return $e(je)}}};if(b.getState&&b.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function($e){return function(je){return $e(je)}}};var Te=[];return function($e){var je=$e.getState;return function(de){return function(ut){if(typeof Z=="function"&&!Z(je,ut))return de(ut);var Se={};Te.push(Se),Se.started=_e.now(),Se.startedTime=new Date,Se.prevState=j(je()),Se.action=ut;var Jn=void 0;if(te)try{Jn=de(ut)}catch(Ke){Se.error=Y(Ke)}else Jn=de(ut);Se.took=_e.now()-Se.started,Se.nextState=j(je());var Fn=N.diff&&typeof se=="function"?se(je,ut):N.diff;if(v(Te,Object.assign({},N,{diff:Fn})),Te.length=0,Se.error)throw Se.error;return Jn}}}}var S,P,x=function(b,N){return new Array(N+1).join(b)},O=function(b,N){return x("0",N-b.toString().length)+b},R=function(b){return O(b.getHours(),2)+":"+O(b.getMinutes(),2)+":"+O(b.getSeconds(),2)+"."+O(b.getMilliseconds(),3)},_e=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},ft=function(b){if(Array.isArray(b)){for(var N=0,D=Array(b.length);N<b.length;N++)D[N]=b[N];return D}return Array.from(b)},Ne=[];S=(typeof Iu>"u"?"undefined":he(Iu))==="object"&&Iu?Iu:typeof window<"u"?window:{},P=S.DeepDiff,P&&Ne.push(function(){typeof P<"u"&&S.DeepDiff===p&&(S.DeepDiff=P,P=void 0)}),r(s,i),r(o,i),r(a,i),r(u,i),Object.defineProperties(p,{diff:{value:p,enumerable:!0},observableDiff:{value:d,enumerable:!0},applyDiff:{value:E,enumerable:!0},applyChange:{value:I,enumerable:!0},revertChange:{value:k,enumerable:!0},isConflict:{value:function(){return typeof P<"u"},enumerable:!0},noConflict:{value:function(){return Ne&&(Ne.forEach(function(b){b()}),Ne=null),p},enumerable:!0}});var W={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},q={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(b){return b},actionTransformer:function(b){return b},errorTransformer:function(b){return b},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},B=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=b.dispatch,D=b.getState;return typeof N=="function"||typeof D=="function"?y()({dispatch:N,getState:D}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=q,n.createLogger=y,n.logger=B,n.default=B,Object.defineProperty(n,"__esModule",{value:!0})})})(VI,VI.exports);var hr=function(e){return"@@redux-saga/"+e},b2=hr("CANCEL_PROMISE"),VP=hr("CHANNEL_END"),LP=hr("IO"),LI=hr("MATCH"),MP=hr("MULTICAST"),FP=hr("SAGA_ACTION"),UP=hr("SELF_CANCELLATION"),x2=hr("TASK"),na=hr("TASK_CANCEL"),$P=hr("TERMINATE"),N2=hr("LOCATION"),jP=function(e){return e==null},Gh=function(e){return e!=null},An=function(e){return typeof e=="function"},o_=function(e){return typeof e=="string"},ss=Array.isArray,Bf=function(e){return e&&An(e.then)},a_=function(e){return e&&An(e.next)&&An(e.throw)},MI=function t(e){return e&&(o_(e)||zP(e)||An(e)||ss(e)&&e.every(t))},u_=function(e){return e&&An(e.take)&&An(e.close)},BP=function(e){return An(e)&&e.hasOwnProperty("toString")},zP=function(e){return!!e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype},D2=function(e){return u_(e)&&e[MP]},O2=function(e){return function(){return e}},V2=O2(!0),tn=function(){},qP=function(e){return e},l_=function(e,n){vt(e,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach(function(r){e[r]=n[r]})},L2=function(e,n){var r;return(r=[]).concat.apply(r,n.map(e))};function zf(t,e){var n=t.indexOf(e);n>=0&&t.splice(n,1)}function M2(t){var e=!1;return function(){e||(e=!0,t())}}var F2=function(e){throw e},U2=function(e){return{value:e,done:!0}};function ty(t,e,n){e===void 0&&(e=F2),n===void 0&&(n="iterator");var r={meta:{name:n},next:t,throw:e,return:U2,isSagaIterator:!0};return typeof Symbol<"u"&&(r[Symbol.iterator]=function(){return r}),r}function $2(t,e){var n=e.sagaStack;console.error(t),console.error(n)}var GP=function(e){return Array.apply(null,new Array(e))},j2=function(e){return function(n){return e(Object.defineProperty(n,FP,{value:!0}))}},WP=function(e){return e===$P},HP=function(e){return e===na},KP=function(e){return WP(e)||HP(e)};function QP(t,e){var n=Object.keys(t),r=n.length,i=0,s,o=ss(t)?GP(r):{},a={};function u(){i===r&&(s=!0,e(o))}return n.forEach(function(c){var h=function(p,g){s||(g||KP(p)?(e.cancel(),e(p,g)):(o[c]=p,i++,u()))};h.cancel=tn,a[c]=h}),e.cancel=function(){s||(s=!0,n.forEach(function(c){return a[c].cancel()}))},a}function c_(t){return{name:t.name||"anonymous",location:YP(t)}}function YP(t){return t[N2]}function B2(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}var z2="Channel's Buffer overflow!",q2=1,G2=3,JP=4;function W2(t,e){t===void 0&&(t=10);var n=new Array(t),r=0,i=0,s=0,o=function(h){n[i]=h,i=(i+1)%t,r++},a=function(){if(r!=0){var h=n[s];return n[s]=null,r--,s=(s+1)%t,h}},u=function(){for(var h=[];r;)h.push(a());return h};return{isEmpty:function(){return r==0},put:function(h){if(r<t)o(h);else{var d;switch(e){case q2:throw new Error(z2);case G2:n[i]=h,i=(i+1)%t,s=i;break;case JP:d=2*t,n=u(),r=n.length,i=n.length,s=0,n.length=d,t=d,o(h);break}}},take:a,flush:u}}var H2=function(e){return W2(e,JP)},Wh="TAKE",XP="PUT",ZP="ALL",K2="RACE",eR="CALL",Q2="CPS",tR="FORK",Y2="JOIN",nR="CANCEL",rR="SELECT",J2="ACTION_CHANNEL",X2="CANCELLED",Z2="FLUSH",eM="GET_CONTEXT",tM="SET_CONTEXT",Wr=function(e,n){var r;return r={},r[LP]=!0,r.combinator=!1,r.type=e,r.payload=n,r};function nM(t,e){if(t===void 0&&(t="*"),MI(t))return Gh(e)&&console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"),Wr(Wh,{pattern:t});if(D2(t)&&Gh(e)&&MI(e))return Wr(Wh,{channel:t,pattern:e});if(u_(t))return Gh(e)&&console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."),Wr(Wh,{channel:t})}function cn(t,e){return jP(e)&&(e=t,t=void 0),Wr(XP,{channel:t,action:e})}function qf(t){var e=Wr(ZP,t);return e.combinator=!0,e}function iR(t,e){var n=null,r;return An(t)?r=t:(ss(t)?(n=t[0],r=t[1]):(n=t.context,r=t.fn),n&&o_(r)&&An(n[r])&&(r=n[r])),{context:n,fn:r,args:e}}function nn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Wr(eR,iR(t,n))}function sR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Wr(tR,iR(t,n))}function rM(t){return t===void 0&&(t=UP),Wr(nR,t)}function FI(t){t===void 0&&(t=qP);for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Wr(rR,{selector:t,args:n})}function iM(){var t={};return t.promise=new Promise(function(e,n){t.resolve=e,t.reject=n}),t}var oR=[],Gf=0;function sM(t){try{h_(),t()}finally{lR()}}function aR(t){oR.push(t),Gf||(h_(),cR())}function uR(t){try{return h_(),t()}finally{cR()}}function h_(){Gf++}function lR(){Gf--}function cR(){lR();for(var t;!Gf&&(t=oR.shift())!==void 0;)sM(t)}var oM=function(e){return function(n){return e.some(function(r){return d_(r)(n)})}},aM=function(e){return function(n){return e(n)}},UI=function(e){return function(n){return n.type===String(e)}},uM=function(e){return function(n){return n.type===e}},hR=function(){return V2};function d_(t){var e=t==="*"?hR:o_(t)?UI:ss(t)?oM:BP(t)?UI:An(t)?aM:zP(t)?uM:null;if(e===null)throw new Error("invalid pattern: "+t);return e(t)}var ul={type:VP},f_=function(e){return e&&e.type===VP};function lM(t){t===void 0&&(t=H2());var e=!1,n=[];function r(a){if(!e){if(n.length===0)return t.put(a);var u=n.shift();u(a)}}function i(a){e&&t.isEmpty()?a(ul):t.isEmpty()?(n.push(a),a.cancel=function(){zf(n,a)}):a(t.take())}function s(a){if(e&&t.isEmpty()){a(ul);return}a(t.flush())}function o(){if(!e){e=!0;var a=n;n=[];for(var u=0,c=a.length;u<c;u++){var h=a[u];h(ul)}}}return{take:i,put:r,flush:s,close:o}}function cM(){var t,e=!1,n=[],r=n,i=function(){r===n&&(r=n.slice())},s=function(){e=!0;var a=n=r;r=[],a.forEach(function(u){u(ul)})};return t={},t[MP]=!0,t.put=function(a){if(!e){if(f_(a)){s();return}for(var u=n=r,c=0,h=u.length;c<h;c++){var d=u[c];d[LI](a)&&(d.cancel(),d(a))}}},t.take=function(a,u){if(u===void 0&&(u=hR),e){a(ul);return}a[LI]=u,i(),r.push(a),a.cancel=M2(function(){i(),zf(r,a)})},t.close=s,t}function dR(){var t=cM(),e=t.put;return t.put=function(n){if(n[FP]){e(n);return}aR(function(){e(n)})},t}var Is=0,Ur=1,Hh=2,fR=3;function p_(t,e){var n=t[b2];An(n)&&(e.cancel=n),t.then(e,function(r){e(r,!0)})}var fc=0,pR=function(){return++fc},Vt;function hM(t,e){return t.isSagaIterator?{name:t.meta.name}:c_(e)}function dM(t){var e=t.context,n=t.fn,r=t.args;try{var i=n.apply(e,r);if(a_(i))return i;var s=!1,o=function(u){return s?{value:u,done:!0}:(s=!0,{value:i,done:!Bf(i)})};return ty(o)}catch(a){return ty(function(){throw a})}}function fM(t,e,n){var r=e.channel,i=e.action,s=e.resolve;aR(function(){var o;try{o=(r?r.put:t.dispatch)(i)}catch(a){n(a,!0);return}s&&Bf(o)?p_(o,n):n(o)})}function pM(t,e,n){var r=e.channel,i=r===void 0?t.channel:r,s=e.pattern,o=e.maybe,a=function(c){if(c instanceof Error){n(c,!0);return}if(f_(c)&&!o){n($P);return}n(c)};try{i.take(a,Gh(s)?d_(s):null)}catch(u){n(u,!0);return}n.cancel=a.cancel}function mM(t,e,n,r){var i=e.context,s=e.fn,o=e.args,a=r.task;try{var u=s.apply(i,o);if(Bf(u)){p_(u,n);return}if(a_(u)){Wf(t,u,a.context,fc,c_(s),!1,n);return}n(u)}catch(c){n(c,!0)}}function gM(t,e,n){var r=e.context,i=e.fn,s=e.args;try{var o=function(u,c){jP(u)?n(c):n(u,!0)};i.apply(r,s.concat(o)),o.cancel&&(n.cancel=o.cancel)}catch(a){n(a,!0)}}function yM(t,e,n,r){var i=e.context,s=e.fn,o=e.args,a=e.detached,u=r.task,c=dM({context:i,fn:s,args:o}),h=hM(c,s);uR(function(){var d=Wf(t,c,u.context,fc,h,a,void 0);a?n(d):d.isRunning()?(u.queue.addTask(d),n(d)):d.isAborted()?u.queue.abort(d.error()):n(d)})}function vM(t,e,n,r){var i=r.task,s=function(u,c){if(u.isRunning()){var h={task:i,cb:c};c.cancel=function(){u.isRunning()&&zf(u.joiners,h)},u.joiners.push(h)}else u.isAborted()?c(u.error(),!0):c(u.result())};if(ss(e)){if(e.length===0){n([]);return}var o=QP(e,n);e.forEach(function(a,u){s(a,o[u])})}else s(e,n)}function Nm(t){t.isRunning()&&t.cancel()}function _M(t,e,n,r){var i=r.task;e===UP?Nm(i):ss(e)?e.forEach(Nm):Nm(e),n()}function wM(t,e,n,r){var i=r.digestEffect,s=fc,o=Object.keys(e);if(o.length===0){n(ss(e)?[]:{});return}var a=QP(e,n);o.forEach(function(u){i(e[u],s,a[u],u)})}function EM(t,e,n,r){var i=r.digestEffect,s=fc,o=Object.keys(e),a=ss(e)?GP(o.length):{},u={},c=!1;o.forEach(function(h){var d=function(g,I){c||(I||KP(g)?(n.cancel(),n(g,I)):(n.cancel(),c=!0,a[h]=g,n(a)))};d.cancel=tn,u[h]=d}),n.cancel=function(){c||(c=!0,o.forEach(function(h){return u[h].cancel()}))},o.forEach(function(h){c||i(e[h],s,u[h],h)})}function IM(t,e,n){var r=e.selector,i=e.args;try{var s=r.apply(void 0,[t.getState()].concat(i));n(s)}catch(o){n(o,!0)}}function TM(t,e,n){var r=e.pattern,i=e.buffer,s=lM(i),o=d_(r),a=function c(h){f_(h)||t.channel.take(c,o),s.put(h)},u=s.close;s.close=function(){a.cancel(),u()},t.channel.take(a,o),n(s)}function SM(t,e,n,r){var i=r.task;n(i.isCancelled())}function AM(t,e,n){e.flush(n)}function PM(t,e,n,r){var i=r.task;n(i.context[e])}function RM(t,e,n,r){var i=r.task;l_(i.context,e),n()}var CM=(Vt={},Vt[Wh]=pM,Vt[XP]=fM,Vt[ZP]=wM,Vt[K2]=EM,Vt[eR]=mM,Vt[Q2]=gM,Vt[tR]=yM,Vt[Y2]=vM,Vt[nR]=_M,Vt[rR]=IM,Vt[J2]=TM,Vt[X2]=SM,Vt[Z2]=AM,Vt[eM]=PM,Vt[tM]=RM,Vt);function kM(t,e,n){var r=[],i,s=!1;u(t);var o=function(){return r};function a(h){e(),c(),n(h,!0)}function u(h){r.push(h),h.cont=function(d,p){s||(zf(r,h),h.cont=tn,p?a(d):(h===t&&(i=d),r.length||(s=!0,n(i))))}}function c(){s||(s=!0,r.forEach(function(h){h.cont=tn,h.cancel()}),r=[])}return{addTask:u,cancelAll:c,abort:a,getTasks:o}}function mR(t,e){return t+"?"+e}function bM(t){var e=YP(t);if(e){var n=e.code,r=e.fileName,i=e.lineNumber,s=n+"  "+mR(r,i);return s}return""}function $I(t){var e=t.name,n=t.location;return n?e+"  "+mR(n.fileName,n.lineNumber):e}function xM(t){var e=L2(function(n){return n.cancelledTasks},t);return e.length?["Tasks cancelled due to error:"].concat(e).join(`
`):""}var m_=null,ll=[],NM=function(e){e.crashedEffect=m_,ll.push(e)},gR=function(){m_=null,ll.length=0},DM=function(e){m_=e},OM=function(){var e=ll[0],n=ll.slice(1),r=e.crashedEffect?bM(e.crashedEffect):null,i="The above error occurred in task "+$I(e.meta)+(r?` 
 when executing effect `+r:"");return[i].concat(n.map(function(s){return"    created by "+$I(s.meta)}),[xM(ll)]).join(`
`)};function VM(t,e,n,r,i,s,o){var a;o===void 0&&(o=tn);var u=Is,c,h,d=null,p=[],g=Object.create(n),I=kM(e,function(){p.push.apply(p,I.getTasks().map(function(L){return L.meta.name}))},k);function A(){u===Is&&(u=Ur,I.cancelAll(),k(na,!1))}function k(C,L){if(!L)C===na?u=Ur:u!==Ur&&(u=fR),c=C,d&&d.resolve(C);else{if(u=Hh,NM({meta:i,cancelledTasks:p}),T.isRoot){var V=OM();gR(),t.onError(C,{sagaStack:V})}h=C,d&&d.reject(C)}T.cont(C,L),T.joiners.forEach(function(v){v.cb(C,L)}),T.joiners=null}function E(C){l_(g,C)}function _(){return d||(d=iM(),u===Hh?d.reject(h):u!==Is&&d.resolve(c)),d.promise}var T=(a={},a[x2]=!0,a.id=r,a.meta=i,a.isRoot=s,a.context=g,a.joiners=[],a.queue=I,a.cancel=A,a.cont=o,a.end=k,a.setContext=E,a.toPromise=_,a.isRunning=function(){return u===Is},a.isCancelled=function(){return u===Ur||u===Is&&e.status===Ur},a.isAborted=function(){return u===Hh},a.result=function(){return c},a.error=function(){return h},a);return T}function Wf(t,e,n,r,i,s,o){var a=t.finalizeRunEffect(g);p.cancel=tn;var u={meta:i,cancel:d,status:Is},c=VM(t,u,n,r,i,s,o),h={task:c,digestEffect:I};function d(){u.status===Is&&(u.status=Ur,p(na))}return o&&(o.cancel=c.cancel),p(),c;function p(A,k){try{var E;k?(E=e.throw(A),gR()):HP(A)?(u.status=Ur,p.cancel(),E=An(e.return)?e.return(na):{done:!0,value:na}):WP(A)?E=An(e.return)?e.return():{done:!0}:E=e.next(A),E.done?(u.status!==Ur&&(u.status=fR),u.cont(E.value)):I(E.value,r,p)}catch(_){if(u.status===Ur)throw _;u.status=Hh,u.cont(_,!0)}}function g(A,k,E){if(Bf(A))p_(A,E);else if(a_(A))Wf(t,A,c.context,k,i,!1,E);else if(A&&A[LP]){var _=CM[A.type];_(t,A.payload,E,h)}else E(A)}function I(A,k,E,_){_===void 0&&(_="");var T=pR();t.sagaMonitor&&t.sagaMonitor.effectTriggered({effectId:T,parentEffectId:k,label:_,effect:A});var C;function L(V,v){C||(C=!0,E.cancel=tn,t.sagaMonitor&&(v?t.sagaMonitor.effectRejected(T,V):t.sagaMonitor.effectResolved(T,V)),v&&DM(A),E(V,v))}L.cancel=tn,E.cancel=function(){C||(C=!0,L.cancel(),L.cancel=tn,t.sagaMonitor&&t.sagaMonitor.effectCancelled(T))},a(A,T,L)}}function LM(t,e){for(var n=t.channel,r=n===void 0?dR():n,i=t.dispatch,s=t.getState,o=t.context,a=o===void 0?{}:o,u=t.sagaMonitor,c=t.effectMiddlewares,h=t.onError,d=h===void 0?$2:h,p=arguments.length,g=new Array(p>2?p-2:0),I=2;I<p;I++)g[I-2]=arguments[I];var A=e.apply(void 0,g),k=pR();u&&(u.rootSagaStarted=u.rootSagaStarted||tn,u.effectTriggered=u.effectTriggered||tn,u.effectResolved=u.effectResolved||tn,u.effectRejected=u.effectRejected||tn,u.effectCancelled=u.effectCancelled||tn,u.actionDispatched=u.actionDispatched||tn,u.rootSagaStarted({effectId:k,saga:e,args:g}));var E;if(c){var _=B2.apply(void 0,c);E=function(L){return function(V,v,y){var S=function(x){return L(x,v,y)};return _(S)(V)}}}else E=qP;var T={channel:r,dispatch:j2(i),getState:s,sagaMonitor:u,onError:d,finalizeRunEffect:E};return uR(function(){var C=Wf(T,A,a,k,c_(e),!0,void 0);return u&&u.effectResolved(k,C),C})}function MM(t){var e={},n=e.context,r=n===void 0?{}:n,i=e.channel,s=i===void 0?dR():i,o=e.sagaMonitor,a=za(e,["context","channel","sagaMonitor"]),u;function c(h){var d=h.getState,p=h.dispatch;return u=LM.bind(null,vt({},a,{context:r,channel:s,dispatch:p,getState:d,sagaMonitor:o})),function(g){return function(I){o&&o.actionDispatched&&o.actionDispatched(I);var A=g(I);return s.put(I),A}}}return c.run=function(){return u.apply(void 0,arguments)},c.setContext=function(h){l_(r,h)},c}var g_={},y_={};y_.__esModule=!0;y_.default=$M;function Kh(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Kh=function(n){return typeof n}:Kh=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Kh(t)}function Dm(){}var FM={getItem:Dm,setItem:Dm,removeItem:Dm};function UM(t){if((typeof self>"u"?"undefined":Kh(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function $M(t){var e="".concat(t,"Storage");return UM(e)?self[e]:FM}g_.__esModule=!0;g_.default=zM;var jM=BM(y_);function BM(t){return t&&t.__esModule?t:{default:t}}function zM(t){var e=(0,jM.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var yR=void 0,qM=GM(g_);function GM(t){return t&&t.__esModule?t:{default:t}}var WM=(0,qM.default)("local");yR=WM;const ze={GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},HM={currentUser:null},KM=(t=HM,e)=>{switch(e.type){case ze.SIGN_IN_SUCCESS:return{...t,currentUser:e.payload,error:null};case ze.SIGN_OUT_SUCCESS:return{...t,currentUser:null,error:null};case ze.SIGN_IN_FAILURE:case ze.SIGN_OUT_FAILURE:case ze.SIGN_UP_FAILURE:return{...t,error:e.payload};default:return t}},wt={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART",SET_CART_FROM_FIREBASE:"SET_CART_FROM_FIREBASE",UPDATE_CART_IN_FIREBASE_SUCCESS:"UPDATE_CART_IN_FIREBASE_SUCCESS",UPDATE_CART_IN_FIREBASE_FAILURE:"UPDATE_CART_IN_FIREBASE_FAILURE"},QM=(t,e)=>t.find(r=>r.id===e.id)?t.map(r=>r.id===e.id?{...r,quantity:r.quantity+1}:r):[...t,{...e,quantity:1}],YM=(t,e)=>t.find(r=>r.id===e.id).quantity===1?t.filter(r=>r.id!==e.id):t.map(r=>r.id===e.id?{...r,quantity:r.quantity-1}:r),JM={hidden:!0,cartItems:[]},XM=(t=JM,e)=>{switch(e.type){case wt.TOGGLE_CART_HIDDEN:return{...t,hidden:!t.hidden};case wt.ADD_ITEM:return{...t,cartItems:QM(t.cartItems,e.payload)};case wt.REMOVE_ITEM:return{...t,cartItems:YM(t.cartItems,e.payload)};case wt.CLEAR_ITEM_FROM_CART:return{...t,cartItems:t.cartItems.filter(n=>n.id!==e.payload.id)};case wt.CLEAR_CART:return{...t,cartItems:[]};case wt.SET_CART_FROM_FIREBASE:return{...t,cartItems:e.payload};case wt.UPDATE_CART_IN_FIREBASE_SUCCESS:return{...t,error:null};case wt.UPDATE_CART_IN_FIREBASE_FAILURE:return{...t,error:e.payload};default:return t}},ZM={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},eF=(t=ZM,e)=>{switch(e.type){default:return t}},Ms={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},tF={collections:null,isFetching:!1,errorMessage:void 0},nF=(t=tF,e)=>{switch(e.type){case Ms.FETCH_COLLECTIONS_START:return{...t,isFetching:!0};case Ms.FETCH_COLLECTIONS_SUCCESS:return{...t,isFetching:!1,collections:e.payload};case Ms.FETCH_COLLECTIONS_FAILURE:return{...t,isFetching:!1,errorMessage:e.payload};default:return t}},rF={key:"root",storage:yR,whitelist:["cart"]},iF=o2({user:KM,cart:XM,directory:eF,shop:nF}),sF=T2(rF,iF);var jI=function(e){return{done:!0,value:e}},Om={};function oF(t){return u_(t)?"channel":BP(t)?String(t):An(t)?t.name:String(t)}function aF(t,e,n){var r,i,s,o=e;function a(u,c){if(o===Om)return jI(u);if(c&&!i)throw o=Om,c;r&&r(u);var h=c?t[i](c):t[o]();return o=h.nextState,s=h.effect,r=h.stateUpdater,i=h.errorState,o===Om?jI(u):s}return ty(a,function(u){return a(null,u)},n)}function uF(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s={done:!1,value:nM(t)},o=function(g){return{done:!1,value:sR.apply(void 0,[e].concat(r,[g]))}},a=function(g){return{done:!1,value:rM(g)}},u,c,h=function(g){return u=g},d=function(g){return c=g};return aF({q1:function(){return{nextState:"q2",effect:s,stateUpdater:d}},q2:function(){return u?{nextState:"q3",effect:a(u)}:{nextState:"q1",effect:o(c),stateUpdater:h}},q3:function(){return{nextState:"q1",effect:o(c),stateUpdater:h}}},"q1","takeLatest("+oF(t)+", "+e.name+")")}function Nr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return sR.apply(void 0,[uF,t,e].concat(r))}var BI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lF=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_R={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vR(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lF(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new cF;const p=s<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const I=c<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cF extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hF=function(t){const e=vR(t);return _R.encodeByteArray(e,!0)},jd=function(t){return hF(t).replace(/\./g,"")},wR=function(t){try{return _R.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Bd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dF(n)||(t[n]=Bd(t[n],e[n]));return t}function dF(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fF(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pF=()=>fF().__FIREBASE_DEFAULTS__,mF=()=>{if(typeof process>"u"||typeof BI>"u")return;const t=BI.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gF=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wR(t[1]);return e&&JSON.parse(e)},v_=()=>{try{return pF()||mF()||gF()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ER=()=>{var t;return(t=v_())===null||t===void 0?void 0:t.config},yF=t=>{var e;return(e=v_())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _F(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jd(JSON.stringify(n)),jd(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wF(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function __(){var t;const e=(t=v_())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IR(){return typeof self=="object"&&self.self===self}function TR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function w_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SR(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AR(){return!__()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ml(){try{return typeof indexedDB=="object"}catch{return!1}}function EF(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IF,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TF(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,r)}}function TF(t,e){return t.replace(SF,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SF=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function AF(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qI(s)&&qI(o)){if(!Fl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qI(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PR(t,e){const n=new PF(t,e);return n.subscribe.bind(n)}class PF{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RF(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vm),i.error===void 0&&(i.error=Vm),i.complete===void 0&&(i.complete=Vm);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RF(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vm(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vF;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bF(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kF(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kF(t){return t===ws?void 0:t}function bF(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CF(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=[];var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const CR={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},xF=pe.INFO,NF={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},DF=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=NF[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hf{constructor(e){this.name=e,this._logLevel=xF,this._logHandler=DF,this._userLogHandler=null,E_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}function OF(t){E_.forEach(e=>{e.setLogLevel(t)})}function VF(t,e){for(const n of E_){let r=null;e&&e.level&&(r=CR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:pe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const LF=(t,e)=>e.some(n=>t instanceof n);let GI,WI;function MF(){return GI||(GI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FF(){return WI||(WI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kR=new WeakMap,ny=new WeakMap,bR=new WeakMap,Lm=new WeakMap,I_=new WeakMap;function UF(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ui(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kR.set(n,t)}).catch(()=>{}),I_.set(e,t),e}function $F(t){if(ny.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ny.set(t,e)}let ry={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ny.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jF(t){ry=t(ry)}function BF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mm(this),e,...n);return bR.set(r,e.sort?e.sort():[e]),Ui(r)}:FF().includes(t)?function(...e){return t.apply(Mm(this),e),Ui(kR.get(this))}:function(...e){return Ui(t.apply(Mm(this),e))}}function zF(t){return typeof t=="function"?BF(t):(t instanceof IDBTransaction&&$F(t),LF(t,MF())?new Proxy(t,ry):t)}function Ui(t){if(t instanceof IDBRequest)return UF(t);if(Lm.has(t))return Lm.get(t);const e=zF(t);return e!==t&&(Lm.set(t,e),I_.set(e,t)),e}const Mm=t=>I_.get(t);function qF(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ui(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ui(o.result),u.oldVersion,u.newVersion,Ui(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const GF=["get","getKey","getAll","getAllKeys","count"],WF=["put","add","delete","clear"],Fm=new Map;function HI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fm.get(e))return Fm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GF.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Fm.set(e,s),s}jF(t=>({...t,get:(e,n,r)=>HI(e,n)||t.get(e,n,r),has:(e,n)=>!!HI(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KF(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KF(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zd="@firebase/app",iy="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new Hf("@firebase/app"),QF="@firebase/app-compat",YF="@firebase/analytics-compat",JF="@firebase/analytics",XF="@firebase/app-check-compat",ZF="@firebase/app-check",eU="@firebase/auth",tU="@firebase/auth-compat",nU="@firebase/database",rU="@firebase/database-compat",iU="@firebase/functions",sU="@firebase/functions-compat",oU="@firebase/installations",aU="@firebase/installations-compat",uU="@firebase/messaging",lU="@firebase/messaging-compat",cU="@firebase/performance",hU="@firebase/performance-compat",dU="@firebase/remote-config",fU="@firebase/remote-config-compat",pU="@firebase/storage",mU="@firebase/storage-compat",gU="@firebase/firestore",yU="@firebase/vertexai-preview",vU="@firebase/firestore-compat",_U="firebase",wU="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="[DEFAULT]",EU={[zd]:"fire-core",[QF]:"fire-core-compat",[JF]:"fire-analytics",[YF]:"fire-analytics-compat",[ZF]:"fire-app-check",[XF]:"fire-app-check-compat",[eU]:"fire-auth",[tU]:"fire-auth-compat",[nU]:"fire-rtdb",[rU]:"fire-rtdb-compat",[iU]:"fire-fn",[sU]:"fire-fn-compat",[oU]:"fire-iid",[aU]:"fire-iid-compat",[uU]:"fire-fcm",[lU]:"fire-fcm-compat",[cU]:"fire-perf",[hU]:"fire-perf-compat",[dU]:"fire-rc",[fU]:"fire-rc-compat",[pU]:"fire-gcs",[mU]:"fire-gcs-compat",[gU]:"fire-fst",[vU]:"fire-fst-compat",[yU]:"fire-vertex","fire-js":"fire-js",[_U]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new Map,ya=new Map,va=new Map;function Ul(t,e){try{t.container.addComponent(e)}catch(n){Hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xR(t,e){t.container.addOrOverwriteComponent(e)}function Hi(t){const e=t.name;if(va.has(e))return Hs.debug(`There were multiple attempts to register component ${e}.`),!1;va.set(e,t);for(const n of Wi.values())Ul(n,t);for(const n of ya.values())Ul(n,t);return!0}function NR(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function IU(t,e,n=Gi){NR(t,e).clearInstance(n)}function DR(t){return t.options!==void 0}function rt(t){return t.settings!==void 0}function TU(){va.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SU={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new uo("app","Firebase",SU);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU extends OR{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,or(zd,iy,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){S_(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Gn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=wU;function T_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gn.create("bad-app-name",{appName:String(i)});if(n||(n=ER()),!n)throw Gn.create("no-options");const s=Wi.get(i);if(s){if(Fl(n,s.options)&&Fl(r,s.config))return s;throw Gn.create("duplicate-app",{appName:i})}const o=new RR(i);for(const u of va.values())o.addComponent(u);const a=new OR(n,r,o);return Wi.set(i,a),a}function PU(t,e){if(IR())throw Gn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;DR(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,d)=>Math.imul(31,h)+d.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Gn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=ya.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new RR(s);for(const c of va.values())a.addComponent(c);const u=new AU(n,e,s,a);return ya.set(s,u),u}function RU(t=Gi){const e=Wi.get(t);if(!e&&t===Gi&&ER())return T_();if(!e)throw Gn.create("no-app",{appName:t});return e}function CU(){return Array.from(Wi.values())}async function S_(t){let e=!1;const n=t.name;Wi.has(n)?(e=!0,Wi.delete(n)):ya.has(n)&&t.decRefCount()<=0&&(ya.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function or(t,e,n){var r;let i=(r=EU[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hs.warn(a.join(" "));return}Hi(new Cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function VR(t,e){if(t!==null&&typeof t!="function")throw Gn.create("invalid-log-argument");VF(t,e)}function LR(t){OF(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kU="firebase-heartbeat-database",bU=1,$l="firebase-heartbeat-store";let Um=null;function MR(){return Um||(Um=qF(kU,bU,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($l)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),Um}async function xU(t){try{const n=(await MR()).transaction($l),r=await n.objectStore($l).get(FR(t));return await n.done,r}catch(e){if(e instanceof on)Hs.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hs.warn(n.message)}}}async function KI(t,e){try{const r=(await MR()).transaction($l,"readwrite");await r.objectStore($l).put(e,FR(t)),await r.done}catch(n){if(n instanceof on)Hs.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hs.warn(r.message)}}}function FR(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NU=1024,DU=30*24*60*60*1e3;class OU{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LU(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=QI();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=DU}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=QI(),{heartbeatsToSend:r,unsentEntries:i}=VU(this._heartbeatsCache.heartbeats),s=jd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function QI(){return new Date().toISOString().substring(0,10)}function VU(t,e=NU){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),YI(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),YI(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LU{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ml()?EF().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xU(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return KI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return KI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function YI(t){return jd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MU(t){Hi(new Cr("platform-logger",e=>new HF(e),"PRIVATE")),Hi(new Cr("heartbeat",e=>new OU(e),"PRIVATE")),or(zd,iy,t),or(zd,iy,"esm2017"),or("fire-js","")}MU("");const FU=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:on,SDK_VERSION:os,_DEFAULT_ENTRY_NAME:Gi,_addComponent:Ul,_addOrOverwriteComponent:xR,_apps:Wi,_clearComponents:TU,_components:va,_getProvider:NR,_isFirebaseApp:DR,_isFirebaseServerApp:rt,_registerComponent:Hi,_removeServiceInstance:IU,_serverApps:ya,deleteApp:S_,getApp:RU,getApps:CU,initializeApp:T_,initializeServerApp:PU,onLog:VR,registerVersion:or,setLogLevel:LR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e,n){this._delegate=e,this.firebase=n,Ul(e,new Cr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),S_(this._delegate)))}_getService(e,n=Gi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Gi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ul(this._delegate,e)}_addOrOverwriteComponent(e){xR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $U={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},JI=new uo("app-compat","Firebase",$U);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jU(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:or,setLogLevel:LR,onLog:VR,apps:null,SDK_VERSION:os,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:FU}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Gi,!zI(e,c))throw JI.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const d=T_(c,h);if(zI(e,d.name))return e[d.name];const p=new t(d,n);return e[d.name]=p,p}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,d=h.replace("-compat","");if(Hi(c)&&c.type==="PUBLIC"){const p=(g=i())=>{if(typeof g[d]!="function")throw JI.create("invalid-app-argument",{appName:h});return g[d]()};c.serviceProps!==void 0&&Bd(p,c.serviceProps),n[d]=p,t.prototype[d]=function(...g){return this._getService.bind(this,h).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[d]:null}function u(c,h){return h==="serverAuth"?null:h}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){const t=jU(UU);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:UR,extendNamespace:e,createSubscribe:PR,ErrorFactory:uo,deepExtend:Bd});function e(n){Bd(t,n)}return t}const BU=UR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new Hf("@firebase/app-compat"),zU="@firebase/app-compat",qU="0.2.35";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GU(t){or(zU,qU,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(IR()&&self.firebase!==void 0){XI.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&XI.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ri=BU;GU();var WU="firebase",HU="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri.registerVersion(WU,HU,"app-compat");function A_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Nu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ao={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KU(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function $R(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QU=KU,YU=$R,jR=new uo("auth","Firebase",$R());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new Hf("@firebase/auth");function JU(t,...e){qd.logLevel<=pe.WARN&&qd.warn(`Auth (${os}): ${t}`,...e)}function Qh(t,...e){qd.logLevel<=pe.ERROR&&qd.error(`Auth (${os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw R_(t,...e)}function It(t,...e){return R_(t,...e)}function P_(t,e,n){const r=Object.assign(Object.assign({},YU()),{[e]:n});return new uo("auth","Firebase",r).create(e,{appName:t.name})}function kt(t){return P_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ga(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bt(t,"argument-error"),P_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function R_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jR.create(t,...e)}function K(t,e,...n){if(!t)throw R_(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qh(e),new Error(e)}function lr(t,e){t||wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function C_(){return ZI()==="http:"||ZI()==="https:"}function ZI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C_()||TR()||"connection"in navigator)?navigator.onLine:!0}function ZU(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=wF()||w_()}get(){return XU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=new pc(3e4,6e4);function ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function at(t,e,n,r,i={}){return zR(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=qa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),BR.fetch()(qR(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function zR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},e4),e);try{const i=new r4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Gu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Gu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw P_(t,h,c);Bt(t,h)}}catch(i){if(i instanceof on)throw i;Bt(t,"network-request-failed",{message:String(i)})}}async function ii(t,e,n,r,i={}){const s=await at(t,e,n,r,i);return"mfaPendingCredential"in s&&Bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?k_(t.config,i):`${t.config.apiScheme}://${i}`}function n4(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class r4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),t4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){return t!==void 0&&t.getResponse!==void 0}function tT(t){return t!==void 0&&t.enterprise!==void 0}class i4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return n4(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s4(t){return(await at(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function o4(t,e){return at(t,"GET","/v2/recaptchaConfig",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a4(t,e){return at(t,"POST","/v1/accounts:delete",e)}async function u4(t,e){return at(t,"POST","/v1/accounts:update",e)}async function GR(t,e){return at(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function l4(t,e=!1){const n=oe(t),r=await n.getIdToken(e),i=Kf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cl($m(i.auth_time)),issuedAtTime:cl($m(i.iat)),expirationTime:cl($m(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $m(t){return Number(t)*1e3}function Kf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qh("JWT malformed, contained fewer than 3 sections"),null;try{const i=wR(n);return i?JSON.parse(i):(Qh("Failed to decode base64 JWT payload"),null)}catch(i){return Qh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nT(t){const e=Kf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&c4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function c4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xr(t,GR(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?WR(s.providerUserInfo):[],a=f4(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sy(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function d4(t){const e=oe(t);await Bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function WR(t){return t.map(e=>{var{providerId:n}=e,r=A_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p4(t,e){const n=await zR(t,{},async()=>{const r=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qR(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function m4(t,e){return at(t,"POST","/v2/accounts:revokeToken",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=nT(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await p4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ra;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ra,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Br{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=A_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return l4(this,e)}reload(){return d4(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject(kt(this.auth));const e=await this.getIdToken();return await Xr(this,a4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:C,isAnonymous:L,providerData:V,stsTokenManager:v}=n;K(T&&v,e,"internal-error");const y=ra.fromJSON(this.name,v);K(typeof T=="string",e,"internal-error"),gi(d,e.name),gi(p,e.name),K(typeof C=="boolean",e,"internal-error"),K(typeof L=="boolean",e,"internal-error"),gi(g,e.name),gi(I,e.name),gi(A,e.name),gi(k,e.name),gi(E,e.name),gi(_,e.name);const S=new Br({uid:T,auth:e,email:p,emailVerified:C,displayName:d,isAnonymous:L,photoURL:I,phoneNumber:g,tenantId:A,stsTokenManager:y,createdAt:E,lastLoginAt:_});return V&&Array.isArray(V)&&(S.providerData=V.map(P=>Object.assign({},P))),k&&(S._redirectEventId=k),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new ra;i.updateFromServerResponse(n);const s=new Br({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?WR(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ra;a.updateFromIdToken(r);const u=new Br({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sy(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=new Map;function xn(t){lr(t instanceof Function,"Expected a class definition");let e=rT.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rT.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}HR.type="NONE";const _a=HR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e,n){return`firebase:${t}:${e}:${n}`}class ia{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ia(xn(_a),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||xn(_a);const o=Fs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const d=Br._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ia(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ia(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JR(e))return"Blackberry";if(XR(e))return"Webos";if(b_(e))return"Safari";if((e.includes("chrome/")||QR(e))&&!e.includes("edge/"))return"Chrome";if(mc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KR(t=He()){return/firefox\//i.test(t)}function b_(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QR(t=He()){return/crios\//i.test(t)}function YR(t=He()){return/iemobile/i.test(t)}function mc(t=He()){return/android/i.test(t)}function JR(t=He()){return/blackberry/i.test(t)}function XR(t=He()){return/webos/i.test(t)}function Wa(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g4(t=He()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function y4(t=He()){var e;return Wa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function v4(){return SR()&&document.documentMode===10}function ZR(t=He()){return Wa(t)||mc(t)||XR(t)||JR(t)||/windows phone/i.test(t)||YR(t)}function _4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e=[]){let n;switch(t){case"Browser":n=iT(He());break;case"Worker":n=`${iT(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E4(t,e={}){return at(t,"GET","/v2/passwordPolicy",ot(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=6;class T4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:I4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sT(this),this.idTokenSubscription=new sT(this),this.beforeStateQueue=new w4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ia.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await GR(this,{idToken:e}),r=await Br._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZU()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rt(this.app))return Promise.reject(kt(this));const n=e?oe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rt(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await E4(this),n=new T4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await m4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ia.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JU(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function it(t){return oe(t)}class sT{constructor(e){this.auth=e,this.observer=null,this.addObserver=PR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A4(t){gc=t}function x_(t){return gc.loadJS(t)}function P4(){return gc.recaptchaV2Script}function R4(){return gc.recaptchaEnterpriseScript}function C4(){return gc.gapiScript}function tC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const k4="recaptcha-enterprise",b4="NO_RECAPTCHA";class x4{constructor(e){this.type=k4,this.auth=it(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{o4(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new i4(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;tT(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(b4)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&tT(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=R4();u.length!==0&&(u+=a),x_(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function oT(t,e,n,r=!1){const i=new x4(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await oT(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await oT(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function N4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function D4(t,e,n){const r=it(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nC(e),{host:o,port:a}=O4(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||V4()}function nC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function O4(t){const e=nC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:aT(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:aT(o)}}}function aT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t,e){return at(t,"POST","/v1/accounts:resetPassword",ot(t,e))}async function L4(t,e){return at(t,"POST","/v1/accounts:update",e)}async function M4(t,e){return at(t,"POST","/v1/accounts:signUp",e)}async function F4(t,e){return at(t,"POST","/v1/accounts:update",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U4(t,e){return ii(t,"POST","/v1/accounts:signInWithPassword",ot(t,e))}async function Qf(t,e){return at(t,"POST","/v1/accounts:sendOobCode",ot(t,e))}async function $4(t,e){return Qf(t,e)}async function j4(t,e){return Qf(t,e)}async function B4(t,e){return Qf(t,e)}async function z4(t,e){return Qf(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q4(t,e){return ii(t,"POST","/v1/accounts:signInWithEmailLink",ot(t,e))}async function G4(t,e){return ii(t,"POST","/v1/accounts:signInWithEmailLink",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Ha{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ql(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ql(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zl(e,n,"signInWithPassword",U4);case"emailLink":return q4(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zl(e,r,"signUpPassword",M4);case"emailLink":return G4(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return ii(t,"POST","/v1/accounts:signInWithIdp",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4="http://localhost";class kr extends Ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=A_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new kr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:W4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H4(t,e){return at(t,"POST","/v1/accounts:sendVerificationCode",ot(t,e))}async function K4(t,e){return ii(t,"POST","/v1/accounts:signInWithPhoneNumber",ot(t,e))}async function Q4(t,e){const n=await ii(t,"POST","/v1/accounts:signInWithPhoneNumber",ot(t,e));if(n.temporaryProof)throw Gu(t,"account-exists-with-different-credential",n);return n}const Y4={USER_NOT_FOUND:"user-not-found"};async function J4(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ii(t,"POST","/v1/accounts:signInWithPhoneNumber",ot(t,n),Y4)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Ha{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Us({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Us({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return K4(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Q4(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return J4(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Us({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z4(t){const e=Ko(qu(t)).link,n=e?Ko(qu(e)).deep_link_id:null,r=Ko(qu(t)).deep_link_id;return(r?Ko(qu(r)).link:null)||r||n||e||t}class Yf{constructor(e){var n,r,i,s,o,a;const u=Ko(qu(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,d=X4((i=u.mode)!==null&&i!==void 0?i:null);K(c&&h&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Z4(e);try{return new Yf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,n){return ql._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yf.parseLink(n);return K(r,"argument-error"),ql._fromEmailAndCode(e,r.code,r.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends si{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class sa extends Ka{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return K("providerId"in n&&"signInMethod"in n,"argument-error"),kr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return K(e.idToken||e.accessToken,"argument-error"),kr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return sa.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return sa.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new sa(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ka{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ka{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e3="http://localhost";class wa extends Ha{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new wa(r,s)}static _create(e,n){return new wa(e,n)}buildRequest(){return{requestUri:e3,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t3="saml.";class Gd extends si{constructor(e){K(e.startsWith(t3),"argument-error"),super(e)}static credentialFromResult(e){return Gd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Gd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=wa.fromJSON(e);return K(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return wa._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ka{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,e){return ii(t,"POST","/v1/accounts:signUp",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Br._fromIdTokenResponse(e,r,i),o=uT(r);return new Kn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=uT(r);return new Kn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function uT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n3(t){var e;if(rt(t.app))return Promise.reject(kt(t));const n=it(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Kn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await iC(n,{returnSecureToken:!0}),i=await Kn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends on{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wd(e,n,r,i)}}function sC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wd._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r3(t,e){const n=oe(t);await Jf(!0,n,e);const{providerUserInfo:r}=await u4(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=oC(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function N_(t,e,n=!1){const r=await Xr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kn._forOperation(t,"link",r)}async function Jf(t,e,n){await Bl(e);const r=oC(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";K(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e,n=!1){const{auth:r}=t;if(rt(r.app))return Promise.reject(kt(r));const i="reauthenticate";try{const s=await Xr(t,sC(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Kf(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),Kn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e,n=!1){if(rt(t.app))return Promise.reject(kt(t));const r="signIn",i=await sC(t,r,e),s=await Kn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Xf(t,e){return uC(it(t),e)}async function lC(t,e){const n=oe(t);return await Jf(!1,n,e.providerId),N_(n,e)}async function cC(t,e){return aC(oe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i3(t,e){return ii(t,"POST","/v1/accounts:signInWithCustomToken",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s3(t,e){if(rt(t.app))return Promise.reject(kt(t));const n=it(t),r=await i3(n,{token:e,returnSecureToken:!0}),i=await Kn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?D_._fromServerResponse(e,n):"totpInfo"in n?O_._fromServerResponse(e,n):Bt(e,"internal-error")}}class D_ extends yc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new D_(n)}}class O_ extends yc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new O_(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t,e,n){var r;K(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),K(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(K(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(K(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(t){const e=it(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function o3(t,e,n){const r=it(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Zf(r,i,n),await zl(r,i,"getOobCode",j4)}async function a3(t,e,n){await rC(oe(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&V_(t),r})}async function u3(t,e){await F4(oe(t),{oobCode:e})}async function hC(t,e){const n=oe(t),r=await rC(n,{oobCode:e}),i=r.requestType;switch(K(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":K(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":K(r.mfaInfo,n,"internal-error");default:K(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=yc._fromServerResponse(it(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function l3(t,e){const{data:n}=await hC(oe(t),e);return n.email}async function c3(t,e,n){if(rt(t.app))return Promise.reject(kt(t));const r=it(t),o=await zl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&V_(t),u}),a=await Kn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function h3(t,e,n){return rt(t.app)?Promise.reject(kt(t)):Xf(oe(t),as.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&V_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d3(t,e,n){const r=it(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){K(a.handleCodeInApp,r,"argument-error"),a&&Zf(r,o,a)}s(i,n),await zl(r,i,"getOobCode",B4)}function f3(t,e){const n=Yf.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function p3(t,e,n){if(rt(t.app))return Promise.reject(kt(t));const r=oe(t),i=as.credentialWithLink(e,n||jl());return K(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Xf(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m3(t,e){return at(t,"POST","/v1/accounts:createAuthUri",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g3(t,e){const n=C_()?jl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await m3(oe(t),r);return i||[]}async function y3(t,e){const n=oe(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Zf(n.auth,i,e);const{email:s}=await $4(n.auth,i);s!==t.email&&await t.reload()}async function v3(t,e,n){const r=oe(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Zf(r.auth,s,n);const{email:o}=await z4(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _3(t,e){return at(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w3(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=oe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Xr(r,_3(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function E3(t,e){const n=oe(t);return rt(n.auth.app)?Promise.reject(kt(n.auth)):dC(n,e,null)}function I3(t,e){return dC(oe(t),null,e)}async function dC(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Xr(t,L4(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T3(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Kf(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new oa(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new S3(s,i);case"github.com":return new A3(s,i);case"google.com":return new P3(s,i);case"twitter.com":return new R3(s,i,t.screenName||null);case"custom":case"anonymous":return new oa(s,null);default:return new oa(s,r,i)}}class oa{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class fC extends oa{constructor(e,n,r,i){super(e,n,r),this.username=i}}class S3 extends oa{constructor(e,n){super(e,"facebook.com",n)}}class A3 extends fC{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class P3 extends oa{constructor(e,n){super(e,"google.com",n)}}class R3 extends fC{constructor(e,n,r){super(e,"twitter.com",n,r)}}function C3(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:T3(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new xs("enroll",e,n)}static _fromMfaPendingCredential(e){return new xs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return xs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return xs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=it(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>yc._fromServerResponse(r,a));K(i.mfaPendingCredential,r,"internal-error");const o=xs._fromMfaPendingCredential(i.mfaPendingCredential);return new L_(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const h=await Kn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return K(n.user,r,"internal-error"),Kn._forOperation(n.user,n.operationType,c);default:Bt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function k3(t,e){var n;const r=oe(t),i=e;return K(e.customData.operationType,r,"argument-error"),K((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),L_._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:start",ot(t,e))}function x3(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:finalize",ot(t,e))}function N3(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ot(t,e))}class M_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>yc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new M_(e)}async getSession(){return xs._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Xr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Xr(this.user,N3(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const jm=new WeakMap;function D3(t){const e=oe(t);return jm.has(e)||jm.set(e,M_._fromUser(e)),jm.get(e)}const Hd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hd,"1"),this.storage.removeItem(Hd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O3(){const t=He();return b_(t)||Wa(t)}const V3=1e3,L3=10;class mC extends pC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=O3()&&_4(),this.fallbackToPolling=ZR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);v4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,L3):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},V3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mC.type="LOCAL";const F_=mC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC extends pC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gC.type="SESSION";const Ks=gC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M3(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ep(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await M3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ep.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=vc("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function U3(t){mt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function $3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j3(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function B3(){return U_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="firebaseLocalStorageDb",z3=1,Kd="firebaseLocalStorage",vC="fbase_key";class _c{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tp(t,e){return t.transaction([Kd],e?"readwrite":"readonly").objectStore(Kd)}function q3(){const t=indexedDB.deleteDatabase(yC);return new _c(t).toPromise()}function oy(){const t=indexedDB.open(yC,z3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kd,{keyPath:vC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kd)?e(r):(r.close(),await q3(),e(await oy()))})})}async function lT(t,e,n){const r=tp(t,!0).put({[vC]:e,value:n});return new _c(r).toPromise()}async function G3(t,e){const n=tp(t,!1).get(e),r=await new _c(n).toPromise();return r===void 0?null:r.value}function cT(t,e){const n=tp(t,!0).delete(e);return new _c(n).toPromise()}const W3=800,H3=3;class _C{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oy(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>H3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ep._getInstance(B3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $3(),!this.activeServiceWorker)return;this.sender=new F3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oy();return await lT(e,Hd,"1"),await cT(e,Hd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lT(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>G3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tp(i,!1).getAll();return new _c(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_C.type="LOCAL";const Gl=_C;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K3(t,e){return at(t,"POST","/v2/accounts/mfaSignIn:start",ot(t,e))}function Q3(t,e){return at(t,"POST","/v2/accounts/mfaSignIn:finalize",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y3=500,J3=6e4,yh=1e12;class X3{constructor(e){this.auth=e,this.counter=yh,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Z3(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||yh;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||yh;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||yh;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Z3{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;K(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=e$(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},J3)},Y3))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function e$(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=tC("rcb"),t$=new pc(3e4,6e4);class n${constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=mt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return K(r$(n),e,"argument-error"),this.shouldResolveImmediately(n)&&eT(mt().grecaptcha)?Promise.resolve(mt().grecaptcha):new Promise((r,i)=>{const s=mt().setTimeout(()=>{i(It(e,"network-request-failed"))},t$.get());mt()[Bm]=()=>{mt().clearTimeout(s),delete mt()[Bm];const a=mt().grecaptcha;if(!a||!eT(a)){i(It(e,"internal-error"));return}const u=a.render;a.render=(c,h)=>{const d=u(c,h);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${P4()}?${qa({onload:Bm,render:"explicit",hl:n})}`;x_(o).catch(()=>{clearTimeout(s),i(It(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=mt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function r$(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class i${async load(e){return new X3(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="recaptcha",s$={theme:"light",type:"image"};let o$=class{constructor(e,n,r=Object.assign({},s$)){this.parameters=r,this.type=wC,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=it(e),this.isInvisible=this.parameters.size==="invisible",K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;K(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new i$:new n$,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){K(!this.parameters.sitekey,this.auth,"argument-error"),K(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=mt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){K(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){K(C_()&&!U_(),this.auth,"internal-error"),await a$(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await s4(this.auth);K(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return K(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function a$(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Us._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function u$(t,e,n){if(rt(t.app))return Promise.reject(kt(t));const r=it(t),i=await np(r,e,oe(n));return new $_(i,s=>Xf(r,s))}async function l$(t,e,n){const r=oe(t);await Jf(!1,r,"phone");const i=await np(r.auth,e,oe(n));return new $_(i,s=>lC(r,s))}async function c$(t,e,n){const r=oe(t);if(rt(r.auth.app))return Promise.reject(kt(r.auth));const i=await np(r.auth,e,oe(n));return new $_(i,s=>cC(r,s))}async function np(t,e,n){var r;const i=await n.verify();try{K(typeof i=="string",t,"argument-error"),K(n.type===wC,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return K(o.type==="enroll",t,"internal-error"),(await b3(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{K(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return K(a,t,"missing-multi-factor-info"),(await K3(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await H4(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function h$(t,e){const n=oe(t);if(rt(n.auth.app))return Promise.reject(kt(n.auth));await N_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs=class Yh{constructor(e){this.providerId=Yh.PROVIDER_ID,this.auth=it(e)}verifyPhoneNumber(e,n){return np(this.auth,e,oe(n))}static credential(e,n){return Us._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Yh.credentialFromTaggedObject(n)}static credentialFromError(e){return Yh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Us._fromTokenResponse(n,r):null}};Qs.PROVIDER_ID="phone";Qs.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t,e){return e?xn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_ extends Ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function d$(t){return uC(t.auth,new j_(t),t.bypassAuthState)}function f$(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),aC(n,new j_(t),t.bypassAuthState)}async function p$(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),N_(n,new j_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d$;case"linkViaPopup":case"linkViaRedirect":return p$;case"reauthViaPopup":case"reauthViaRedirect":return f$;default:Bt(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m$=new pc(2e3,1e4);async function g$(t,e,n){if(rt(t.app))return Promise.reject(It(t,"operation-not-supported-in-this-environment"));const r=it(t);Ga(t,e,si);const i=lo(r,n);return new zr(r,"signInViaPopup",e,i).executeNotNull()}async function y$(t,e,n){const r=oe(t);if(rt(r.auth.app))return Promise.reject(It(r.auth,"operation-not-supported-in-this-environment"));Ga(r.auth,e,si);const i=lo(r.auth,n);return new zr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function v$(t,e,n){const r=oe(t);Ga(r.auth,e,si);const i=lo(r.auth,n);return new zr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class zr extends EC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m$.get())};e()}}zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _$="pendingRedirect",hl=new Map;class w$ extends EC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const r=await E$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return this.bypassAuthState||hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E$(t,e){const n=TC(e),r=IC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function B_(t,e){return IC(t)._set(TC(e),"true")}function I$(){hl.clear()}function z_(t,e){hl.set(t._key(),e)}function IC(t){return xn(t._redirectPersistence)}function TC(t){return Fs(_$,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T$(t,e,n){return S$(t,e,n)}async function S$(t,e,n){if(rt(t.app))return Promise.reject(kt(t));const r=it(t);Ga(t,e,si),await r._initializationPromise;const i=lo(r,n);return await B_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function A$(t,e,n){return P$(t,e,n)}async function P$(t,e,n){const r=oe(t);if(Ga(r.auth,e,si),rt(r.auth.app))return Promise.reject(kt(r.auth));await r.auth._initializationPromise;const i=lo(r.auth,n);await B_(i,r.auth);const s=await SC(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function R$(t,e,n){return C$(t,e,n)}async function C$(t,e,n){const r=oe(t);Ga(r.auth,e,si),await r.auth._initializationPromise;const i=lo(r.auth,n);await Jf(!1,r,e.providerId),await B_(i,r.auth);const s=await SC(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function k$(t,e){return await it(t)._initializationPromise,rp(t,e,!1)}async function rp(t,e,n=!1){if(rt(t.app))return Promise.reject(kt(t));const r=it(t),i=lo(r,e),o=await new w$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function SC(t){const e=vc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b$=10*60*1e3;class AC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!PC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=b$&&this.cachedEventUids.clear(),this.cachedEventUids.has(hT(e))}saveEventToCache(e){this.cachedEventUids.add(hT(e)),this.lastProcessedEventTime=Date.now()}}function hT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function PC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function x$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e={}){return at(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D$=/^https?/;async function O$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RC(t);for(const n of e)try{if(V$(n))return}catch{}Bt(t,"unauthorized-domain")}function V$(t){const e=jl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!D$.test(n))return!1;if(N$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L$=new pc(3e4,6e4);function dT(){const t=mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function M$(t){return new Promise((e,n)=>{var r,i,s;function o(){dT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dT(),n(It(t,"network-request-failed"))},timeout:L$.get()})}if(!((i=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mt().gapi)===null||s===void 0)&&s.load)o();else{const a=tC("iframefcb");return mt()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},x_(`${C4()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Jh=null,e})}let Jh=null;function F$(t){return Jh=Jh||M$(t),Jh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$=new pc(5e3,15e3),$$="__/auth/iframe",j$="emulator/auth/iframe",B$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function q$(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k_(e,j$):`https://${t.config.authDomain}/${$$}`,r={apiKey:e.apiKey,appName:t.name,v:os},i=z$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qa(r).slice(1)}`}async function G$(t){const e=await F$(t),n=mt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:q$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:B$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=mt().setTimeout(()=>{s(o)},U$.get());function u(){mt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H$=500,K$=600,Q$="_blank",Y$="http://localhost";class fT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function J$(t,e,n,r=H$,i=K$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},W$),{width:r.toString(),height:i.toString(),top:s,left:o}),c=He().toLowerCase();n&&(a=QR(c)?Q$:n),KR(c)&&(e=e||Y$,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(y4(c)&&a!=="_self")return X$(e||"",a),new fT(null);const d=window.open(e||"",a,h);K(d,t,"popup-blocked");try{d.focus()}catch{}return new fT(d)}function X$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z$="__/auth/handler",e9="emulator/auth/handler",t9=encodeURIComponent("fac");async function ay(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:i};if(e instanceof si){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",AF(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof Ka){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${t9}=${encodeURIComponent(u)}`:"";return`${n9(t)}?${qa(a).slice(1)}${c}`}function n9({config:t}){return t.emulator?k_(t,e9):`https://${t.authDomain}/${Z$}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="webStorageSupport";class r9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ks,this._completeRedirectFn=rp,this._overrideRedirectResult=z_}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ay(e,n,r,jl(),i);return J$(e,o,vc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ay(e,n,r,jl(),i);return U3(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await G$(e),r=new AC(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zm,{type:zm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zm];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=O$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZR()||b_()||Wa()}}const i9=r9;class s9{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return wr("unexpected MultiFactorSessionType")}}}class q_ extends s9{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new q_(e)}_finalizeEnroll(e,n,r){return x3(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Q3(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class CC{constructor(){}static assertion(e){return q_._fromCredential(e)}}CC.FACTOR_ID="phone";var pT="@firebase/auth",mT="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a9(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function u9(t){Hi(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eC(t)},c=new S4(r,i,s,u);return N4(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hi(new Cr("auth-internal",e=>{const n=it(e.getProvider("auth").getImmediate());return(r=>new o9(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(pT,mT,a9(t)),or(pT,mT,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l9=5*60;yF("authIdTokenMaxAge");function c9(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}A4({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",c9().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});u9("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h9=2e3;async function d9(t,e,n){var r;const{BuildInfo:i}=Ys();lr(e.sessionId,"AuthEvent did not contain a session ID");const s=await y9(e.sessionId),o={};return Wa()?o.ibi=i.packageName:mc()?o.apn=i.packageName:Bt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,ay(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function f9(t){const{BuildInfo:e}=Ys(),n={};Wa()?n.iosBundleId=e.packageName:mc()?n.androidPackageName=e.packageName:Bt(t,"operation-not-supported-in-this-environment"),await RC(t,n)}function p9(t){const{cordova:e}=Ys();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,g4()?"_blank":"_system","location=yes"),n(i)})})}async function m9(t,e,n){const{cordova:r}=Ys();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var d;s();const p=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof p=="function"&&p(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(It(t,"redirect-cancelled-by-user"))},h9))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),mc()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function g9(t){var e,n,r,i,s,o,a,u,c,h;const d=Ys();K(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),K(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),K(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),K(typeof((u=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),K(typeof((h=(c=d==null?void 0:d.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function y9(t){const e=v9(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function v9(t){if(lr(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _9=20;class w9 extends AC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function E9(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:S9(),postBody:null,tenantId:t.tenantId,error:It(t,"no-auth-event")}}function I9(t,e){return uy()._set(ly(t),e)}async function gT(t){const e=await uy()._get(ly(t));return e&&await uy()._remove(ly(t)),e}function T9(t,e){var n,r;const i=P9(e);if(i.includes("/__/auth/callback")){const s=Xh(i),o=s.firebaseError?A9(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?It(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function S9(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<_9;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function uy(){return xn(F_)}function ly(t){return Fs("authEvent",t.config.apiKey,t.name)}function A9(t){try{return JSON.parse(t)}catch{return null}}function P9(t){const e=Xh(t),n=e.link?decodeURIComponent(e.link):void 0,r=Xh(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Xh(i).link||i||r||n||t}function Xh(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ko(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R9=500;class C9{constructor(){this._redirectPersistence=Ks,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=rp,this._overrideRedirectResult=z_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new w9(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Bt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){g9(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),I$(),await this._originValidation(e);const o=E9(e,r,i);await I9(e,o);const a=await d9(e,o,n),u=await p9(a);return m9(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=f9(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ys(),o=setTimeout(async()=>{await gT(e),n.onEvent(yT())},R9),a=async h=>{clearTimeout(o);const d=await gT(e);let p=null;d&&(h!=null&&h.url)&&(p=T9(d,h.url)),n.onEvent(p||yT())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;Ys().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof u=="function")try{u(h)}catch(d){console.error(d)}}}}const k9=C9;function yT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:It("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b9(t,e){it(t)._logFramework(e)}var x9="@firebase/auth-compat",N9="0.5.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D9=1e3;function dl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function O9(){return dl()==="http:"||dl()==="https:"}function kC(t=He()){return!!((dl()==="file:"||dl()==="ionic:"||dl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function V9(){return w_()||__()}function L9(){return SR()&&(document==null?void 0:document.documentMode)===11}function M9(t=He()){return/Edge\/\d+/.test(t)}function F9(t=He()){return L9()||M9(t)}function bC(){try{const t=self.localStorage,e=vc();if(t)return t.setItem(e,"1"),t.removeItem(e),F9()?Ml():!0}catch{return G_()&&Ml()}return!1}function G_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function qm(){return(O9()||TR()||kC())&&!V9()&&bC()&&!G_()}function xC(){return kC()&&typeof document<"u"}async function U9(){return xC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},D9);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function $9(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={LOCAL:"local",NONE:"none",SESSION:"session"},Du=K,NC="persistence";function j9(t,e){if(Du(Object.values(kn).includes(e),t,"invalid-persistence-type"),w_()){Du(e!==kn.SESSION,t,"unsupported-persistence-type");return}if(__()){Du(e===kn.NONE,t,"unsupported-persistence-type");return}if(G_()){Du(e===kn.NONE||e===kn.LOCAL&&Ml(),t,"unsupported-persistence-type");return}Du(e===kn.NONE||bC(),t,"unsupported-persistence-type")}async function cy(t){await t._initializationPromise;const e=DC(),n=Fs(NC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function B9(t,e){const n=DC();if(!n)return[];const r=Fs(NC,t,e);switch(n.getItem(r)){case kn.NONE:return[_a];case kn.LOCAL:return[Gl,Ks];case kn.SESSION:return[Ks];default:return[]}}function DC(){var t;try{return((t=$9())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z9=K;class ki{constructor(){this.browserResolver=xn(i9),this.cordovaResolver=xn(k9),this.underlyingResolver=null,this._redirectPersistence=Ks,this._completeRedirectFn=rp,this._overrideRedirectResult=z_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return xC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return z9(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await U9();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){return t.unwrap()}function q9(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G9(t){return VC(t)}function W9(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new H9(t,k3(t,e))}else if(r){const i=VC(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function VC(t){const{_tokenResponse:e}=t instanceof on?t.customData:t;if(!e)return null;if(!(t instanceof on)&&"temporaryProof"in e&&"phoneNumber"in e)return Qs.credentialFromResult(t);const n=e.providerId;if(!n||n===Nu.PASSWORD)return null;let r;switch(n){case Nu.GOOGLE:r=yr;break;case Nu.FACEBOOK:r=gr;break;case Nu.GITHUB:r=vr;break;case Nu.TWITTER:r=_r;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?wa._create(n,a):kr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new sa(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof on?r.credentialFromError(t):r.credentialFromResult(t)}function mn(t,e){return e.catch(n=>{throw n instanceof on&&W9(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:G9(n),additionalUserInfo:C3(n),user:ip.getOrCreate(i)}})}async function hy(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>mn(t,n.confirm(r))}}class H9{constructor(e,n){this.resolver=n,this.auth=q9(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return mn(OC(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ip=class Wu{constructor(e){this._delegate=e,this.multiFactor=D3(e)}static getOrCreate(e){return Wu.USER_MAP.has(e)||Wu.USER_MAP.set(e,new Wu(e)),Wu.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return mn(this.auth,lC(this._delegate,e))}async linkWithPhoneNumber(e,n){return hy(this.auth,l$(this._delegate,e,n))}async linkWithPopup(e){return mn(this.auth,v$(this._delegate,e,ki))}async linkWithRedirect(e){return await cy(it(this.auth)),R$(this._delegate,e,ki)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return mn(this.auth,cC(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return hy(this.auth,c$(this._delegate,e,n))}reauthenticateWithPopup(e){return mn(this.auth,y$(this._delegate,e,ki))}async reauthenticateWithRedirect(e){return await cy(it(this.auth)),A$(this._delegate,e,ki)}sendEmailVerification(e){return y3(this._delegate,e)}async unlink(e){return await r3(this._delegate,e),this}updateEmail(e){return E3(this._delegate,e)}updatePassword(e){return I3(this._delegate,e)}updatePhoneNumber(e){return h$(this._delegate,e)}updateProfile(e){return w3(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return v3(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};ip.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=K;class dy{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ou(r,"invalid-api-key",{appName:e.name}),Ou(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ki:void 0;this._delegate=n.initialize({options:{persistence:K9(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(QU),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ip.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){D4(this._delegate,e,n)}applyActionCode(e){return u3(this._delegate,e)}checkActionCode(e){return hC(this._delegate,e)}confirmPasswordReset(e,n){return a3(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return mn(this._delegate,c3(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return g3(this._delegate,e)}isSignInWithEmailLink(e){return f3(this._delegate,e)}async getRedirectResult(){Ou(qm(),this._delegate,"operation-not-supported-in-this-environment");const e=await k$(this._delegate,ki);return e?mn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){b9(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=vT(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=vT(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return d3(this._delegate,e,n)}sendPasswordResetEmail(e,n){return o3(this._delegate,e,n||void 0)}async setPersistence(e){j9(this._delegate,e);let n;switch(e){case kn.SESSION:n=Ks;break;case kn.LOCAL:n=await xn(Gl)._isAvailable()?Gl:F_;break;case kn.NONE:n=_a;break;default:return Bt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return mn(this._delegate,n3(this._delegate))}signInWithCredential(e){return mn(this._delegate,Xf(this._delegate,e))}signInWithCustomToken(e){return mn(this._delegate,s3(this._delegate,e))}signInWithEmailAndPassword(e,n){return mn(this._delegate,h3(this._delegate,e,n))}signInWithEmailLink(e,n){return mn(this._delegate,p3(this._delegate,e,n))}signInWithPhoneNumber(e,n){return hy(this._delegate,u$(this._delegate,e,n))}async signInWithPopup(e){return Ou(qm(),this._delegate,"operation-not-supported-in-this-environment"),mn(this._delegate,g$(this._delegate,e,ki))}async signInWithRedirect(e){return Ou(qm(),this._delegate,"operation-not-supported-in-this-environment"),await cy(this._delegate),T$(this._delegate,e,ki)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return l3(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}dy.Persistence=kn;function vT(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&ip.getOrCreate(o)),error:e,complete:n}}function K9(t,e){const n=B9(t,e);if(typeof self<"u"&&!n.includes(Gl)&&n.push(Gl),typeof window<"u")for(const r of[F_,Ks])n.includes(r)||n.push(r);return n.includes(_a)||n.push(_a),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.providerId="phone",this._delegate=new Qs(OC(ri.auth()))}static credential(e,n){return Qs.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}W_.PHONE_SIGN_IN_METHOD=Qs.PHONE_SIGN_IN_METHOD;W_.PROVIDER_ID=Qs.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q9=K;class Y9{constructor(e,n,r=ri.app()){var i;Q9((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new o$(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J9="auth-compat";function X9(t){t.INTERNAL.registerComponent(new Cr(J9,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new dy(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ao.EMAIL_SIGNIN,PASSWORD_RESET:Ao.PASSWORD_RESET,RECOVER_EMAIL:Ao.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ao.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ao.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ao.VERIFY_EMAIL}},EmailAuthProvider:as,FacebookAuthProvider:gr,GithubAuthProvider:vr,GoogleAuthProvider:yr,OAuthProvider:sa,SAMLAuthProvider:Gd,PhoneAuthProvider:W_,PhoneMultiFactorGenerator:CC,RecaptchaVerifier:Y9,TwitterAuthProvider:_r,Auth:dy,AuthCredential:Ha,Error:on}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(x9,N9)}X9(ri);var _T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $s,LC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function S(){}S.prototype=y.prototype,v.D=y.prototype,v.prototype=new S,v.prototype.constructor=v,v.C=function(P,x,O){for(var R=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)R[_e-2]=arguments[_e];return y.prototype[x].apply(P,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,S){S||(S=0);var P=Array(16);if(typeof y=="string")for(var x=0;16>x;++x)P[x]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(x=0;16>x;++x)P[x]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=v.g[0],S=v.g[1],x=v.g[2];var O=v.g[3],R=y+(O^S&(x^O))+P[0]+3614090360&4294967295;y=S+(R<<7&4294967295|R>>>25),R=O+(x^y&(S^x))+P[1]+3905402710&4294967295,O=y+(R<<12&4294967295|R>>>20),R=x+(S^O&(y^S))+P[2]+606105819&4294967295,x=O+(R<<17&4294967295|R>>>15),R=S+(y^x&(O^y))+P[3]+3250441966&4294967295,S=x+(R<<22&4294967295|R>>>10),R=y+(O^S&(x^O))+P[4]+4118548399&4294967295,y=S+(R<<7&4294967295|R>>>25),R=O+(x^y&(S^x))+P[5]+1200080426&4294967295,O=y+(R<<12&4294967295|R>>>20),R=x+(S^O&(y^S))+P[6]+2821735955&4294967295,x=O+(R<<17&4294967295|R>>>15),R=S+(y^x&(O^y))+P[7]+4249261313&4294967295,S=x+(R<<22&4294967295|R>>>10),R=y+(O^S&(x^O))+P[8]+1770035416&4294967295,y=S+(R<<7&4294967295|R>>>25),R=O+(x^y&(S^x))+P[9]+2336552879&4294967295,O=y+(R<<12&4294967295|R>>>20),R=x+(S^O&(y^S))+P[10]+4294925233&4294967295,x=O+(R<<17&4294967295|R>>>15),R=S+(y^x&(O^y))+P[11]+2304563134&4294967295,S=x+(R<<22&4294967295|R>>>10),R=y+(O^S&(x^O))+P[12]+1804603682&4294967295,y=S+(R<<7&4294967295|R>>>25),R=O+(x^y&(S^x))+P[13]+4254626195&4294967295,O=y+(R<<12&4294967295|R>>>20),R=x+(S^O&(y^S))+P[14]+2792965006&4294967295,x=O+(R<<17&4294967295|R>>>15),R=S+(y^x&(O^y))+P[15]+1236535329&4294967295,S=x+(R<<22&4294967295|R>>>10),R=y+(x^O&(S^x))+P[1]+4129170786&4294967295,y=S+(R<<5&4294967295|R>>>27),R=O+(S^x&(y^S))+P[6]+3225465664&4294967295,O=y+(R<<9&4294967295|R>>>23),R=x+(y^S&(O^y))+P[11]+643717713&4294967295,x=O+(R<<14&4294967295|R>>>18),R=S+(O^y&(x^O))+P[0]+3921069994&4294967295,S=x+(R<<20&4294967295|R>>>12),R=y+(x^O&(S^x))+P[5]+3593408605&4294967295,y=S+(R<<5&4294967295|R>>>27),R=O+(S^x&(y^S))+P[10]+38016083&4294967295,O=y+(R<<9&4294967295|R>>>23),R=x+(y^S&(O^y))+P[15]+3634488961&4294967295,x=O+(R<<14&4294967295|R>>>18),R=S+(O^y&(x^O))+P[4]+3889429448&4294967295,S=x+(R<<20&4294967295|R>>>12),R=y+(x^O&(S^x))+P[9]+568446438&4294967295,y=S+(R<<5&4294967295|R>>>27),R=O+(S^x&(y^S))+P[14]+3275163606&4294967295,O=y+(R<<9&4294967295|R>>>23),R=x+(y^S&(O^y))+P[3]+4107603335&4294967295,x=O+(R<<14&4294967295|R>>>18),R=S+(O^y&(x^O))+P[8]+1163531501&4294967295,S=x+(R<<20&4294967295|R>>>12),R=y+(x^O&(S^x))+P[13]+2850285829&4294967295,y=S+(R<<5&4294967295|R>>>27),R=O+(S^x&(y^S))+P[2]+4243563512&4294967295,O=y+(R<<9&4294967295|R>>>23),R=x+(y^S&(O^y))+P[7]+1735328473&4294967295,x=O+(R<<14&4294967295|R>>>18),R=S+(O^y&(x^O))+P[12]+2368359562&4294967295,S=x+(R<<20&4294967295|R>>>12),R=y+(S^x^O)+P[5]+4294588738&4294967295,y=S+(R<<4&4294967295|R>>>28),R=O+(y^S^x)+P[8]+2272392833&4294967295,O=y+(R<<11&4294967295|R>>>21),R=x+(O^y^S)+P[11]+1839030562&4294967295,x=O+(R<<16&4294967295|R>>>16),R=S+(x^O^y)+P[14]+4259657740&4294967295,S=x+(R<<23&4294967295|R>>>9),R=y+(S^x^O)+P[1]+2763975236&4294967295,y=S+(R<<4&4294967295|R>>>28),R=O+(y^S^x)+P[4]+1272893353&4294967295,O=y+(R<<11&4294967295|R>>>21),R=x+(O^y^S)+P[7]+4139469664&4294967295,x=O+(R<<16&4294967295|R>>>16),R=S+(x^O^y)+P[10]+3200236656&4294967295,S=x+(R<<23&4294967295|R>>>9),R=y+(S^x^O)+P[13]+681279174&4294967295,y=S+(R<<4&4294967295|R>>>28),R=O+(y^S^x)+P[0]+3936430074&4294967295,O=y+(R<<11&4294967295|R>>>21),R=x+(O^y^S)+P[3]+3572445317&4294967295,x=O+(R<<16&4294967295|R>>>16),R=S+(x^O^y)+P[6]+76029189&4294967295,S=x+(R<<23&4294967295|R>>>9),R=y+(S^x^O)+P[9]+3654602809&4294967295,y=S+(R<<4&4294967295|R>>>28),R=O+(y^S^x)+P[12]+3873151461&4294967295,O=y+(R<<11&4294967295|R>>>21),R=x+(O^y^S)+P[15]+530742520&4294967295,x=O+(R<<16&4294967295|R>>>16),R=S+(x^O^y)+P[2]+3299628645&4294967295,S=x+(R<<23&4294967295|R>>>9),R=y+(x^(S|~O))+P[0]+4096336452&4294967295,y=S+(R<<6&4294967295|R>>>26),R=O+(S^(y|~x))+P[7]+1126891415&4294967295,O=y+(R<<10&4294967295|R>>>22),R=x+(y^(O|~S))+P[14]+2878612391&4294967295,x=O+(R<<15&4294967295|R>>>17),R=S+(O^(x|~y))+P[5]+4237533241&4294967295,S=x+(R<<21&4294967295|R>>>11),R=y+(x^(S|~O))+P[12]+1700485571&4294967295,y=S+(R<<6&4294967295|R>>>26),R=O+(S^(y|~x))+P[3]+2399980690&4294967295,O=y+(R<<10&4294967295|R>>>22),R=x+(y^(O|~S))+P[10]+4293915773&4294967295,x=O+(R<<15&4294967295|R>>>17),R=S+(O^(x|~y))+P[1]+2240044497&4294967295,S=x+(R<<21&4294967295|R>>>11),R=y+(x^(S|~O))+P[8]+1873313359&4294967295,y=S+(R<<6&4294967295|R>>>26),R=O+(S^(y|~x))+P[15]+4264355552&4294967295,O=y+(R<<10&4294967295|R>>>22),R=x+(y^(O|~S))+P[6]+2734768916&4294967295,x=O+(R<<15&4294967295|R>>>17),R=S+(O^(x|~y))+P[13]+1309151649&4294967295,S=x+(R<<21&4294967295|R>>>11),R=y+(x^(S|~O))+P[4]+4149444226&4294967295,y=S+(R<<6&4294967295|R>>>26),R=O+(S^(y|~x))+P[11]+3174756917&4294967295,O=y+(R<<10&4294967295|R>>>22),R=x+(y^(O|~S))+P[2]+718787259&4294967295,x=O+(R<<15&4294967295|R>>>17),R=S+(O^(x|~y))+P[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,v.g[2]=v.g[2]+x&4294967295,v.g[3]=v.g[3]+O&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var S=y-this.blockSize,P=this.B,x=this.h,O=0;O<y;){if(x==0)for(;O<=S;)i(this,v,O),O+=this.blockSize;if(typeof v=="string"){for(;O<y;)if(P[x++]=v.charCodeAt(O++),x==this.blockSize){i(this,P),x=0;break}}else for(;O<y;)if(P[x++]=v[O++],x==this.blockSize){i(this,P),x=0;break}}this.h=x,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var S=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=S&255,S/=256;for(this.u(v),v=Array(16),y=S=0;4>y;++y)for(var P=0;32>P;P+=8)v[S++]=this.g[y]>>>P&255;return v};function s(v,y){var S=a;return Object.prototype.hasOwnProperty.call(S,v)?S[v]:S[v]=y(v)}function o(v,y){this.h=y;for(var S=[],P=!0,x=v.length-1;0<=x;x--){var O=v[x]|0;P&&O==y||(S[x]=O,P=!1)}this.g=S}var a={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return d;if(0>v)return k(c(-v));for(var y=[],S=1,P=0;v>=S;P++)y[P]=v/S|0,S*=4294967296;return new o(y,0)}function h(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return k(h(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),P=d,x=0;x<v.length;x+=8){var O=Math.min(8,v.length-x),R=parseInt(v.substring(x,x+O),y);8>O?(O=c(Math.pow(y,O)),P=P.j(O).add(c(R))):(P=P.j(S),P=P.add(c(R)))}return P}var d=u(0),p=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-k(this).m();for(var v=0,y=1,S=0;S<this.g.length;S++){var P=this.i(S);v+=(0<=P?P:4294967296+P)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I(this))return"0";if(A(this))return"-"+k(this).toString(v);for(var y=c(Math.pow(v,6)),S=this,P="";;){var x=C(S,y).g;S=E(S,x.j(y));var O=((0<S.g.length?S.g[0]:S.h)>>>0).toString(v);if(S=x,I(S))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function I(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function A(v){return v.h==-1}t.l=function(v){return v=E(this,v),A(v)?-1:I(v)?0:1};function k(v){for(var y=v.g.length,S=[],P=0;P<y;P++)S[P]=~v.g[P];return new o(S,~v.h).add(p)}t.abs=function(){return A(this)?k(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),S=[],P=0,x=0;x<=y;x++){var O=P+(this.i(x)&65535)+(v.i(x)&65535),R=(O>>>16)+(this.i(x)>>>16)+(v.i(x)>>>16);P=R>>>16,O&=65535,R&=65535,S[x]=R<<16|O}return new o(S,S[S.length-1]&-2147483648?-1:0)};function E(v,y){return v.add(k(y))}t.j=function(v){if(I(this)||I(v))return d;if(A(this))return A(v)?k(this).j(k(v)):k(k(this).j(v));if(A(v))return k(this.j(k(v)));if(0>this.l(g)&&0>v.l(g))return c(this.m()*v.m());for(var y=this.g.length+v.g.length,S=[],P=0;P<2*y;P++)S[P]=0;for(P=0;P<this.g.length;P++)for(var x=0;x<v.g.length;x++){var O=this.i(P)>>>16,R=this.i(P)&65535,_e=v.i(x)>>>16,he=v.i(x)&65535;S[2*P+2*x]+=R*he,_(S,2*P+2*x),S[2*P+2*x+1]+=O*he,_(S,2*P+2*x+1),S[2*P+2*x+1]+=R*_e,_(S,2*P+2*x+1),S[2*P+2*x+2]+=O*_e,_(S,2*P+2*x+2)}for(P=0;P<y;P++)S[P]=S[2*P+1]<<16|S[2*P];for(P=y;P<2*y;P++)S[P]=0;return new o(S,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function T(v,y){this.g=v,this.h=y}function C(v,y){if(I(y))throw Error("division by zero");if(I(v))return new T(d,d);if(A(v))return y=C(k(v),y),new T(k(y.g),k(y.h));if(A(y))return y=C(v,k(y)),new T(k(y.g),y.h);if(30<v.g.length){if(A(v)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var S=p,P=y;0>=P.l(v);)S=L(S),P=L(P);var x=V(S,1),O=V(P,1);for(P=V(P,2),S=V(S,2);!I(P);){var R=O.add(P);0>=R.l(v)&&(x=x.add(S),O=R),P=V(P,1),S=V(S,1)}return y=E(v,x.j(y)),new T(x,y)}for(x=d;0<=v.l(y);){for(S=Math.max(1,Math.floor(v.m()/y.m())),P=Math.ceil(Math.log(S)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=c(S),R=O.j(y);A(R)||0<R.l(v);)S-=P,O=c(S),R=O.j(y);I(O)&&(O=p),x=x.add(O),v=E(v,R)}return new T(x,v)}t.A=function(v){return C(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),S=[],P=0;P<y;P++)S[P]=this.i(P)&v.i(P);return new o(S,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),S=[],P=0;P<y;P++)S[P]=this.i(P)|v.i(P);return new o(S,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),S=[],P=0;P<y;P++)S[P]=this.i(P)^v.i(P);return new o(S,this.h^v.h)};function L(v){for(var y=v.g.length+1,S=[],P=0;P<y;P++)S[P]=v.i(P)<<1|v.i(P-1)>>>31;return new o(S,v.h)}function V(v,y){var S=y>>5;y%=32;for(var P=v.g.length-S,x=[],O=0;O<P;O++)x[O]=0<y?v.i(O+S)>>>y|v.i(O+S+1)<<32-y:v.i(O+S);return new o(x,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,LC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,$s=o}).apply(typeof _T<"u"?_T:typeof self<"u"?self:typeof window<"u"?window:{});var vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var MC,FC,Hu,UC,Zh,fy,$C,jC,BC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof vh=="object"&&vh];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var m=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in m))break e;m=m[M]}l=l[l.length-1],w=m[l],f=f(w),f!=w&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var m=0,w=!1,M={next:function(){if(!w&&m<l.length){var $=m++;return{value:f($,l[$]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,m){return l.call.apply(l.bind,arguments)}function d(l,f,m){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function p(l,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function I(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(w,M,$){for(var Q=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)Q[xe-2]=arguments[xe];return f.prototype[M].apply(w,Q)}}function A(l){const f=l.length;if(0<f){const m=Array(f);for(let w=0;w<f;w++)m[w]=l[w];return m}return[]}function k(l,f){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(u(w)){const M=l.length||0,$=w.length||0;l.length=M+$;for(let Q=0;Q<$;Q++)l[M+Q]=w[Q]}else l.push(w)}}class E{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function _(l){return/^[\s\xa0]*$/.test(l)}function T(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function C(l){return C[" "](l),l}C[" "]=function(){};var L=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function V(l,f,m){for(const w in l)f.call(m,l[w],w,l)}function v(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function y(l){const f={};for(const m in l)f[m]=l[m];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let m,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(m in w)l[m]=w[m];for(let $=0;$<S.length;$++)m=S[$],Object.prototype.hasOwnProperty.call(w,m)&&(l[m]=w[m])}}function x(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function O(l){a.setTimeout(()=>{throw l},0)}function R(){var l=q;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class _e{constructor(){this.h=this.g=null}add(f,m){const w=he.get();w.set(f,m),this.h?this.h.next=w:this.g=w,this.h=w}}var he=new E(()=>new ft,l=>l.reset());class ft{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,W=!1,q=new _e,B=()=>{const l=a.Promise.resolve(void 0);Ne=()=>{l.then(b)}};var b=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){O(m)}var f=he;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}W=!1};function N(){this.s=this.s,this.C=this.C}N.prototype.s=!1,N.prototype.ma=function(){this.s||(this.s=!0,this.N())},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function Y(l,f){if(D.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(L){e:{try{C(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Z[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Y.aa.h.call(this)}}I(Y,D);var Z={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),se=0;function Te(l,f,m,w,M){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!w,this.ha=M,this.key=++se,this.da=this.fa=!1}function $e(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function je(l){this.src=l,this.g={},this.h=0}je.prototype.add=function(l,f,m,w,M){var $=l.toString();l=this.g[$],l||(l=this.g[$]=[],this.h++);var Q=ut(l,f,w,M);return-1<Q?(f=l[Q],m||(f.fa=!1)):(f=new Te(f,this.src,$,!!w,M),f.fa=m,l.push(f)),f};function de(l,f){var m=f.type;if(m in l.g){var w=l.g[m],M=Array.prototype.indexOf.call(w,f,void 0),$;($=0<=M)&&Array.prototype.splice.call(w,M,1),$&&($e(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function ut(l,f,m,w){for(var M=0;M<l.length;++M){var $=l[M];if(!$.da&&$.listener==f&&$.capture==!!m&&$.ha==w)return M}return-1}var Se="closure_lm_"+(1e6*Math.random()|0),Jn={};function Fn(l,f,m,w,M){if(Array.isArray(f)){for(var $=0;$<f.length;$++)Fn(l,f[$],m,w,M);return null}return m=Vc(m),l&&l[te]?l.K(f,m,c(w)?!!w.capture:!!w,M):Ke(l,f,m,!1,w,M)}function Ke(l,f,m,w,M,$){if(!f)throw Error("Invalid event type");var Q=c(M)?!!M.capture:!!M,xe=yo(l);if(xe||(l[Se]=xe=new je(l)),m=xe.add(f,m,w,Q,$),m.proxy)return m;if(w=li(),m.proxy=w,w.src=l,w.listener=m,l.addEventListener)j||(M=Q),M===void 0&&(M=!1),l.addEventListener(f.toString(),w,M);else if(l.attachEvent)l.attachEvent(go(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function li(){function l(m){return f.call(l.src,l.listener,m)}const f=Un;return l}function ci(l,f,m,w,M){if(Array.isArray(f))for(var $=0;$<f.length;$++)ci(l,f[$],m,w,M);else w=c(w)?!!w.capture:!!w,m=Vc(m),l&&l[te]?(l=l.i,f=String(f).toString(),f in l.g&&($=l.g[f],m=ut($,m,w,M),-1<m&&($e($[m]),Array.prototype.splice.call($,m,1),$.length==0&&(delete l.g[f],l.h--)))):l&&(l=yo(l))&&(f=l.g[f.toString()],l=-1,f&&(l=ut(f,m,w,M)),(m=-1<l?f[l]:null)&&Xn(m))}function Xn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[te])de(f.i,l);else{var m=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(m,w,l.capture):f.detachEvent?f.detachEvent(go(m),w):f.addListener&&f.removeListener&&f.removeListener(w),(m=yo(f))?(de(m,l),m.h==0&&(m.src=null,f[Se]=null)):$e(l)}}}function go(l){return l in Jn?Jn[l]:Jn[l]="on"+l}function Un(l,f){if(l.da)l=!0;else{f=new Y(f,this);var m=l.listener,w=l.ha||l.src;l.fa&&Xn(l),l=m.call(w,f)}return l}function yo(l){return l=l[Se],l instanceof je?l:null}var ou="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vc(l){return typeof l=="function"?l:(l[ou]||(l[ou]=function(f){return l.handleEvent(f)}),l[ou])}function Ze(){N.call(this),this.i=new je(this),this.M=this,this.F=null}I(Ze,N),Ze.prototype[te]=!0,Ze.prototype.removeEventListener=function(l,f,m,w){ci(this,l,f,m,w)};function lt(l,f){var m,w=l.F;if(w)for(m=[];w;w=w.F)m.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new D(f,l);else if(f instanceof D)f.target=f.target||l;else{var M=f;f=new D(w,l),P(f,M)}if(M=!0,m)for(var $=m.length-1;0<=$;$--){var Q=f.g=m[$];M=hi(Q,w,!0,f)&&M}if(Q=f.g=l,M=hi(Q,w,!0,f)&&M,M=hi(Q,w,!1,f)&&M,m)for($=0;$<m.length;$++)Q=f.g=m[$],M=hi(Q,w,!1,f)&&M}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],w=0;w<m.length;w++)$e(m[w]);delete l.g[f],l.h--}}this.F=null},Ze.prototype.K=function(l,f,m,w){return this.i.add(String(l),f,!1,m,w)},Ze.prototype.L=function(l,f,m,w){return this.i.add(String(l),f,!0,m,w)};function hi(l,f,m,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,$=0;$<f.length;++$){var Q=f[$];if(Q&&!Q.da&&Q.capture==m){var xe=Q.listener,Ot=Q.ha||Q.src;Q.fa&&de(l.i,Q),M=xe.call(Ot,w)!==!1&&M}}return M&&!w.defaultPrevented}function vo(l,f,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function _o(l){l.g=vo(()=>{l.g=null,l.i&&(l.i=!1,_o(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class au extends N{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:_o(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(l){N.call(this),this.h=l,this.g={}}I(ds,N);var Lc=[];function Mc(l){V(l.g,function(f,m){this.g.hasOwnProperty(m)&&Xn(f)},l),l.g={}}ds.prototype.N=function(){ds.aa.N.call(this),Mc(this)},ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uu=a.JSON.stringify,Mp=a.JSON.parse,zx=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Fp(){}Fp.prototype.h=null;function nE(l){return l.h||(l.h=l.i())}function rE(){}var lu={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Up(){D.call(this,"d")}I(Up,D);function $p(){D.call(this,"c")}I($p,D);var fs={},iE=null;function Fc(){return iE=iE||new Ze}fs.La="serverreachability";function sE(l){D.call(this,fs.La,l)}I(sE,D);function cu(l){const f=Fc();lt(f,new sE(f))}fs.STAT_EVENT="statevent";function oE(l,f){D.call(this,fs.STAT_EVENT,l),this.stat=f}I(oE,D);function Jt(l){const f=Fc();lt(f,new oE(f,l))}fs.Ma="timingevent";function aE(l,f){D.call(this,fs.Ma,l),this.size=f}I(aE,D);function hu(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function du(){this.g=!0}du.prototype.xa=function(){this.g=!1};function qx(l,f,m,w,M,$){l.info(function(){if(l.g)if($)for(var Q="",xe=$.split("&"),Ot=0;Ot<xe.length;Ot++){var Ie=xe[Ot].split("=");if(1<Ie.length){var zt=Ie[0];Ie=Ie[1];var qt=zt.split("_");Q=2<=qt.length&&qt[1]=="type"?Q+(zt+"="+Ie+"&"):Q+(zt+"=redacted&")}}else Q=null;else Q=$;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+f+`
`+m+`
`+Q})}function Gx(l,f,m,w,M,$,Q){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+f+`
`+m+`
`+$+" "+Q})}function wo(l,f,m,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Hx(l,m)+(w?" "+w:"")})}function Wx(l,f){l.info(function(){return"TIMEOUT: "+f})}du.prototype.info=function(){};function Hx(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var w=m[l];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var Q=1;Q<M.length;Q++)M[Q]=""}}}}return uu(m)}catch{return f}}var Uc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uE={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jp;function $c(){}I($c,Fp),$c.prototype.g=function(){return new XMLHttpRequest},$c.prototype.i=function(){return{}},jp=new $c;function di(l,f,m,w){this.j=l,this.i=f,this.l=m,this.R=w||1,this.U=new ds(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lE}function lE(){this.i=null,this.g="",this.h=!1}var cE={},Bp={};function zp(l,f,m){l.L=1,l.v=qc(Dr(f)),l.m=m,l.P=!0,hE(l,null)}function hE(l,f){l.F=Date.now(),jc(l),l.A=Dr(l.v);var m=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),AE(m.i,"t",w),l.C=0,m=l.j.J,l.h=new lE,l.g=zE(l.j,m?f:null,!l.m),0<l.O&&(l.M=new au(p(l.Y,l,l.g),l.O)),f=l.U,m=l.g,w=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Lc[0]=M.toString()),M=Lc);for(var $=0;$<M.length;$++){var Q=Fn(m,M[$],w||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),cu(),qx(l.i,l.u,l.A,l.l,l.R,l.m)}di.prototype.ca=function(l){l=l.target;const f=this.M;f&&Or(l)==3?f.j():this.Y(l)},di.prototype.Y=function(l){try{if(l==this.g)e:{const qt=Or(this.g);var f=this.g.Ba();const To=this.g.Z();if(!(3>qt)&&(qt!=3||this.g&&(this.h.h||this.g.oa()||NE(this.g)))){this.J||qt!=4||f==7||(f==8||0>=To?cu(3):cu(2)),qp(this);var m=this.g.Z();this.X=m;t:if(dE(this)){var w=NE(this.g);l="";var M=w.length,$=Or(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ps(this),fu(this);var Q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!($&&f==M-1)});w.length=0,this.h.g+=l,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,Gx(this.i,this.u,this.A,this.l,this.R,qt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,Ot=this.g;if((xe=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(xe)){var Ie=xe;break t}}Ie=null}if(m=Ie)wo(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gp(this,m);else{this.o=!1,this.s=3,Jt(12),ps(this),fu(this);break e}}if(this.P){m=!0;let Zn;for(;!this.J&&this.C<Q.length;)if(Zn=Kx(this,Q),Zn==Bp){qt==4&&(this.s=4,Jt(14),m=!1),wo(this.i,this.l,null,"[Incomplete Response]");break}else if(Zn==cE){this.s=4,Jt(15),wo(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else wo(this.i,this.l,Zn,null),Gp(this,Zn);if(dE(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qt!=4||Q.length!=0||this.h.h||(this.s=1,Jt(16),m=!1),this.o=this.o&&m,!m)wo(this.i,this.l,Q,"[Invalid Chunked Response]"),ps(this),fu(this);else if(0<Q.length&&!this.W){this.W=!0;var zt=this.j;zt.g==this&&zt.ba&&!zt.M&&(zt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Jp(zt),zt.M=!0,Jt(11))}}else wo(this.i,this.l,Q,null),Gp(this,Q);qt==4&&ps(this),this.o&&!this.J&&(qt==4?UE(this.j,this):(this.o=!1,jc(this)))}else hN(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Jt(12)):(this.s=0,Jt(13)),ps(this),fu(this)}}}catch{}finally{}};function dE(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Kx(l,f){var m=l.C,w=f.indexOf(`
`,m);return w==-1?Bp:(m=Number(f.substring(m,w)),isNaN(m)?cE:(w+=1,w+m>f.length?Bp:(f=f.slice(w,w+m),l.C=w+m,f)))}di.prototype.cancel=function(){this.J=!0,ps(this)};function jc(l){l.S=Date.now()+l.I,fE(l,l.I)}function fE(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=hu(p(l.ba,l),f)}function qp(l){l.B&&(a.clearTimeout(l.B),l.B=null)}di.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Wx(this.i,this.A),this.L!=2&&(cu(),Jt(17)),ps(this),this.s=2,fu(this)):fE(this,this.S-l)};function fu(l){l.j.G==0||l.J||UE(l.j,l)}function ps(l){qp(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Mc(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Gp(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||Wp(m.h,l))){if(!l.K&&Wp(m.h,l)&&m.G==3){try{var w=m.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Qc(m),Hc(m);else break e;Yp(m),Jt(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=hu(p(m.Za,m),6e3));if(1>=gE(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else gs(m,11)}else if((l.K||m.g==l)&&Qc(m),!_(f))for(M=m.Da.g.parse(f),f=0;f<M.length;f++){let Ie=M[f];if(m.T=Ie[0],Ie=Ie[1],m.G==2)if(Ie[0]=="c"){m.K=Ie[1],m.ia=Ie[2];const zt=Ie[3];zt!=null&&(m.la=zt,m.j.info("VER="+m.la));const qt=Ie[4];qt!=null&&(m.Aa=qt,m.j.info("SVER="+m.Aa));const To=Ie[5];To!=null&&typeof To=="number"&&0<To&&(w=1.5*To,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Zn=l.g;if(Zn){const Jc=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jc){var $=w.h;$.g||Jc.indexOf("spdy")==-1&&Jc.indexOf("quic")==-1&&Jc.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Hp($,$.h),$.h=null))}if(w.D){const Xp=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Xp&&(w.ya=Xp,Ve(w.I,w.D,Xp))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var Q=l;if(w.qa=BE(w,w.J?w.ia:null,w.W),Q.K){yE(w.h,Q);var xe=Q,Ot=w.L;Ot&&(xe.I=Ot),xe.B&&(qp(xe),jc(xe)),w.g=Q}else ME(w);0<m.i.length&&Kc(m)}else Ie[0]!="stop"&&Ie[0]!="close"||gs(m,7);else m.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?gs(m,7):Qp(m):Ie[0]!="noop"&&m.l&&m.l.ta(Ie),m.v=0)}}cu(4)}catch{}}var Qx=class{constructor(l,f){this.g=l,this.map=f}};function pE(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mE(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function gE(l){return l.h?1:l.g?l.g.size:0}function Wp(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Hp(l,f){l.g?l.g.add(f):l.h=f}function yE(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}pE.prototype.cancel=function(){if(this.i=vE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function vE(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return A(l.i)}function Yx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],m=l.length,w=0;w<m;w++)f.push(l[w]);return f}f=[],m=0;for(w in l)f[m++]=l[w];return f}function Jx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const w in l)f[m++]=w;return f}}}function _E(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=Jx(l),w=Yx(l),M=w.length,$=0;$<M;$++)f.call(void 0,w[$],m&&m[$],l)}var wE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xx(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var w=l[m].indexOf("="),M=null;if(0<=w){var $=l[m].substring(0,w);M=l[m].substring(w+1)}else $=l[m];f($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ms(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ms){this.h=l.h,Bc(this,l.j),this.o=l.o,this.g=l.g,zc(this,l.s),this.l=l.l;var f=l.i,m=new gu;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),EE(this,m),this.m=l.m}else l&&(f=String(l).match(wE))?(this.h=!1,Bc(this,f[1]||"",!0),this.o=pu(f[2]||""),this.g=pu(f[3]||"",!0),zc(this,f[4]),this.l=pu(f[5]||"",!0),EE(this,f[6]||"",!0),this.m=pu(f[7]||"")):(this.h=!1,this.i=new gu(null,this.h))}ms.prototype.toString=function(){var l=[],f=this.j;f&&l.push(mu(f,IE,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(mu(f,IE,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(mu(m,m.charAt(0)=="/"?tN:eN,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",mu(m,rN)),l.join("")};function Dr(l){return new ms(l)}function Bc(l,f,m){l.j=m?pu(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function zc(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function EE(l,f,m){f instanceof gu?(l.i=f,iN(l.i,l.h)):(m||(f=mu(f,nN)),l.i=new gu(f,l.h))}function Ve(l,f,m){l.i.set(f,m)}function qc(l){return Ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function pu(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function mu(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,Zx),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Zx(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var IE=/[#\/\?@]/g,eN=/[#\?:]/g,tN=/[#\?]/g,nN=/[#\?@]/g,rN=/#/g;function gu(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function fi(l){l.g||(l.g=new Map,l.h=0,l.i&&Xx(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=gu.prototype,t.add=function(l,f){fi(this),this.i=null,l=Eo(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function TE(l,f){fi(l),f=Eo(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function SE(l,f){return fi(l),f=Eo(l,f),l.g.has(f)}t.forEach=function(l,f){fi(this),this.g.forEach(function(m,w){m.forEach(function(M){l.call(f,M,w,this)},this)},this)},t.na=function(){fi(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let w=0;w<f.length;w++){const M=l[w];for(let $=0;$<M.length;$++)m.push(f[w])}return m},t.V=function(l){fi(this);let f=[];if(typeof l=="string")SE(this,l)&&(f=f.concat(this.g.get(Eo(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},t.set=function(l,f){return fi(this),this.i=null,l=Eo(this,l),SE(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function AE(l,f,m){TE(l,f),0<m.length&&(l.i=null,l.g.set(Eo(l,f),A(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var w=f[m];const $=encodeURIComponent(String(w)),Q=this.V(w);for(w=0;w<Q.length;w++){var M=$;Q[w]!==""&&(M+="="+encodeURIComponent(String(Q[w]))),l.push(M)}}return this.i=l.join("&")};function Eo(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function iN(l,f){f&&!l.j&&(fi(l),l.i=null,l.g.forEach(function(m,w){var M=w.toLowerCase();w!=M&&(TE(this,w),AE(this,M,m))},l)),l.j=f}function sN(l,f){const m=new du;if(a.Image){const w=new Image;w.onload=g(pi,m,"TestLoadImage: loaded",!0,f,w),w.onerror=g(pi,m,"TestLoadImage: error",!1,f,w),w.onabort=g(pi,m,"TestLoadImage: abort",!1,f,w),w.ontimeout=g(pi,m,"TestLoadImage: timeout",!1,f,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function oN(l,f){const m=new du,w=new AbortController,M=setTimeout(()=>{w.abort(),pi(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then($=>{clearTimeout(M),$.ok?pi(m,"TestPingServer: ok",!0,f):pi(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),pi(m,"TestPingServer: error",!1,f)})}function pi(l,f,m,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(m)}catch{}}function aN(){this.g=new zx}function uN(l,f,m){const w=m||"";try{_E(l,function(M,$){let Q=M;c(M)&&(Q=uu(M)),f.push(w+$+"="+encodeURIComponent(Q))})}catch(M){throw f.push(w+"type="+encodeURIComponent("_badmap")),M}}function yu(l){this.l=l.Ub||null,this.j=l.eb||!1}I(yu,Fp),yu.prototype.g=function(){return new Gc(this.l,this.j)},yu.prototype.i=function(l){return function(){return l}}({});function Gc(l,f){Ze.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Gc,Ze),t=Gc.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,_u(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vu(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,_u(this)),this.g&&(this.readyState=3,_u(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;PE(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function PE(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?vu(this):_u(this),this.readyState==3&&PE(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,vu(this))},t.Qa=function(l){this.g&&(this.response=l,vu(this))},t.ga=function(){this.g&&vu(this)};function vu(l){l.readyState=4,l.l=null,l.j=null,l.v=null,_u(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function _u(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function RE(l){let f="";return V(l,function(m,w){f+=w,f+=":",f+=m,f+=`\r
`}),f}function Kp(l,f,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=RE(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ve(l,f,m))}function et(l){Ze.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(et,Ze);var lN=/^https?$/i,cN=["POST","PUT"];t=et.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jp.g(),this.v=this.o?nE(this.o):nE(jp),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch($){CE(this,$);return}if(l=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)m.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const $ of w.keys())m.set($,w.get($));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find($=>$.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(cN,f,void 0))||w||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,Q]of m)this.g.setRequestHeader($,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xE(this),this.u=!0,this.g.send(l),this.u=!1}catch($){CE(this,$)}};function CE(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,kE(l),Wc(l)}function kE(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),Wc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wc(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?bE(this):this.bb())},t.bb=function(){bE(this)};function bE(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Or(l)!=4||l.Z()!=2)){if(l.u&&Or(l)==4)vo(l.Ea,0,l);else if(lt(l,"readystatechange"),Or(l)==4){l.h=!1;try{const Q=l.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var w;if(w=Q===0){var M=String(l.D).match(wE)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),w=!lN.test(M?M.toLowerCase():"")}m=w}if(m)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var $=2<Or(l)?l.g.statusText:""}catch{$=""}l.l=$+" ["+l.Z()+"]",kE(l)}}finally{Wc(l)}}}}function Wc(l,f){if(l.g){xE(l);const m=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{m.onreadystatechange=w}catch{}}}function xE(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Or(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Or(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Mp(f)}};function NE(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function hN(l){const f={};l=(l.g&&2<=Or(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(_(l[w]))continue;var m=x(l[w]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const $=f[M]||[];f[M]=$,$.push(m)}v(f,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wu(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function DE(l){this.Aa=0,this.i=[],this.j=new du,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wu("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wu("baseRetryDelayMs",5e3,l),this.cb=wu("retryDelaySeedMs",1e4,l),this.Wa=wu("forwardChannelMaxRetries",2,l),this.wa=wu("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new pE(l&&l.concurrentRequestLimit),this.Da=new aN,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=DE.prototype,t.la=8,t.G=1,t.connect=function(l,f,m,w){Jt(0),this.W=l,this.H=f||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=BE(this,null,this.W),Kc(this)};function Qp(l){if(OE(l),l.G==3){var f=l.U++,m=Dr(l.I);if(Ve(m,"SID",l.K),Ve(m,"RID",f),Ve(m,"TYPE","terminate"),Eu(l,m),f=new di(l,l.j,f),f.L=2,f.v=qc(Dr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=zE(f.j,null),f.g.ea(f.v)),f.F=Date.now(),jc(f)}jE(l)}function Hc(l){l.g&&(Jp(l),l.g.cancel(),l.g=null)}function OE(l){Hc(l),l.u&&(a.clearTimeout(l.u),l.u=null),Qc(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Kc(l){if(!mE(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ne||B(),W||(Ne(),W=!0),q.add(f,l),l.B=0}}function dN(l,f){return gE(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=hu(p(l.Ga,l,f),$E(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new di(this,this.j,l);let $=this.o;if(this.S&&($?($=y($),P($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=LE(this,M,f),m=Dr(this.I),Ve(m,"RID",l),Ve(m,"CVER",22),this.D&&Ve(m,"X-HTTP-Session-Id",this.D),Eu(this,m),$&&(this.O?f="headers="+encodeURIComponent(String(RE($)))+"&"+f:this.m&&Kp(m,this.m,$)),Hp(this.h,M),this.Ua&&Ve(m,"TYPE","init"),this.P?(Ve(m,"$req",f),Ve(m,"SID","null"),M.T=!0,zp(M,m,null)):zp(M,m,f),this.G=2}}else this.G==3&&(l?VE(this,l):this.i.length==0||mE(this.h)||VE(this))};function VE(l,f){var m;f?m=f.l:m=l.U++;const w=Dr(l.I);Ve(w,"SID",l.K),Ve(w,"RID",m),Ve(w,"AID",l.T),Eu(l,w),l.m&&l.o&&Kp(w,l.m,l.o),m=new di(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=LE(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Hp(l.h,m),zp(m,w,f)}function Eu(l,f){l.H&&V(l.H,function(m,w){Ve(f,w,m)}),l.l&&_E({},function(m,w){Ve(f,w,m)})}function LE(l,f,m){m=Math.min(l.i.length,m);var w=l.l?p(l.l.Na,l.l,l):null;e:{var M=l.i;let $=-1;for(;;){const Q=["count="+m];$==-1?0<m?($=M[0].g,Q.push("ofs="+$)):$=0:Q.push("ofs="+$);let xe=!0;for(let Ot=0;Ot<m;Ot++){let Ie=M[Ot].g;const zt=M[Ot].map;if(Ie-=$,0>Ie)$=Math.max(0,M[Ot].g-100),xe=!1;else try{uN(zt,Q,"req"+Ie+"_")}catch{w&&w(zt)}}if(xe){w=Q.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,w}function ME(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ne||B(),W||(Ne(),W=!0),q.add(f,l),l.v=0}}function Yp(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=hu(p(l.Fa,l),$E(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,FE(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=hu(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Jt(10),Hc(this),FE(this))};function Jp(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function FE(l){l.g=new di(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Dr(l.qa);Ve(f,"RID","rpc"),Ve(f,"SID",l.K),Ve(f,"AID",l.T),Ve(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ve(f,"TO",l.ja),Ve(f,"TYPE","xmlhttp"),Eu(l,f),l.m&&l.o&&Kp(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=qc(Dr(f)),m.m=null,m.P=!0,hE(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Hc(this),Yp(this),Jt(19))};function Qc(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function UE(l,f){var m=null;if(l.g==f){Qc(l),Jp(l),l.g=null;var w=2}else if(Wp(l.h,f))m=f.D,yE(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;w=Fc(),lt(w,new aE(w,m)),Kc(l)}else ME(l);else if(M=f.s,M==3||M==0&&0<f.X||!(w==1&&dN(l,f)||w==2&&Yp(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),M){case 1:gs(l,5);break;case 4:gs(l,10);break;case 3:gs(l,6);break;default:gs(l,2)}}}function $E(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function gs(l,f){if(l.j.info("Error code "+f),f==2){var m=p(l.fb,l),w=l.Xa;const M=!w;w=new ms(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Bc(w,"https"),qc(w),M?sN(w.toString(),m):oN(w.toString(),m)}else Jt(2);l.G=0,l.l&&l.l.sa(f),jE(l),OE(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Jt(2)):(this.j.info("Failed to ping google.com"),Jt(1))};function jE(l){if(l.G=0,l.ka=[],l.l){const f=vE(l.h);(f.length!=0||l.i.length!=0)&&(k(l.ka,f),k(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function BE(l,f,m){var w=m instanceof ms?Dr(m):new ms(m);if(w.g!="")f&&(w.g=f+"."+w.g),zc(w,w.s);else{var M=a.location;w=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var $=new ms(null);w&&Bc($,w),f&&($.g=f),M&&zc($,M),m&&($.l=m),w=$}return m=l.D,f=l.ya,m&&f&&Ve(w,m,f),Ve(w,"VER",l.la),Eu(l,w),w}function zE(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new et(new yu({eb:m})):new et(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qE(){}t=qE.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yc(){}Yc.prototype.g=function(l,f){return new Pn(l,f)};function Pn(l,f){Ze.call(this),this.g=new DE(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!_(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Io(this)}I(Pn,Ze),Pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pn.prototype.close=function(){Qp(this.g)},Pn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=uu(l),l=m);f.i.push(new Qx(f.Ya++,l)),f.G==3&&Kc(f)},Pn.prototype.N=function(){this.g.l=null,delete this.j,Qp(this.g),delete this.g,Pn.aa.N.call(this)};function GE(l){Up.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}I(GE,Up);function WE(){$p.call(this),this.status=1}I(WE,$p);function Io(l){this.g=l}I(Io,qE),Io.prototype.ua=function(){lt(this.g,"a")},Io.prototype.ta=function(l){lt(this.g,new GE(l))},Io.prototype.sa=function(l){lt(this.g,new WE)},Io.prototype.ra=function(){lt(this.g,"b")},Yc.prototype.createWebChannel=Yc.prototype.g,Pn.prototype.send=Pn.prototype.o,Pn.prototype.open=Pn.prototype.m,Pn.prototype.close=Pn.prototype.close,BC=function(){return new Yc},jC=function(){return Fc()},$C=fs,fy={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Uc.NO_ERROR=0,Uc.TIMEOUT=8,Uc.HTTP_ERROR=6,Zh=Uc,uE.COMPLETE="complete",UC=uE,rE.EventType=lu,lu.OPEN="a",lu.CLOSE="b",lu.ERROR="c",lu.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,Hu=rE,FC=yu,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,MC=et}).apply(typeof vh<"u"?vh:typeof self<"u"?self:typeof window<"u"?window:{});const wT="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Hf("@firebase/firestore");function xo(){return Ki.logLevel}function Z9(t){Ki.setLogLevel(t)}function G(t,...e){if(Ki.logLevel<=pe.DEBUG){const n=e.map(H_);Ki.debug(`Firestore (${Qa}): ${t}`,...n)}}function ht(t,...e){if(Ki.logLevel<=pe.ERROR){const n=e.map(H_);Ki.error(`Firestore (${Qa}): ${t}`,...n)}}function cr(t,...e){if(Ki.logLevel<=pe.WARN){const n=e.map(H_);Ki.warn(`Firestore (${Qa}): ${t}`,...n)}}function H_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Qa}) INTERNAL ASSERTION FAILED: `+t;throw ht(e),new Error(e)}function re(t,e){t||ee()}function ej(t,e){t||ee()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class nj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rj{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new zC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Pt(e)}}class ij{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sj{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ij(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aj{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.R=n.token,new oj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=uj(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Ea(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function GC(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new We(0,0))}static max(){return new ie(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Wl{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const lj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Wl{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return lj.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(ge.fromString(e))}static fromName(e){return new J(ge.fromString(e).popFirst(5))}static empty(){return new J(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new ge(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function py(t){return t.fields.find(e=>e.kind===2)}function Es(t){return t.fields.filter(e=>e.kind!==2)}Qd.UNKNOWN_ID=-1;class ed{constructor(e,n){this.fieldPath=e,this.kind=n}}class Hl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Hl(0,On.min())}}function WC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new On(i,J.empty(),e)}function HC(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new On(ie.min(),J.empty(),-1)}static max(){return new On(ie.max(),J.empty(),-1)}}function K_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==KC)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new bt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new fl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Q_(r.target.error);this.V.reject(new fl(e,i))}}static open(e,n,r,i){try{return new sp(n,e.transaction(i,r))}catch(s){throw new fl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(G("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new hj(n)}}class Ar{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Ar.S(He())===12.2&&ht("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return G("SimpleDb","Removing database:",e),Ts(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ml())return!1;if(Ar.C())return!0;const e=He(),n=Ar.S(e),r=0<n&&n<10,i=YC(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(G("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new fl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new z(U.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new z(U.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new fl(e,o))},i.onupgradeneeded=s=>{G("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{G("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=sp.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),F.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(G("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function YC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class cj{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ts(this.B.delete())}}class fl extends z{constructor(e,n){super(U.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ls(t){return t.name==="IndexedDbTransactionError"}class hj{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(G("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(G("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ts(r)}add(e){return G("SimpleDb","ADD",this.store.name,e,e),Ts(this.store.add(e))}get(e){return Ts(this.store.get(e)).next(n=>(n===void 0&&(n=null),G("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return G("SimpleDb","DELETE",this.store.name,e),Ts(this.store.delete(e))}count(){return G("SimpleDb","COUNT",this.store.name),Ts(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new F((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new F((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){G("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new F((r,i)=>{n.onerror=s=>{const o=Q_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new F((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new cj(a),c=n(a.primaryKey,a.value,u);if(c instanceof F){const h=c.catch(d=>(u.done(),F.reject(d)));r.push(h)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>F.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ts(t){return new F((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Q_(r.target.error);n(i)}})}let ET=!1;function Q_(t){const e=Ar.S(He());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ET||(ET=!0,setTimeout(()=>{throw r},0)),r}}return t}class dj{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){G("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{G("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){ls(n)?G("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await us(n)}await this.X(6e4)})}}class fj{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return F.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return G("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(G("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=HC(s);K_(o,r)>0&&(r=o)}),new On(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_n.oe=-1;function wc(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function JC(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=IT(e)),e=pj(t.get(n),e);return IT(e)}function pj(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function IT(t){return t+""}function Er(t){const e=t.length;if(re(e>=2),e===2)return re(t.charAt(0)===""&&t.charAt(1)===""),ge.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&ee(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:ee()}s=o+2}return new ge(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e){return[t,an(e)]}function XC(t,e,n){return[t,an(e),n]}const mj={},gj=["prefixPath","collectionGroup","readTime","documentId"],yj=["prefixPath","collectionGroup","documentId"],vj=["collectionGroup","readTime","prefixPath","documentId"],_j=["canonicalId","targetId"],wj=["targetId","path"],Ej=["path","targetId"],Ij=["collectionId","parent"],Tj=["indexId","uid"],Sj=["uid","sequenceNumber"],Aj=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Pj=["indexId","uid","orderedDocumentKey"],Rj=["userId","collectionPath","documentId"],Cj=["userId","collectionPath","largestBatchId"],kj=["userId","collectionGroup","largestBatchId"],ZC=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bj=[...ZC,"documentOverlays"],ek=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tk=ek,nk=[...tk,"indexConfiguration","indexState","indexEntries"],xj=nk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends QC{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Nt(t,e){const n=X(t);return Ar.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function co(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _h(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _h(this.root,e,this.comparator,!1)}getReverseIterator(){return new _h(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _h(this.root,e,this.comparator,!0)}}class _h{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ft.RED,this.left=i??Ft.EMPTY,this.right=s??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new AT(this.data.getIterator())}getIteratorFrom(e){return new AT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class AT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Po(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new wn([])}unionWith(e){let n=new be(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ea(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nj(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ik("Invalid base64 string: "+s):s}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const Dj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(re(!!t),typeof t=="string"){let e=0;const n=Dj.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qi(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Y_(t){const e=t.mapValue.fields.__previous_value__;return op(e)?Y_(e):e}function Ql(t){const e=Zr(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},nd={nullValue:"NULL_VALUE"};function Js(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?op(t)?4:sk(t)?9007199254740991:10:ee()}function br(t,e){if(t===e)return!0;const n=Js(t);if(n!==Js(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ql(t).isEqual(Ql(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Zr(i.timestampValue),a=Zr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Qi(i.bytesValue).isEqual(Qi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return nt(i.geoPointValue.latitude)===nt(s.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return nt(i.integerValue)===nt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=nt(i.doubleValue),a=nt(s.doubleValue);return o===a?Kl(o)===Kl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ea(t.arrayValue.values||[],e.arrayValue.values||[],br);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ST(o)!==ST(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!br(o[u],a[u])))return!1;return!0}(t,e);default:return ee()}}function Yl(t,e){return(t.values||[]).find(n=>br(n,e))!==void 0}function Ji(t,e){if(t===e)return 0;const n=Js(t),r=Js(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=nt(s.integerValue||s.doubleValue),u=nt(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return PT(t.timestampValue,e.timestampValue);case 4:return PT(Ql(t),Ql(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Qi(s),u=Qi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=le(a[c],u[c]);if(h!==0)return h}return le(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=le(nt(s.latitude),nt(o.latitude));return a!==0?a:le(nt(s.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=Ji(a[c],u[c]);if(h)return h}return le(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===bi.mapValue&&o===bi.mapValue)return 0;if(s===bi.mapValue)return 1;if(o===bi.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let d=0;d<u.length&&d<h.length;++d){const p=le(u[d],h[d]);if(p!==0)return p;const g=Ji(a[u[d]],c[h[d]]);if(g!==0)return g}return le(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ee()}}function PT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Zr(t),r=Zr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Ia(t){return gy(t)}function gy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=gy(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gy(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function Xs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yy(t){return!!t&&"integerValue"in t}function Jl(t){return!!t&&"arrayValue"in t}function RT(t){return!!t&&"nullValue"in t}function CT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rd(t){return!!t&&"mapValue"in t}function pl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return co(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Vj(t){return"nullValue"in t?nd:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Xs(Yi.empty(),J.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:ee()}function Lj(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Xs(Yi.empty(),J.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?bi:ee()}function kT(t,e){const n=Ji(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function bT(t,e){const n=Ji(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pl(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=pl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return br(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){co(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(pl(this.value))}}function ok(t){const e=[];return co(t.fields,(n,r)=>{const i=new qe([n]);if(rd(r)){const s=ok(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,ie.min(),ie.min(),ie.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new Fe(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Fe(e,2,n,ie.min(),ie.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,ie.min(),ie.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.position=e,this.inclusive=n}}function xT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Ji(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function NT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!br(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{}class ye extends ak{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Fj(e,n,r):n==="array-contains"?new jj(e,r):n==="in"?new fk(e,r):n==="not-in"?new Bj(e,r):n==="array-contains-any"?new zj(e,r):new ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Uj(e,r):new $j(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ji(n,this.value)):n!==null&&Js(this.value)===Js(n)&&this.matchesComparison(Ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Re extends ak{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Re(e,n)}matches(e){return Ta(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ta(t){return t.op==="and"}function vy(t){return t.op==="or"}function J_(t){return uk(t)&&Ta(t)}function uk(t){for(const e of t.filters)if(e instanceof Re)return!1;return!0}function _y(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+Ia(t.value);if(J_(t))return t.filters.map(e=>_y(e)).join(",");{const e=t.filters.map(n=>_y(n)).join(",");return`${t.op}(${e})`}}function lk(t,e){return t instanceof ye?function(r,i){return i instanceof ye&&r.op===i.op&&r.field.isEqual(i.field)&&br(r.value,i.value)}(t,e):t instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&lk(o,i.filters[a]),!0):!1}(t,e):void ee()}function ck(t,e){const n=t.filters.concat(e);return Re.create(n,t.op)}function hk(t){return t instanceof ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Ia(n.value)}`}(t):t instanceof Re?function(n){return n.op.toString()+" {"+n.getFilters().map(hk).join(" ,")+"}"}(t):"Filter"}class Fj extends ye{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class Uj extends ye{constructor(e,n){super(e,"in",n),this.keys=dk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $j extends ye{constructor(e,n){super(e,"not-in",n),this.keys=dk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class jj extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jl(n)&&Yl(n.arrayValue,this.value)}}class fk extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yl(this.value.arrayValue,n)}}class Bj extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yl(this.value.arrayValue,n)}}class zj extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function wy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qj(t,e,n,r,i,s,o)}function Zs(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_y(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ia(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ia(r)).join(",")),e.ue=n}return e.ue}function Ec(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!NT(t.startAt,e.startAt)&&NT(t.endAt,e.endAt)}function Yd(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Jd(t,e){return t.filters.filter(n=>n instanceof ye&&n.field.isEqual(e))}function DT(t,e,n){let r=nd,i=!0;for(const s of Jd(t,e)){let o=nd,a=!0;switch(s.op){case"<":case"<=":o=Vj(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=nd}kT({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];kT({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function OT(t,e,n){let r=bi,i=!0;for(const s of Jd(t,e)){let o=bi,a=!0;switch(s.op){case">=":case">":o=Lj(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=bi}bT({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];bT({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pk(t,e,n,r,i,s,o,a){return new oi(t,e,n,r,i,s,o,a)}function Ya(t){return new oi(t)}function VT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function X_(t){return t.collectionGroup!==null}function aa(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new be(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Xl(s,r))}),n.has(qe.keyField().canonicalString())||e.ce.push(new Xl(qe.keyField(),r))}return e.ce}function un(t){const e=X(t);return e.le||(e.le=Gj(e,aa(t))),e.le}function Gj(t,e){if(t.limitType==="F")return wy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xl(i.field,s)});const n=t.endAt?new Xi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xi(t.startAt.position,t.startAt.inclusive):null;return wy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ey(t,e){const n=t.filters.concat([e]);return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xd(t,e,n){return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return Ec(un(t),un(e))&&t.limitType===e.limitType}function mk(t){return`${Zs(un(t))}|lt:${t.limitType}`}function No(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hk(i)).join(", ")}]`),wc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ia(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ia(i)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Tc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of aa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=xT(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,aa(r),i)||r.endAt&&!function(o,a,u){const c=xT(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,aa(r),i))}(t,e)}function gk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yk(t){return(e,n)=>{let r=!1;for(const i of aa(t)){const s=Wj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Wj(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ji(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){co(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hj=new Oe(J.comparator);function En(){return Hj}const vk=new Oe(J.comparator);function Ku(...t){let e=vk;for(const n of t)e=e.insert(n.key,n);return e}function _k(t){let e=vk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return ml()}function wk(){return ml()}function ml(){return new cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Kj=new Oe(J.comparator),Qj=new be(J.comparator);function ce(...t){let e=Qj;for(const n of t)e=e.add(n);return e}const Yj=new be(le);function Z_(){return Yj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function Ik(t){return{integerValue:""+t}}function Tk(t,e){return JC(e)?Ik(e):Ek(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this._=void 0}}function Jj(t,e,n){return t instanceof Sa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&op(s)&&(s=Y_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof eo?Ak(t,e):t instanceof to?Pk(t,e):function(i,s){const o=Sk(i,s),a=LT(o)+LT(i.Pe);return yy(o)&&yy(i.Pe)?Ik(a):Ek(i.serializer,a)}(t,e)}function Xj(t,e,n){return t instanceof eo?Ak(t,e):t instanceof to?Pk(t,e):n}function Sk(t,e){return t instanceof Aa?function(r){return yy(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Sa extends ap{}class eo extends ap{constructor(e){super(),this.elements=e}}function Ak(t,e){const n=Rk(e);for(const r of t.elements)n.some(i=>br(i,r))||n.push(r);return{arrayValue:{values:n}}}class to extends ap{constructor(e){super(),this.elements=e}}function Pk(t,e){let n=Rk(e);for(const r of t.elements)n=n.filter(i=>!br(i,r));return{arrayValue:{values:n}}}class Aa extends ap{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function LT(t){return nt(t.integerValue||t.doubleValue)}function Rk(t){return Jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.field=e,this.transform=n}}function Zj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof eo&&i instanceof eo||r instanceof to&&i instanceof to?Ea(r.elements,i.elements,br):r instanceof Aa&&i instanceof Aa?br(r.Pe,i.Pe):r instanceof Sa&&i instanceof Sa}(t.transform,e.transform)}class eB{constructor(e,n){this.version=e,this.transformResults=n}}class Ge{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function id(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class up{}function Ck(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xa(t.key,Ge.none()):new Ja(t.key,t.data,Ge.none());{const n=t.data,r=Ut.empty();let i=new be(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ai(t.key,r,new wn(i.toArray()),Ge.none())}}function tB(t,e,n){t instanceof Ja?function(i,s,o){const a=i.value.clone(),u=FT(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(i,s,o){if(!id(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=FT(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(kk(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function gl(t,e,n,r){return t instanceof Ja?function(s,o,a,u){if(!id(s.precondition,o))return a;const c=s.value.clone(),h=UT(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(s,o,a,u){if(!id(s.precondition,o))return a;const c=UT(s.fieldTransforms,u,o),h=o.data;return h.setAll(kk(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return id(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function nB(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Sk(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function MT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ea(r,i,(s,o)=>Zj(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ja extends up{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ai extends up{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function FT(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Xj(o,a,n[i]))}return r}function UT(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Jj(s,o,e))}return r}class Xa extends up{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ew extends up{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&tB(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=gl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=gl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Ck(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Ea(this.mutations,e.mutations,(n,r)=>MT(n,r))&&Ea(this.baseMutations,e.baseMutations,(n,r)=>MT(n,r))}}class nw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=function(){return Kj}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new nw(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,ve;function bk(t){switch(t){default:return ee();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function xk(t){if(t===void 0)return ht("GRPC error has no .code"),U.UNKNOWN;switch(t){case pt.OK:return U.OK;case pt.CANCELLED:return U.CANCELLED;case pt.UNKNOWN:return U.UNKNOWN;case pt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case pt.INTERNAL:return U.INTERNAL;case pt.UNAVAILABLE:return U.UNAVAILABLE;case pt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case pt.NOT_FOUND:return U.NOT_FOUND;case pt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case pt.ABORTED:return U.ABORTED;case pt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case pt.DATA_LOSS:return U.DATA_LOSS;default:return ee()}}(ve=pt||(pt={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iB=new $s([4294967295,4294967295],0);function $T(t){const e=Nk().encode(t),n=new LC;return n.update(e),new Uint8Array(n.digest())}function jT(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $s([n,r],0),new $s([i,s],0)]}class iw{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qu(`Invalid padding: ${n}`);if(r<0)throw new Qu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qu(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=$s.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply($s.fromNumber(r)));return i.compare(iB)===1&&(i=new $s([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=$T(e),[r,i]=jT(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new iw(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=$T(e),[r,i]=jT(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ac(ie.min(),i,new Oe(le),En(),ce())}}class Pc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pc(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Dk{constructor(e,n){this.targetId=e,this.me=n}}class Ok{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class BT{constructor(){this.fe=0,this.ge=qT(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ce(),n=ce(),r=ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Pc(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=qT()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sB{constructor(e){this.Le=e,this.Be=new Map,this.ke=En(),this.qe=zT(),this.Qe=new Oe(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Yd(s))if(r===0){const o=new J(s.path);this.Ue(n,o,Fe.newNoDocument(o,ie.min()))}else re(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Qi(r).toUint8Array()}catch(u){if(u instanceof ik)return cr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new iw(o,i,s)}catch(u){return cr(u instanceof Qu?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Yd(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Fe.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ce();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ac(e,n,this.Qe,this.ke,r);return this.ke=En(),this.qe=zT(),this.Qe=new Oe(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new BT,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new be(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new BT),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zT(){return new Oe(J.comparator)}function qT(){return new Oe(J.comparator)}const oB={asc:"ASCENDING",desc:"DESCENDING"},aB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uB={and:"AND",or:"OR"};class lB{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Iy(t,e){return t.useProto3Json||wc(e)?e:{value:e}}function Pa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function cB(t,e){return Pa(t,e.toTimestamp())}function dt(t){return re(!!t),ie.fromTimestamp(function(n){const r=Zr(n);return new We(r.seconds,r.nanos)}(t))}function sw(t,e){return Ty(t,e).canonicalString()}function Ty(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lk(t){const e=ge.fromString(t);return re(Wk(e)),e}function Zl(t,e){return sw(t.databaseId,e.path)}function Pr(t,e){const n=Lk(e);if(n.get(1)!==t.databaseId.projectId)throw new z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Uk(n))}function Mk(t,e){return sw(t.databaseId,e)}function Fk(t){const e=Lk(t);return e.length===4?ge.emptyPath():Uk(e)}function Sy(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uk(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function GT(t,e,n){return{name:Zl(t,e),fields:n.value.mapValue.fields}}function $k(t,e,n){const r=Pr(t,e.name),i=dt(e.updateTime),s=e.createTime?dt(e.createTime):ie.min(),o=new Ut({mapValue:{fields:e.fields}}),a=Fe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function hB(t,e){return"found"in e?function(r,i){re(!!i.found),i.found.name,i.found.updateTime;const s=Pr(r,i.found.name),o=dt(i.found.updateTime),a=i.found.createTime?dt(i.found.createTime):ie.min(),u=new Ut({mapValue:{fields:i.found.fields}});return Fe.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){re(!!i.missing),re(!!i.readTime);const s=Pr(r,i.missing),o=dt(i.readTime);return Fe.newNoDocument(s,o)}(t,e):ee()}function dB(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(re(h===void 0||typeof h=="string"),Tt.fromBase64String(h||"")):(re(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?U.UNKNOWN:xk(c.code);return new z(h,c.message||"")}(o);n=new Ok(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pr(t,r.document.name),s=dt(r.document.updateTime),o=r.document.createTime?dt(r.document.createTime):ie.min(),a=new Ut({mapValue:{fields:r.document.fields}}),u=Fe.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new sd(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pr(t,r.document),s=r.readTime?dt(r.readTime):ie.min(),o=Fe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pr(t,r.document),s=r.removedTargetIds||[];n=new sd([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new rB(i,s),a=r.targetId;n=new Dk(a,o)}}return n}function ec(t,e){let n;if(e instanceof Ja)n={update:GT(t,e.key,e.value)};else if(e instanceof Xa)n={delete:Zl(t,e.key)};else if(e instanceof ai)n={update:GT(t,e.key,e.data),updateMask:vB(e.fieldMask)};else{if(!(e instanceof ew))return ee();n={verify:Zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Sa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof to)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Aa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:cB(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function Ay(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ge.updateTime(dt(s.updateTime)):s.exists!==void 0?Ge.exists(s.exists):Ge.none()}(e.currentDocument):Ge.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)re(a.setToServerValue==="REQUEST_TIME"),u=new Sa;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];u=new eo(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];u=new to(h)}else"increment"in a?u=new Aa(o,a.increment):ee();const c=qe.fromServerFormat(a.fieldPath);return new Sc(c,u)}(t,i)):[];if(e.update){e.update.name;const i=Pr(t,e.update.name),s=new Ut({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new wn(c.map(h=>qe.fromServerFormat(h)))}(e.updateMask);return new ai(i,s,o,n,r)}return new Ja(i,s,n,r)}if(e.delete){const i=Pr(t,e.delete);return new Xa(i,n)}if(e.verify){const i=Pr(t,e.verify);return new ew(i,n)}return ee()}function fB(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?dt(i.updateTime):dt(s);return o.isEqual(ie.min())&&(o=dt(s)),new eB(o,i.transformResults||[])}(n,e))):[]}function jk(t,e){return{documents:[Mk(t,e.path)]}}function Bk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mk(t,i);const s=function(c){if(c.length!==0)return Gk(Re.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Do(p.field),direction:mB(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Iy(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function zk(t){let e=Fk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const p=qk(d);return p instanceof Re&&J_(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(I){return new Xl(Oo(I.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,wc(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(d){const p=!!d.before,g=d.values||[];return new Xi(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,g=d.values||[];return new Xi(g,p)}(n.endAt)),pk(e,i,o,s,a,"F",u,c)}function pB(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Oo(n.unaryFilter.field);return ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Oo(n.unaryFilter.field);return ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Oo(n.unaryFilter.field);return ye.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Oo(n.unaryFilter.field);return ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return ye.create(Oo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Re.create(n.compositeFilter.filters.map(r=>qk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function mB(t){return oB[t]}function gB(t){return aB[t]}function yB(t){return uB[t]}function Do(t){return{fieldPath:t.canonicalString()}}function Oo(t){return qe.fromServerFormat(t.fieldPath)}function Gk(t){return t instanceof ye?function(n){if(n.op==="=="){if(CT(n.value))return{unaryFilter:{field:Do(n.field),op:"IS_NAN"}};if(RT(n.value))return{unaryFilter:{field:Do(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(CT(n.value))return{unaryFilter:{field:Do(n.field),op:"IS_NOT_NAN"}};if(RT(n.value))return{unaryFilter:{field:Do(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(n.field),op:gB(n.op),value:n.value}}}(t):t instanceof Re?function(n){const r=n.getFilters().map(i=>Gk(i));return r.length===1?r[0]:{compositeFilter:{op:yB(n.op),filters:r}}}(t):ee()}function vB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Wk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,i,s=ie.min(),o=ie.min(),a=Tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.ct=e}}function _B(t,e){let n;if(e.document)n=$k(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=J.fromSegments(e.noDocument.path),i=ro(e.noDocument.readTime);n=Fe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return ee();{const r=J.fromSegments(e.unknownDocument.path),i=ro(e.unknownDocument.version);n=Fe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new We(i[0],i[1]);return ie.fromTimestamp(s)}(e.readTime)),n}function WT(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Zd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Zl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Pa(s,o.version.toTimestamp()),createTime:Pa(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:no(e.version)};else{if(!e.isUnknownDocument())return ee();r.unknownDocument={path:n.path.toArray(),version:no(e.version)}}return r}function Zd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function no(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ro(t){const e=new We(t.seconds,t.nanoseconds);return ie.fromTimestamp(e)}function Ss(t,e){const n=(e.baseMutations||[]).map(s=>Ay(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ay(t.ct,s)),i=We.fromMillis(e.localWriteTimeMs);return new tw(e.batchId,i,n,r)}function Yu(t){const e=ro(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ro(t.lastLimboFreeSnapshotVersion):ie.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return re(s.documents.length===1),un(Ya(Fk(s.documents[0])))}(t.query):function(s){return un(zk(s))}(t.query),new qr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Tt.fromBase64String(t.resumeToken))}function Kk(t,e){const n=no(e.snapshotVersion),r=no(e.lastLimboFreeSnapshotVersion);let i;i=Yd(e.target)?jk(t.ct,e.target):Bk(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Zs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ow(t){const e=zk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xd(e,e.limit,"L"):e}function Gm(t,e){return new rw(e.largestBatchId,Ay(t.ct,e.overlayMutation))}function HT(t,e){const n=e.path.lastSegment();return[t,an(e.path.popLast()),n]}function KT(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:no(r.readTime),documentKey:an(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wB{getBundleMetadata(e,n){return QT(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ro(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return QT(e).put(function(i){return{bundleId:i.id,createTime:no(dt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return YT(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:ow(s.bundledQuery),readTime:ro(s.readTime)}}(r)})}saveNamedQuery(e,n){return YT(e).put(function(i){return{name:i.name,readTime:no(dt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function QT(t){return Nt(t,"bundles")}function YT(t){return Nt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new lp(e,r)}getOverlay(e,n){return Vu(e).get(HT(this.userId,n)).next(r=>r?Gm(this.serializer,r):null)}getOverlays(e,n){const r=Ir();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new rw(n,o);i.push(this.ht(e,a))}),F.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(an(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Vu(e).j("collectionPathOverlayIndex",a))}),F.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Ir(),s=an(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Vu(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Gm(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Ir();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Vu(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const d=Gm(this.serializer,c);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return Vu(e).put(function(i,s,o){const[a,u,c]=HT(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ec(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Vu(t){return Nt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(nt(e.integerValue));else if("doubleValue"in e){const r=nt(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Kl(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=Zr(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Qi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?sk(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):ee()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),J.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}As.bt=new As;function EB(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function JT(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=EB(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class IB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=JT(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=JT(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class TB{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class SB{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Lu{constructor(){this.Gt=new IB,this.zt=new TB(this.Gt),this.jt=new SB(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ps(this.indexId,this.documentKey,this.arrayValue,r)}}function yi(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=XT(t.arrayValue,e.arrayValue),n!==0?n:(n=XT(t.directionalValue,e.directionalValue),n!==0?n:J.comparator(t.documentKey,e.documentKey)))}function XT(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.Yt=new be((n,r)=>qe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(re(e.collectionGroup===this.collectionId),this.en)return!1;const n=py(e);if(n!==void 0&&!this.nn(n))return!1;const r=Es(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.rn(a,u)||!this.sn(this.Zt[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new be(qe.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new ed(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new ed(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new ed(r.field,r.dir==="asc"?0:1)));return new Qd(Qd.UNKNOWN_ID,this.collectionId,n,Hl.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){var e,n;if(re(t instanceof ye||t instanceof Re),t instanceof ye){if(t instanceof fk){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ye.create(t.field,"==",s)))||[];return Re.create(i,"or")}return t}const r=t.filters.map(i=>Qk(i));return Re.create(r,t.op)}function AB(t){if(t.getFilters().length===0)return[];const e=Cy(Qk(t));return re(Yk(e)),Py(e)||Ry(e)?[e]:e.getFilters()}function Py(t){return t instanceof ye}function Ry(t){return t instanceof Re&&J_(t)}function Yk(t){return Py(t)||Ry(t)||function(n){if(n instanceof Re&&vy(n)){for(const r of n.getFilters())if(!Py(r)&&!Ry(r))return!1;return!0}return!1}(t)}function Cy(t){if(re(t instanceof ye||t instanceof Re),t instanceof ye)return t;if(t.filters.length===1)return Cy(t.filters[0]);const e=t.filters.map(r=>Cy(r));let n=Re.create(e,t.op);return n=ef(n),Yk(n)?n:(re(n instanceof Re),re(Ta(n)),re(n.filters.length>1),n.filters.reduce((r,i)=>aw(r,i)))}function aw(t,e){let n;return re(t instanceof ye||t instanceof Re),re(e instanceof ye||e instanceof Re),n=t instanceof ye?e instanceof ye?function(i,s){return Re.create([i,s],"and")}(t,e):eS(t,e):e instanceof ye?eS(e,t):function(i,s){if(re(i.filters.length>0&&s.filters.length>0),Ta(i)&&Ta(s))return ck(i,s.getFilters());const o=vy(i)?i:s,a=vy(i)?s:i,u=o.filters.map(c=>aw(c,a));return Re.create(u,"or")}(t,e),ef(n)}function eS(t,e){if(Ta(e))return ck(e,t.getFilters());{const n=e.filters.map(r=>aw(t,r));return Re.create(n,"or")}}function ef(t){if(re(t instanceof ye||t instanceof Re),t instanceof ye)return t;const e=t.getFilters();if(e.length===1)return ef(e[0]);if(uk(t))return t;const n=e.map(i=>ef(i)),r=[];return n.forEach(i=>{i instanceof ye?r.push(i):i instanceof Re&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Re.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PB{constructor(){this._n=new uw}addToCollectionParentIndex(e,n){return this._n.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(On.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class uw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new be(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new be(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Uint8Array(0);class RB{constructor(e,n){this.databaseId=n,this.an=new uw,this.un=new cs(r=>Zs(r),(r,i)=>Ec(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:an(i)};return tS(e).put(s)}return F.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[GC(n),""],!1,!0);return tS(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Er(o.parent))}return r})}addFieldIndex(e,n){const r=Mu(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Co(e);return s.next(a=>{o.put(KT(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Mu(e),i=Co(e),s=Ro(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Mu(e),r=Ro(e),i=Co(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return F.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new ZT(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Ro(e);let i=!0;const s=new Map;return F.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ce();const a=[];return F.forEach(s,(u,c)=>{G("IndexedDbIndexManager",`Using index ${function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map(C=>`${C.fieldPath}:${C.kind}`).join(",")}`}(u)} to execute ${Zs(n)}`);const h=function(T,C){const L=py(C);if(L===void 0)return null;for(const V of Jd(T,L.fieldPath))switch(V.op){case"array-contains-any":return V.value.arrayValue.values||[];case"array-contains":return[V.value]}return null}(c,u),d=function(T,C){const L=new Map;for(const V of Es(C))for(const v of Jd(T,V.fieldPath))switch(v.op){case"==":case"in":L.set(V.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return L.set(V.fieldPath.canonicalString(),v.value),Array.from(L.values())}return null}(c,u),p=function(T,C){const L=[];let V=!0;for(const v of Es(C)){const y=v.kind===0?DT(T,v.fieldPath,T.startAt):OT(T,v.fieldPath,T.startAt);L.push(y.value),V&&(V=y.inclusive)}return new Xi(L,V)}(c,u),g=function(T,C){const L=[];let V=!0;for(const v of Es(C)){const y=v.kind===0?OT(T,v.fieldPath,T.endAt):DT(T,v.fieldPath,T.endAt);L.push(y.value),V&&(V=y.inclusive)}return new Xi(L,V)}(c,u),I=this.hn(u,c,p),A=this.hn(u,c,g),k=this.Pn(u,c,d),E=this.In(u.indexId,h,I,p.inclusive,A,g.inclusive,k);return F.forEach(E,_=>r.G(_,n.limit).next(T=>{T.forEach(C=>{const L=J.fromSegments(C.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return F.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=AB(Re.create(e.filters,"and")).map(r=>wy(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),h=[];for(let d=0;d<u;++d){const p=n?this.Tn(n[d/c]):wh,g=this.En(e,p,r[d%c],i),I=this.dn(e,p,s[d%c],o),A=a.map(k=>this.En(e,p,k,!0));h.push(...this.createRange(g,I,A))}return h}En(e,n,r,i){const s=new Ps(e,J.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Ps(e,J.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new ZT(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return F.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new be(qe.comparator),h=!1;for(const d of u.filters)for(const p of d.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?h=!0:c=c.add(p.field));for(const d of u.orderBy)d.field.isKeyField()||(c=c.add(d.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Lu;for(const i of Es(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);As.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Lu;return As.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Lu;return As.bt.Pt(Xs(this.databaseId,n),r.Ht(function(s){const o=Es(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Lu);let s=0;for(const o of Es(e)){const a=r[s++];for(const u of i)if(this.Vn(n,o.fieldPath)&&Jl(a))i=this.mn(i,o,a);else{const c=u.Ht(o.kind);As.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Lu;u.seed(a.Wt()),As.bt.Pt(o,u.Ht(n.kind)),s.push(u)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof ye&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Mu(e),i=Co(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return F.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(h,d){const p=d?new Hl(d.sequenceNumber,new On(ro(d.readTime),new J(Er(d.documentKey)),d.largestBatchId)):Hl.empty(),g=h.fields.map(([I,A])=>new ed(qe.fromServerFormat(I),A));return new Qd(h.indexId,h.collectionGroup,g,p)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:le(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Mu(e),s=Co(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>F.forEach(a,u=>s.put(KT(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return F.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?F.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),F.forEach(a,u=>this.pn(e,i,u).next(c=>{const h=this.yn(s,u);return c.isEqual(h)?F.resolve():this.wn(e,s,u,c,h)}))))})}Sn(e,n,r,i){return Ro(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Ro(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Ro(e);let s=new be(yi);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Ps(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new be(yi);const i=this.An(n,e);if(i==null)return r;const s=py(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Jl(o))for(const a of o.arrayValue.values||[])r=r.add(new Ps(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Ps(n.indexId,e.key,wh,i));return r}wn(e,n,r,i,s){G("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,h,d,p){const g=u.getIterator(),I=c.getIterator();let A=Po(g),k=Po(I);for(;A||k;){let E=!1,_=!1;if(A&&k){const T=h(A,k);T<0?_=!0:T>0&&(E=!0)}else A!=null?_=!0:E=!0;E?(d(k),k=Po(I)):_?(p(A),A=Po(g)):(A=Po(g),k=Po(I))}}(i,s,yi,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),F.waitFor(o)}gn(e){let n=1;return Co(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>yi(o,a)).filter((o,a,u)=>!a||yi(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=yi(o,e),u=yi(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&u<0)i.push(o),i.push(o.Jt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,wh,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,wh,[]];s.push(IDBKeyRange.bound(a,u))}return s}Dn(e,n){return yi(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(nS)}getMinOffset(e,n){return F.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||ee())).next(nS)}}function tS(t){return Nt(t,"collectionParents")}function Ro(t){return Nt(t,"indexEntries")}function Mu(t){return Nt(t,"indexConfiguration")}function Co(t){return Nt(t,"indexState")}function nS(t){re(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;K_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new On(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class gn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new gn(e,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(h,d,p)=>(a++,p.delete()));s.push(u.next(()=>{re(a===1)}));const c=[];for(const h of n.mutations){const d=XC(e,h.key.path,n.batchId);s.push(i.delete(d)),c.push(h.key)}return F.waitFor(s).next(()=>c)}function tf(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw ee();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(41943040,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);class cp{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){re(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new cp(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return vi(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Vo(e),o=vi(e);return o.add({}).next(a=>{re(typeof a=="number");const u=new tw(a,n,r,i),c=function(g,I,A){const k=A.baseMutations.map(_=>ec(g.ct,_)),E=A.mutations.map(_=>ec(g.ct,_));return{userId:I,batchId:A.batchId,localWriteTimeMs:A.localWriteTime.toMillis(),baseMutations:k,mutations:E}}(this.serializer,this.userId,u),h=[];let d=new be((p,g)=>le(p.canonicalString(),g.canonicalString()));for(const p of i){const g=XC(this.userId,p.key.path,a);d=d.add(p.key.path.popLast()),h.push(o.put(c)),h.push(s.put(g,mj))}return d.forEach(p=>{h.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Cn[a]=u.keys()}),F.waitFor(h).next(()=>u)})}lookupMutationBatch(e,n){return vi(e).get(n).next(r=>r?(re(r.userId===this.userId),Ss(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?F.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return vi(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(re(a.batchId>=r),s=Ss(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return vi(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return vi(e).U("userMutationsIndex",n).next(r=>r.map(i=>Ss(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=td(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Vo(e).J({range:i},(o,a,u)=>{const[c,h,d]=o,p=Er(h);if(c===this.userId&&n.path.isEqual(p))return vi(e).get(d).next(g=>{if(!g)throw ee();re(g.userId===this.userId),s.push(Ss(this.serializer,g))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(le);const i=[];return n.forEach(s=>{const o=td(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Vo(e).J({range:a},(c,h,d)=>{const[p,g,I]=c,A=Er(g);p===this.userId&&s.path.isEqual(A)?r=r.add(I):d.done()});i.push(u)}),F.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=td(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new be(le);return Vo(e).J({range:o},(u,c,h)=>{const[d,p,g]=u,I=Er(p);d===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(g)):h.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(vi(e).get(s).next(o=>{if(o===null)throw ee();re(o.userId===this.userId),r.push(Ss(this.serializer,o))}))}),F.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return Jk(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),F.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return F.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Vo(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Er(s[1]);i.push(u)}else a.done()}).next(()=>{re(i.length===0)})})}containsKey(e,n){return Xk(e,this.userId,n)}xn(e){return Zk(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Xk(t,e,n){const r=td(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Vo(t).J({range:s,H:!0},(a,u,c)=>{const[h,d,p]=a;h===e&&d===i&&(o=!0),c.done()}).next(()=>o)}function vi(t){return Nt(t,"mutations")}function Vo(t){return Nt(t,"documentMutations")}function Zk(t){return Nt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new io(0)}static Ln(){return new io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CB{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new io(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>ie.fromTimestamp(new We(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ko(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(re(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ko(e).J((o,a)=>{const u=Yu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>F.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ko(e).J((r,i)=>{const s=Yu(i);n(s)})}Bn(e){return iS(e).get("targetGlobalKey").next(n=>(re(n!==null),n))}kn(e,n){return iS(e).put("targetGlobalKey",n)}qn(e,n){return ko(e).put(Kk(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Zs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ko(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=Yu(a);Ec(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Ai(e);return n.forEach(o=>{const a=an(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),F.waitFor(i)}removeMatchingKeys(e,n,r){const i=Ai(e);return F.forEach(n,s=>{const o=an(s.path);return F.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Ai(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Ai(e);let s=ce();return i.J({range:r,H:!0},(o,a,u)=>{const c=Er(o[1]),h=new J(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=an(n.path),i=IDBKeyRange.bound([r],[GC(r)],!1,!0);let s=0;return Ai(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return ko(e).get(n).next(r=>r?Yu(r):null)}}function ko(t){return Nt(t,"targets")}function iS(t){return Nt(t,"targetGlobal")}function Ai(t){return Nt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS([t,e],[n,r]){const i=le(t,n);return i===0?le(e,r):i}class kB{constructor(e){this.Kn=e,this.buffer=new be(sS),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sS(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class bB{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){G("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ls(n)?G("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await us(n)}await this.zn(3e5)})}}class xB{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(_n.oe);const r=new kB(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(rS)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rS):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(c=Date.now(),xo()<=pe.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${d} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function NB(t,e){return new xB(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DB{constructor(e,n){this.db=e,this.garbageCollector=NB(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return Eh(e,r)}removeReference(e,n,r){return Eh(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Eh(e,n)}er(e,n){return function(i,s){let o=!1;return Zk(i).Y(a=>Xk(i,a,s).next(u=>(u&&(o=!0),F.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const u=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ie.min()),Ai(e).delete(function(d){return[0,an(d.path)]}(o))))});i.push(u)}}).next(()=>F.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Eh(e,n)}Xn(e,n){const r=Ai(e);let i,s=_n.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==_n.oe&&n(new J(Er(i)),s),s=c,i=u):s=_n.oe}).next(()=>{s!==_n.oe&&n(new J(Er(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Eh(t,e){return Ai(t).put(function(r,i){return{targetId:0,path:an(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.changes=new cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OB{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ys(e).put(r)}removeEntry(e,n,r){return ys(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Zd(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Fe.newInvalidDocument(n);return ys(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fu(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Fe.newInvalidDocument(n)};return ys(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fu(n))},(i,s)=>{r={document:this.nr(n,s),size:tf(s)}}).next(()=>r)}getEntries(e,n){let r=En();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=En(),i=new Oe(J.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,tf(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return F.resolve();let i=new be(uS);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Fu(i.first()),Fu(i.last())),o=i.getIterator();let a=o.getNext();return ys(e).J({index:"documentKeyIndex",range:s},(u,c,h)=>{const d=J.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&uS(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(Fu(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Zd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ys(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=En();for(const d of c){const p=this.nr(J.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);p.isFoundDocument()&&(Tc(n,p)||i.has(p.key))&&(h=h.insert(p.key,p))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=En();const o=aS(n,r),a=aS(n,On.max());return ys(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const d=this.nr(J.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(d.key,d),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new VB(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return oS(e).get("remoteDocumentGlobalKey").next(n=>(re(!!n),n))}tr(e,n){return oS(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=_B(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ie.min())))return r}return Fe.newInvalidDocument(e)}}function tb(t){return new OB(t)}class VB extends eb{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new cs(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new be((s,o)=>le(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=WT(this.ar.serializer,o);i=i.add(s.path.popLast());const c=tf(u);r+=c-a.size,n.push(this.ar.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=WT(this.ar.serializer,o.convertToNoDocument(ie.min()));n.push(this.ar.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),F.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function oS(t){return Nt(t,"remoteDocumentGlobal")}function ys(t){return Nt(t,"remoteDocumentsV14")}function Fu(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function aS(t,e){const n=e.documentKey.path.toArray();return[t,Zd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function uS(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=le(n[s],r[s]),i)return i;return i=le(n.length,r.length),i||(i=le(n[n.length-2],r[r.length-2]),i||le(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LB{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&gl(r.mutation,i,wn.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ku();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=En();const o=ml(),a=function(){return ml()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ai)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),gl(h.mutation,c,h.mutation.getFieldMask(),We.now())):o.set(c.key,wn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var d;return a.set(c,new LB(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ml();let i=new Oe((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||wn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const d=(i.get(a.batchId)||ce()).add(u);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,d=wk();h.forEach(p=>{if(!s.has(p)){const g=Ck(n.get(p),r.get(p));g!==null&&d.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):X_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Ir());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ce())).next(h=>({batchId:a,changes:_k(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Ku();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ku();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(d,p){return new oi(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Fe.newInvalidDocument(h)))});let a=Ku();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&gl(h.mutation,c,wn.empty(),We.now()),Tc(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MB{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return F.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:dt(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:ow(i.bundledQuery),readTime:dt(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FB{constructor(){this.overlays=new Oe(J.comparator),this.hr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Ir(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Ir(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ir(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rw(n,r));let s=this.hr.get(n);s===void 0&&(s=ce(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.Pr=new be(St.Ir),this.Tr=new be(St.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new St(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new St(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new J(new ge([])),r=new St(n,e),i=new St(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new J(new ge([])),r=new St(n,e),i=new St(n,e+1);let s=ce();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new St(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class St{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return J.comparator(e.key,n.key)||le(e.pr,n.pr)}static Er(e,n){return le(e.pr,n.pr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UB{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new be(St.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tw(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new St(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new St(n,0),i=new St(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(le);return n.forEach(i=>{const s=new St(i,0),o=new St(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new St(new J(s),0);let a=new be(le);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),F.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(n.mutations,i=>{const s=new St(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new St(n,0),i=this.wr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $B{constructor(e){this.vr=e,this.docs=function(){return new Oe(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=En();const o=n.path,a=new J(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||K_(HC(h),r)<=0||(i.has(h.key)||Tc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Fr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jB(this)}getSize(e){return F.resolve(this.size)}}class jB extends eb{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BB{constructor(e){this.persistence=e,this.Mr=new cs(n=>Zs(n),Ec),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Or=0,this.Nr=new lw,this.targetCount=0,this.Lr=io.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),F.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new io(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.qn(n),F.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n){this.Br={},this.overlays={},this.kr=new _n(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new BB(this),this.indexManager=new PB,this.remoteDocumentCache=function(i){return new $B(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Hk(n),this.$r=new MB(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FB,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new UB(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new zB(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class zB extends QC{constructor(e){super(),this.currentSequenceNumber=e}}class hp{constructor(e){this.persistence=e,this.zr=new lw,this.jr=null}static Hr(e){return new hp(e)}get Jr(){if(this.jr)return this.jr;throw ee()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),F.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const i=J.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return F.or([()=>F.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qB{constructor(e){this.serializer=e}O(e,n,r,i){const s=new sp("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",TT,{unique:!0}),u.createObjectStore("documentMutations")}(e),lS(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=F.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),lS(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ie.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(h=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",TT,{unique:!0});const d=c.store("mutations"),p=h.map(g=>d.put(g));return F.waitFor(p)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:Rj});c.createIndex("collectionPathOverlayIndex",Cj,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",kj,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:gj});c.createIndex("documentKeyIndex",yj),c.createIndex("collectionGroupIndex",vj)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:Tj}).createIndex("sequenceNumberIndex",Sj,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:Aj}).createIndex("documentKeyIndex",Pj,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=tf(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>F.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>F.forEach(a,u=>{re(u.userId===s.userId);const c=Ss(this.serializer,u);return Jk(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new ge(o),c=function(d){return[0,an(d)]}(u);s.push(n.get(c).next(h=>h?F.resolve():(d=>n.put({targetId:0,path:an(d),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>F.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:Ij});const r=n.store("collectionParents"),i=new uw,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:an(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new ge(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const h=Er(a);return s(h.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=Yu(i),o=Kk(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(d){return d.document?new J(ge.fromString(d.document.name).popFirst(5)):d.noDocument?J.fromSegments(d.noDocument.path):d.unknownDocument?J.fromSegments(d.unknownDocument.path):ee()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>F.waitFor(i))}si(e,n){const r=n.store("mutations"),i=tb(this.serializer),s=new rb(hp.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:ce();Ss(this.serializer,u).keys().forEach(d=>h=h.add(d)),a.set(u.userId,h)}),F.forEach(a,(u,c)=>{const h=new Pt(c),d=lp.lt(this.serializer,h),p=s.getIndexManager(h),g=cp.lt(h,this.serializer,p,s.referenceDelegate);return new nb(i,g,d,p).recalculateAndSaveOverlaysForDocumentKeys(new my(n,_n.oe),u).next()})})}}function lS(t){t.createObjectStore("targetDocuments",{keyPath:wj}).createIndex("documentTargetsIndex",Ej,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",_j,{unique:!0}),t.createObjectStore("targetGlobal")}const Wm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class cw{constructor(e,n,r,i,s,o,a,u,c,h,d=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=h,this.ui=d,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=p=>Promise.resolve(),!cw.D())throw new z(U.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new DB(this,i),this.Ti=n+"main",this.serializer=new Hk(u),this.Ei=new Ar(this.Ti,this.ui,new qB(this.serializer)),this.Qr=new CB(this.referenceDelegate,this.serializer),this.remoteDocumentCache=tb(this.serializer),this.$r=new wB,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,h===!1&&ht("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(U.FAILED_PRECONDITION,Wm);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new _n(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ih(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(ls(e))return G("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return G("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Uu(e).get("owner").next(n=>F.resolve(this.Si(n)))}bi(e){return Ih(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Nt(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return F.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?F.resolve(!0):Uu(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new z(U.FAILED_PRECONDITION,Wm);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ih(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&G("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new my(e,_n.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Ih(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return cp.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new RB(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return lp.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){G("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===16?xj:u===15?nk:u===14?tk:u===13?ek:u===12?bj:u===11?ZC:void ee()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new my(a,this.kr?this.kr.next():_n.oe),n==="readwrite-primary"?this.gi(o).next(u=>!!u||this.pi(o)).next(u=>{if(!u)throw ht(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new z(U.FAILED_PRECONDITION,KC);return r(o)}).next(u=>this.wi(o).next(()=>u)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Uu(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new z(U.FAILED_PRECONDITION,Wm)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Uu(e).put("owner",n)}static D(){return Ar.D()}yi(e){const n=Uu(e);return n.get("owner").next(r=>this.Si(r)?(G("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):F.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ht(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;AR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return G("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ht("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){ht("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Uu(t){return Nt(t,"owner")}function Ih(t){return Nt(t,"clientMetadata")}function hw(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dw(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GB{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return AR()?8:YC(He())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new GB;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(xo()<=pe.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",No(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(xo()<=pe.DEBUG&&G("QueryEngine","Query:",No(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(xo()<=pe.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",No(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):F.resolve())}ji(e,n){if(VT(n))return F.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xd(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,Xd(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return VT(n)||i.isEqual(ie.min())?F.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?F.resolve(null):(xo()<=pe.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),No(n)),this.es(e,o,n,WC(i,-1)).next(a=>a))})}Zi(e,n){let r=new be(yk(e));return n.forEach((i,s)=>{Tc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return xo()<=pe.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",No(n)),this.zi.getDocumentsMatchingQuery(e,n,On.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WB{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Oe(le),this.rs=new cs(s=>Zs(s),Ec),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nb(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function sb(t,e,n,r){return new WB(t,e,n,r)}async function ob(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ce();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function HB(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const d=c.batch,p=d.keys();let g=F.resolve();return p.forEach(I=>{g=g.next(()=>h.getEntry(u,I)).next(A=>{const k=c.docVersions.get(I);re(k!==null),A.version.compareTo(k)<0&&(d.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ab(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function KB(t,e){const n=X(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,d)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Tt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(d,g),function(A,k,E){return A.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,g,h)&&a.push(n.Qr.updateTargetData(s,g))});let u=En(),c=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(ub(s,o,e.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(ie.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function ub(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=En();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function QB(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ra(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Ca(t,e,n){const r=X(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ls(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function nf(t,e,n){const r=X(t);let i=ie.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const d=X(u),p=d.rs.get(h);return p!==void 0?F.resolve(d.ns.get(p)):d.Qr.getTargetData(c,h)}(r,o,un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:ce())).next(a=>(hb(r,gk(e),a),{documents:a,hs:s})))}function lb(t,e){const n=X(t),r=X(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function cb(t,e){const n=X(t),r=n.ss.get(e)||ie.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,WC(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(hb(n,e,i),i))}function hb(t,e,n){let r=t.ss.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function YB(t,e,n,r){const i=X(t);let s=ce(),o=En();for(const c of n){const h=e.Ps(c.metadata.name);c.document&&(s=s.add(h));const d=e.Is(c);d.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(h,d)}const a=i.os.newChangeBuffer({trackRemovals:!0}),u=await Ra(i,function(h){return un(Ya(ge.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>ub(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Qr.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Qr.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.cs,h.ls)).next(()=>h.cs)))}async function JB(t,e,n=ce()){const r=await Ra(t,un(ow(e.bundledQuery))),i=X(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=dt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Tt.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function cS(t,e){return`firestore_clients_${t}_${e}`}function hS(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Hm(t,e){return`firestore_targets_${t}_${e}`}class rf{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new z(i.error.code,i.error.message))),o?new rf(e,n,i.state,s):(ht("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class yl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new z(r.error.code,r.error.message))),s?new yl(e,r.state,i):(ht("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sf{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Z_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=JC(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new sf(e,s):(ht("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class fw{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new fw(n.clientId,n.onlineState):(ht("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ky{constructor(){this.activeTargetIds=Z_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Km{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new Oe(le),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=cS(this.persistenceKey,this.Vs),this.Ss=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new ky),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Fs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(cS(this.persistenceKey,r));if(i){const s=sf.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Hm(this.persistenceKey,e));if(r){const i=yl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Hm(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return G("SharedClientState","READ",e,n),n}setItem(e,n){G("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){G("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(G("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void ht("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=_n.oe;if(s!=null)try{const a=JSON.parse(s);re(typeof a=="number"),o=a}catch(a){ht("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==_n.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new rf(this.currentUser,e,n,r),s=hS(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=hS(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Hm(this.persistenceKey,e),s=new yl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return sf.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return rf.Es(new Pt(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return yl.Es(i,n)}xs(e){return fw.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);G("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=Z_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class db{constructor(){this.no=new ky,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XB{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th=null;function Qm(){return Th===null?Th=function(){return 268435456+Math.round(2147483648*Math.random())}():Th++,"0x"+Th.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection";class t6 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Qm(),u=this.vo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(h=>(G("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw cr("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=ZB[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Qm();return new Promise((o,a)=>{const u=new MC;u.setWithCredentials(!0),u.listenOnce(UC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Zh.NO_ERROR:const h=u.getResponseJson();G(Ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Zh.TIMEOUT:G(Ht,`RPC '${e}' ${s} timed out`),a(new z(U.DEADLINE_EXCEEDED,"Request time out"));break;case Zh.HTTP_ERROR:const d=u.getStatus();if(G(Ht,`RPC '${e}' ${s} failed with status:`,d,"response text:",u.getResponseText()),d>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const I=function(k){const E=k.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(E)>=0?E:U.UNKNOWN}(g.status);a(new z(I,g.message))}else a(new z(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new z(U.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{G(Ht,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(Ht,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Qm(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=BC(),a=jC(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new FC({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");G(Ht,`Creating RPC '${e}' stream ${i}: ${h}`,u);const d=o.createWebChannel(h,u);let p=!1,g=!1;const I=new e6({lo:k=>{g?G(Ht,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(G(Ht,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),G(Ht,`RPC '${e}' stream ${i} sending:`,k),d.send(k))},ho:()=>d.close()}),A=(k,E,_)=>{k.listen(E,T=>{try{_(T)}catch(C){setTimeout(()=>{throw C},0)}})};return A(d,Hu.EventType.OPEN,()=>{g||(G(Ht,`RPC '${e}' stream ${i} transport opened.`),I.mo())}),A(d,Hu.EventType.CLOSE,()=>{g||(g=!0,G(Ht,`RPC '${e}' stream ${i} transport closed`),I.po())}),A(d,Hu.EventType.ERROR,k=>{g||(g=!0,cr(Ht,`RPC '${e}' stream ${i} transport errored:`,k),I.po(new z(U.UNAVAILABLE,"The operation could not be completed")))}),A(d,Hu.EventType.MESSAGE,k=>{var E;if(!g){const _=k.data[0];re(!!_);const T=_,C=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(C){G(Ht,`RPC '${e}' stream ${i} received error:`,C);const L=C.status;let V=function(S){const P=pt[S];if(P!==void 0)return xk(P)}(L),v=C.message;V===void 0&&(V=U.INTERNAL,v="Unknown error status: "+L+" with message "+C.message),g=!0,I.po(new z(V,v)),d.close()}else G(Ht,`RPC '${e}' stream ${i} received:`,_),I.yo(_)}}),A(a,$C.STAT_EVENT,k=>{k.stat===fy.PROXY?G(Ht,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===fy.NOPROXY&&G(Ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.fo()},0),I}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(){return typeof window<"u"?window:null}function od(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t){return new lB(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new pw(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(ht(n.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new z(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n6 extends pb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=dB(this.serializer,e),r=function(s){if(!("targetChange"in s))return ie.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?dt(o.readTime):ie.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Sy(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Yd(u)?{documents:jk(s,u)}:{query:Bk(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Vk(s,o.resumeToken);const c=Iy(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=Pa(s,o.snapshotVersion.toTimestamp());const c=Iy(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=pB(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Sy(this.serializer),n.removeTarget=e,this.i_(n)}}class r6 extends pb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=fB(e.writeResults,e.commitTime),r=dt(e.commitTime);return this.listener.A_(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Sy(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ec(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Ty(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(U.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Ty(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(U.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class s6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ht(n),this.y_=!1):G("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{hs(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.M_.add(4),await Za(c),c.N_.set("Unknown"),c.M_.delete(4),await Cc(c)}(this))})}),this.N_=new s6(r,i)}}async function Cc(t){if(hs(t))for(const e of t.x_)await e(!0)}async function Za(t){for(const e of t.x_)await e(!1)}function dp(t,e){const n=X(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),yw(n)?gw(n):tu(n).Xo()&&mw(n,e))}function ka(t,e){const n=X(t),r=tu(n);n.F_.delete(e),r.Xo()&&mb(n,e),n.F_.size===0&&(r.Xo()?r.n_():hs(n)&&n.N_.set("Unknown"))}function mw(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}tu(t).P_(e)}function mb(t,e){t.L_.xe(e),tu(t).I_(e)}function gw(t){t.L_=new sB({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),tu(t).start(),t.N_.w_()}function yw(t){return hs(t)&&!tu(t).Zo()&&t.F_.size>0}function hs(t){return X(t).M_.size===0}function gb(t){t.L_=void 0}async function a6(t){t.N_.set("Online")}async function u6(t){t.F_.forEach((e,n)=>{mw(t,e)})}async function l6(t,e){gb(t),yw(t)?(t.N_.D_(e),gw(t)):t.N_.set("Unknown")}async function c6(t,e,n){if(t.N_.set("Online"),e instanceof Ok&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await of(t,r)}else if(e instanceof sd?t.L_.Ke(e):e instanceof Dk?t.L_.He(e):t.L_.We(e),!n.isEqual(ie.min()))try{const r=await ab(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.F_.get(u);if(!h)return;s.F_.set(u,h.withResumeToken(Tt.EMPTY_BYTE_STRING,h.snapshotVersion)),mb(s,u);const d=new qr(h.target,u,c,h.sequenceNumber);mw(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await of(t,r)}}async function of(t,e,n){if(!ls(e))throw e;t.M_.add(1),await Za(t),t.N_.set("Offline"),n||(n=()=>ab(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Cc(t)})}function yb(t,e){return e().catch(n=>of(t,n,e))}async function eu(t){const e=X(t),n=Zi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;h6(e);)try{const i=await QB(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,d6(e,i)}catch(i){await of(e,i)}vb(e)&&_b(e)}function h6(t){return hs(t)&&t.v_.length<10}function d6(t,e){t.v_.push(e);const n=Zi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function vb(t){return hs(t)&&!Zi(t).Zo()&&t.v_.length>0}function _b(t){Zi(t).start()}async function f6(t){Zi(t).V_()}async function p6(t){const e=Zi(t);for(const n of t.v_)e.d_(n.mutations)}async function m6(t,e,n){const r=t.v_.shift(),i=nw.from(r,e,n);await yb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await eu(t)}async function g6(t,e){e&&Zi(t).E_&&await async function(r,i){if(function(o){return bk(o)&&o!==U.ABORTED}(i.code)){const s=r.v_.shift();Zi(r).t_(),await yb(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await eu(r)}}(t,e),vb(t)&&_b(t)}async function fS(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=hs(n);n.M_.add(3),await Za(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Cc(n)}async function by(t,e){const n=X(t);e?(n.M_.delete(2),await Cc(n)):e||(n.M_.add(2),await Za(n),n.N_.set("Unknown"))}function tu(t){return t.B_||(t.B_=function(n,r,i){const s=X(n);return s.f_(),new n6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:a6.bind(null,t),To:u6.bind(null,t),Ao:l6.bind(null,t),h_:c6.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),yw(t)?gw(t):t.N_.set("Unknown")):(await t.B_.stop(),gb(t))})),t.B_}function Zi(t){return t.k_||(t.k_=function(n,r,i){const s=X(n);return s.f_(),new r6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:f6.bind(null,t),Ao:g6.bind(null,t),R_:p6.bind(null,t),A_:m6.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await eu(t)):(await t.k_.stop(),t.v_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new vw(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nu(t,e){if(ht("AsyncQueue",`${e}: ${t}`),ls(t))return new z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Ku(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new ua(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ua)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ua;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.q_=new Oe(J.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ee():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ba{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ba(e,n,ua.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class v6{constructor(){this.queries=new cs(e=>mk(e),Ic),this.onlineState="Unknown",this.z_=new Set}}async function _w(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new y6,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=nu(o,`Initialization of query '${No(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Ew(n)}async function ww(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _6(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Ew(n)}function w6(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Ew(t){t.z_.forEach(e=>{e.next()})}var xy,mS;(mS=xy||(xy={})).J_="default",mS.Cache="cache";class Iw{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ba(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ba.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==xy.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.serializer=e}Ps(e){return Pr(this.serializer,e)}Is(e){return e.metadata.exists?$k(this.serializer,e.document,!1):Fe.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return dt(e)}}class I6{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=wb(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=ge.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new gS(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await YB(this.localStore,new gS(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await JB(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function wb(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.key=e}}class Ib{constructor(e){this.key=e}}class Tb{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ce(),this.mutatedKeys=ce(),this.Ia=yk(e),this.Ta=new ua(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new pS,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),g=Tc(this.query,d)?d:null,I=!!p&&this.mutatedKeys.has(p.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;p&&g?p.data.isEqual(g.data)?I!==A&&(r.track({type:3,doc:g}),k=!0):this.Ra(p,g)||(r.track({type:2,doc:g}),k=!0,(u&&this.Ia(g,u)>0||c&&this.Ia(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),k=!0):p&&!g&&(r.track({type:1,doc:p}),k=!0,(u||c)&&(a=!0)),k&&(g?(o=o.add(g),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,d)=>function(g,I){const A=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return A(g)-A(I)}(h.type,d.type)||this.Ia(h.doc,d.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new ba(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new pS,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ce(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Ib(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Eb(r))}),n}pa(e){this.la=e.hs,this.Pa=ce();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ba.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class T6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class S6{constructor(e){this.key=e,this.wa=!1}}class A6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new cs(a=>mk(a),Ic),this.Da=new Map,this.Ca=new Set,this.va=new Oe(J.comparator),this.Fa=new Map,this.Ma=new lw,this.xa={},this.Oa=new Map,this.Na=io.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function P6(t,e,n=!0){const r=fp(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Sb(r,e,n,!0),i}async function R6(t,e){const n=fp(t);await Sb(n,e,!0,!1)}async function Sb(t,e,n,r){const i=await Ra(t.localStore,un(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await Tw(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&dp(t.remoteStore,i),a}async function Tw(t,e,n,r,i){t.Ba=(d,p,g)=>async function(A,k,E,_){let T=k.view.da(E);T.Xi&&(T=await nf(A.localStore,k.query,!1).then(({documents:v})=>k.view.da(v,T)));const C=_&&_.targetChanges.get(k.targetId),L=_&&_.targetMismatches.get(k.targetId)!=null,V=k.view.applyChanges(T,A.isPrimaryClient,C,L);return Ny(A,k.targetId,V.fa),V.snapshot}(t,d,p,g);const s=await nf(t.localStore,e,!0),o=new Tb(e,s.hs),a=o.da(s.documents),u=Pc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Ny(t,n,c.fa);const h=new T6(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function C6(t,e,n){const r=X(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Ic(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ca(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ka(r.remoteStore,i.targetId),xa(r,i.targetId)}).catch(us)):(xa(r,i.targetId),await Ca(r.localStore,i.targetId,!0))}async function k6(t,e){const n=X(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ka(n.remoteStore,r.targetId))}async function b6(t,e,n){const r=Rw(t);try{const i=await function(o,a){const u=X(o),c=We.now(),h=a.reduce((g,I)=>g.add(I.key),ce());let d,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=En(),A=ce();return u.os.getEntries(g,h).next(k=>{I=k,I.forEach((E,_)=>{_.isValidDocument()||(A=A.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,I)).next(k=>{d=k;const E=[];for(const _ of a){const T=nB(_,d.get(_.key).overlayedDocument);T!=null&&E.push(new ai(_.key,T,ok(T.value.mapValue),Ge.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,E,a)}).next(k=>{p=k;const E=k.applyToLocalDocumentSet(d,A);return u.documentOverlayCache.saveOverlays(g,k.batchId,E)})}).then(()=>({batchId:p.batchId,changes:_k(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Oe(le)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ui(r,i.changes),await eu(r.remoteStore)}catch(i){const s=nu(i,"Failed to persist write");n.reject(s)}}async function Ab(t,e){const n=X(t);try{const r=await KB(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?re(o.wa):i.removedDocuments.size>0&&(re(o.wa),o.wa=!1))}),await ui(n,r,e)}catch(r){await us(r)}}function yS(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=X(o);u.onlineState=a;let c=!1;u.queries.forEach((h,d)=>{for(const p of d.U_)p.j_(a)&&(c=!0)}),c&&Ew(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x6(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Oe(J.comparator);o=o.insert(s,Fe.newNoDocument(s,ie.min()));const a=ce().add(s),u=new Ac(ie.min(),new Map,new Oe(le),o,a);await Ab(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Pw(r)}else await Ca(r.localStore,e,!1).then(()=>xa(r,e,n)).catch(us)}async function N6(t,e){const n=X(t),r=e.batch.batchId;try{const i=await HB(n.localStore,e);Aw(n,r,null),Sw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ui(n,i)}catch(i){await us(i)}}async function D6(t,e,n){const r=X(t);try{const i=await function(o,a){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(d=>(re(d!==null),h=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Aw(r,e,n),Sw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ui(r,i)}catch(i){await us(i)}}async function O6(t,e){const n=X(t);hs(n.remoteStore)||G("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=X(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=nu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Sw(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Aw(t,e,n){const r=X(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function xa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Pb(t,r)})}function Pb(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(ka(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Pw(t))}function Ny(t,e,n){for(const r of n)r instanceof Eb?(t.Ma.addReference(r.key,e),V6(t,r)):r instanceof Ib?(G("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Pb(t,r.key)):ee()}function V6(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(G("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Pw(t))}function Pw(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new J(ge.fromString(e)),r=t.Na.next();t.Fa.set(r,new S6(n)),t.va=t.va.insert(n,r),dp(t.remoteStore,new qr(un(Ya(n.path)),r,"TargetPurposeLimboResolution",_n.oe))}}async function ui(t,e,n){const r=X(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){i.push(c);const h=dw.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const h=X(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>F.forEach(c,p=>F.forEach(p.qi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>F.forEach(p.Qi,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!ls(d))throw d;G("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const p=d.targetId;if(!d.fromCache){const g=h.ns.get(p),I=g.snapshotVersion,A=g.withLastLimboFreeSnapshotVersion(I);h.ns=h.ns.insert(p,A)}}}(r.localStore,s))}async function L6(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await ob(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new z(U.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ui(n,r.us)}}function M6(t,e){const n=X(t),r=n.Fa.get(e);if(r&&r.wa)return ce().add(r.key);{let i=ce();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function F6(t,e){const n=X(t),r=await nf(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&Ny(n,e.targetId,i.fa),i}async function U6(t,e){const n=X(t);return cb(n.localStore,e).then(r=>ui(n,r))}async function $6(t,e,n,r){const i=X(t),s=await function(a,u){const c=X(a),h=X(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",d=>h.vn(d,u).next(p=>p?c.localDocuments.getDocuments(d,p):F.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await eu(i.remoteStore):n==="acknowledged"||n==="rejected"?(Aw(i,e,r||null),Sw(i,e),function(a,u){X(X(a).mutationQueue).Mn(u)}(i.localStore,e)):ee(),await ui(i,s)):G("SyncEngine","Cannot apply mutation batch with id: "+e)}async function j6(t,e){const n=X(t);if(fp(n),Rw(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await vS(n,r.toArray());n.La=!0,await by(n.remoteStore,!0);for(const s of i)dp(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(xa(n,o),Ca(n.localStore,o,!0))),ka(n.remoteStore,o)}),await i,await vS(n,r),function(o){const a=X(o);a.Fa.forEach((u,c)=>{ka(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new Oe(J.comparator)}(n),n.La=!1,await by(n.remoteStore,!1)}}async function vS(t,e,n){const r=X(t),i=[],s=[];for(const o of e){let a;const u=r.Da.get(o);if(u&&u.length!==0){a=await Ra(r.localStore,un(u[0]));for(const c of u){const h=r.ba.get(c),d=await F6(r,h);d.snapshot&&s.push(d.snapshot)}}else{const c=await lb(r.localStore,o);a=await Ra(r.localStore,c),await Tw(r,Rb(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function Rb(t){return pk(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function B6(t){return function(n){return X(X(n).persistence).Bi()}(X(t).localStore)}async function z6(t,e,n,r){const i=X(t);if(i.La)return void G("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await cb(i.localStore,gk(s[0])),a=Ac.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Tt.EMPTY_BYTE_STRING);await ui(i,o,a);break}case"rejected":await Ca(i.localStore,e,!0),xa(i,e,r);break;default:ee()}}async function q6(t,e,n){const r=fp(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){G("SyncEngine","Adding an already active target "+i);continue}const s=await lb(r.localStore,i),o=await Ra(r.localStore,s);await Tw(r,Rb(s),o.targetId,!1,o.resumeToken),dp(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await Ca(r.localStore,i,!1).then(()=>{ka(r.remoteStore,i),xa(r,i)}).catch(us)}}function fp(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ab.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=M6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x6.bind(null,e),e.Sa.h_=_6.bind(null,e.eventManager),e.Sa.ka=w6.bind(null,e.eventManager),e}function Rw(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=N6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=D6.bind(null,e),e}function G6(t,e,n){const r=X(t);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(g,I){const A=X(g),k=dt(I.createTime);return A.persistence.runTransaction("hasNewerBundle","readonly",E=>A.$r.getBundleMetadata(E,I.id)).then(E=>!!E&&E.createTime.compareTo(k)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(wb(u));const c=new I6(u,s.localStore,o.serializer);let h=await o.qa();for(;h;){const p=await c._a(h);p&&a._updateProgress(p),h=await o.qa()}const d=await c.complete();return await ui(s,d.ca,void 0),await function(g,I){const A=X(g);return A.persistence.runTransaction("Save bundle","readwrite",k=>A.$r.saveBundleMetadata(k,I))}(s.localStore,u),a._completeWith(d.progress),Promise.resolve(d.ua)}catch(u){return cr("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Dy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sb(this.persistence,new ib,e.initialUser,this.serializer)}createPersistence(e){return new rb(hp.Hr,this.serializer)}createSharedClientState(e){return new db}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cb extends Dy{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await Rw(this.Qa.syncEngine),await eu(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return sb(this.persistence,new ib,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new bB(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new fj(n,this.persistence);return new dj(e.asyncQueue,r)}createPersistence(e){const n=hw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new cw(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,fb(),od(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new db}}class W6 extends Cb{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Km&&(this.sharedClientState.syncEngine={Zs:$6.bind(null,n),Xs:z6.bind(null,n),eo:q6.bind(null,n),Bi:B6.bind(null,n),Ys:U6.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await j6(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=fb();if(!Km.D(n))throw new z(U.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=hw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Km(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Cw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L6.bind(null,this.syncEngine),await by(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new v6}()}createDatastore(e){const n=Rc(e.databaseInfo.databaseId),r=function(s){return new t6(s)}(e.databaseInfo);return function(s,o,a,u){return new i6(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new o6(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yS(this.syncEngine,n,0),function(){return dS.D()?new dS:new XB}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const d=new A6(i,s,o,a,u,c);return h&&(d.La=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=X(r);G("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Za(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new bt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new E6(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K6{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(U.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=X(i),a={documents:s.map(d=>Zl(o.serializer,d))},u=await o.xo("BatchGetDocuments",o.serializer.databaseId,ge.emptyPath(),a,s.length),c=new Map;u.forEach(d=>{const p=hB(o.serializer,d);c.set(p.key.toString(),p)});const h=[];return s.forEach(d=>{const p=c.get(d.toString());re(!!p),h.push(p)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Xa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=J.fromPath(r);this.mutations.push(new ew(i,this.precondition(i)))}),await async function(r,i){const s=X(r),o={writes:i.map(a=>ec(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,ge.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ee();n=ie.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(U.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ie.min())?Ge.exists(!1):Ge.updateTime(n):Ge.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ie.min()))throw new z(U.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ge.updateTime(n)}return Ge.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q6{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new pw(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new K6(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!wc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!bk(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y6{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=qC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ad(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ob(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Oy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kw(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fS(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>fS(e.remoteStore,i)),t._onlineComponents=e}function kb(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kw(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await ad(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kb(n))throw n;cr("Error using user provided cache. Falling back to memory cache: "+n),await ad(t,new Dy)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await ad(t,new Dy);return t._offlineComponents}async function mp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Oy(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Oy(t,new Cw))),t._onlineComponents}function bb(t){return kw(t).then(e=>e.persistence)}function bw(t){return kw(t).then(e=>e.localStore)}function xb(t){return mp(t).then(e=>e.remoteStore)}function xw(t){return mp(t).then(e=>e.syncEngine)}function J6(t){return mp(t).then(e=>e.datastore)}async function Na(t){const e=await mp(t),n=e.eventManager;return n.onListen=P6.bind(null,e.syncEngine),n.onUnlisten=C6.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=R6.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=k6.bind(null,e.syncEngine),n}function X6(t){return t.asyncQueue.enqueue(async()=>{const e=await bb(t),n=await xb(t);return e.setNetworkEnabled(!0),function(i){const s=X(i);return s.M_.delete(0),Cc(s)}(n)})}function Z6(t){return t.asyncQueue.enqueue(async()=>{const e=await bb(t),n=await xb(t);return e.setNetworkEnabled(!1),async function(i){const s=X(i);s.M_.add(0),await Za(s),s.N_.set("Offline")}(n)})}function ez(t,e){const n=new bt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const d=X(c);return d.persistence.runTransaction("read document","readonly",p=>d.localDocuments.getDocument(p,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new z(U.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=nu(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await bw(t),e,n)),n.promise}function Nb(t,e,n={}){const r=new bt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new pp({next:p=>{o.enqueueAndForget(()=>ww(s,d));const g=p.docs.has(a);!g&&p.fromCache?c.reject(new z(U.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&u&&u.source==="server"?c.reject(new z(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new Iw(Ya(a.path),h,{includeMetadataChanges:!0,ra:!0});return _w(s,d)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}function tz(t,e){const n=new bt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await nf(i,s,!0),u=new Tb(s,a.hs),c=u.da(a.documents),h=u.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const u=nu(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await bw(t),e,n)),n.promise}function Db(t,e,n={}){const r=new bt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new pp({next:p=>{o.enqueueAndForget(()=>ww(s,d)),p.fromCache&&u.source==="server"?c.reject(new z(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new Iw(a,h,{includeMetadataChanges:!0,ra:!0});return _w(s,d)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}function nz(t,e){const n=new pp(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){X(i).z_.add(s),s.next()}(await Na(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){X(i).z_.delete(s)}(await Na(t),n))}}function rz(t,e,n,r){const i=function(o,a){let u;return u=typeof o=="string"?Nk().encode(o):o,function(h,d){return new H6(h,d)}(function(h,d){if(h instanceof Uint8Array)return _S(h,d);if(h instanceof ArrayBuffer)return _S(new Uint8Array(h),d);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,Rc(e));t.asyncQueue.enqueueAndForget(async()=>{G6(await xw(t),i,r)})}function iz(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=X(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await bw(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e,n){if(!n)throw new z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vb(t,e,n,r){if(e===!0&&r===!0)throw new z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ES(t){if(!J.isDocumentKey(t))throw new z(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function IS(t){if(J.isDocumentKey(t))throw new z(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Ee(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gp(t);throw new z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Lb(t,e){if(e<=0)throw new z(U.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ob((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new TS({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new TS(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tj;switch(r.type){case"firstParty":return new sj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wS.get(n);r&&(G("ComponentProvider","Removing Datastore"),wS.delete(n),r.terminate())}(this),Promise.resolve()}}function sz(t,e,n,r={}){var i;const s=(t=Ee(t,kc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&cr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Pt.MOCK_USER;else{a=_F(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Pt(c)}t._authCredentials=new nj(new zC(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn=class Mb{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mb(this.firestore,e,this._query)}},Je=class Fb{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fb(this.firestore,e,this._key)}},$i=class Ub extends hn{constructor(e,n,r){super(e,n,Ya(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new J(e))}withConverter(e){return new Ub(this.firestore,e,this._path)}};function $b(t,e,...n){if(t=oe(t),Nw("collection","path",e),t instanceof kc){const r=ge.fromString(e,...n);return IS(r),new $i(t,null,r)}{if(!(t instanceof Je||t instanceof $i))throw new z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return IS(r),new $i(t.firestore,null,r)}}function oz(t,e){if(t=Ee(t,kc),Nw("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new z(U.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new hn(t,null,function(r){return new oi(ge.emptyPath(),r)}(e))}function af(t,e,...n){if(t=oe(t),arguments.length===1&&(e=qC.newId()),Nw("doc","path",e),t instanceof kc){const r=ge.fromString(e,...n);return ES(r),new Je(t,null,new J(r))}{if(!(t instanceof Je||t instanceof $i))throw new z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return ES(r),new Je(t.firestore,t instanceof $i?t.converter:null,new J(r))}}function jb(t,e){return t=oe(t),e=oe(e),(t instanceof Je||t instanceof $i)&&(e instanceof Je||e instanceof $i)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Bb(t,e){return t=oe(t),e=oe(e),t instanceof hn&&e instanceof hn&&t.firestore===e.firestore&&Ic(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new pw(this,"async_queue_retry"),this.hu=()=>{const n=od();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=od();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=od();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new bt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ls(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ht("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=vw.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ee()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Vy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class uz{constructor(){this._progressObserver={},this._taskCompletionResolver=new bt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lz=-1;let st=class extends kc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new az}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zb(this),this._firestoreClient.terminate()}};function Dt(t){return t._firestoreClient||zb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zb(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new Oj(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ob(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Y6(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function cz(t,e){Gb(t=Ee(t,st));const n=Dt(t);if(n._uninitializedComponentsProvider)throw new z(U.FAILED_PRECONDITION,"SDK cache is already specified.");cr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Cw;return qb(n,i,new Cb(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function hz(t){Gb(t=Ee(t,st));const e=Dt(t);if(e._uninitializedComponentsProvider)throw new z(U.FAILED_PRECONDITION,"SDK cache is already specified.");cr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Cw;return qb(e,r,new W6(r,n.cacheSizeBytes))}function qb(t,e,n){const r=new bt;return t.asyncQueue.enqueue(async()=>{try{await ad(t,n),await Oy(t,e),r.resolve()}catch(i){const s=i;if(!kb(s))throw s;cr("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function dz(t){if(t._initialized&&!t._terminated)throw new z(U.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new bt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Ar.D())return Promise.resolve();const i=r+"main";await Ar.delete(i)}(hw(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function fz(t){return function(n){const r=new bt;return n.asyncQueue.enqueueAndForget(async()=>O6(await xw(n),r)),r.promise}(Dt(t=Ee(t,st)))}function pz(t){return X6(Dt(t=Ee(t,st)))}function mz(t){return Z6(Dt(t=Ee(t,st)))}function gz(t,e){const n=Dt(t=Ee(t,st)),r=new uz;return rz(n,t._databaseId,e,r),r}function yz(t,e){return iz(Dt(t=Ee(t,st)),e).then(n=>n?new hn(t,null,n.query):null)}function Gb(t){if(t._initialized||t._terminated)throw new z(U.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xr(Tt.fromBase64String(e))}catch(n){throw new z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xr(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vz=/^__.*__$/;class _z{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ja(e,this.data,n,this.fieldTransforms)}}class Wb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Hb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class vp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new vp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return uf(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Hb(this.fu)&&vz.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class wz{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rc(e)}Fu(e,n,r,i=!1){return new vp({fu:e,methodName:n,vu:r,path:qe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fo(t){const e=t._freezeSettings(),n=Rc(t._databaseId);return new wz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _p(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Uw("Data must be an object, but it was:",o,r);const a=Yb(r,o);let u,c;if(s.merge)u=new wn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=Ly(e,d,n);if(!o.contains(p))throw new z(U.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Xb(h,p)||h.push(p)}u=new wn(h),c=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=o.fieldTransforms;return new _z(new Ut(a),u,c)}class bc extends ho{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bc}}function Kb(t,e,n){return new vp({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Dw extends ho{_toFieldTransform(e){return new Sc(e.path,new Sa)}isEqual(e){return e instanceof Dw}}class Ow extends ho{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Kb(this,e,!0),r=this.Mu.map(s=>po(s,n)),i=new eo(r);return new Sc(e.path,i)}isEqual(e){return e instanceof Ow&&Fl(this.Mu,e.Mu)}}class Vw extends ho{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Kb(this,e,!0),r=this.Mu.map(s=>po(s,n)),i=new to(r);return new Sc(e.path,i)}isEqual(e){return e instanceof Vw&&Fl(this.Mu,e.Mu)}}class Lw extends ho{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Aa(e.serializer,Tk(e.serializer,this.xu));return new Sc(e.path,n)}isEqual(e){return e instanceof Lw&&this.xu===e.xu}}function Mw(t,e,n,r){const i=t.Fu(1,e,n);Uw("Data must be an object, but it was:",i,r);const s=[],o=Ut.empty();co(r,(u,c)=>{const h=$w(e,u,n);c=oe(c);const d=i.Su(h);if(c instanceof bc)s.push(h);else{const p=po(c,d);p!=null&&(s.push(h),o.set(h,p))}});const a=new wn(s);return new Wb(o,a,i.fieldTransforms)}function Fw(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Ly(e,r,n)],u=[i];if(s.length%2!=0)throw new z(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Ly(e,s[p])),u.push(s[p+1]);const c=[],h=Ut.empty();for(let p=a.length-1;p>=0;--p)if(!Xb(c,a[p])){const g=a[p];let I=u[p];I=oe(I);const A=o.Su(g);if(I instanceof bc)c.push(g);else{const k=po(I,A);k!=null&&(c.push(g),h.set(g,k))}}const d=new wn(c);return new Wb(h,d,o.fieldTransforms)}function Qb(t,e,n,r=!1){return po(n,t.Fu(r?4:3,e))}function po(t,e){if(Jb(t=oe(t)))return Uw("Unsupported field value:",e,t),Yb(t,e);if(t instanceof ho)return function(r,i){if(!Hb(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=po(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=We.fromDate(r);return{timestampValue:Pa(i.serializer,s)}}if(r instanceof We){const s=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pa(i.serializer,s)}}if(r instanceof yp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xr)return{bytesValue:Vk(i.serializer,r._byteString)};if(r instanceof Je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sw(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${gp(r)}`)}(t,e)}function Yb(t,e){const n={};return rk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):co(t,(r,i)=>{const s=po(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Jb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof yp||t instanceof xr||t instanceof Je||t instanceof ho)}function Uw(t,e,n){if(!Jb(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gp(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Ly(t,e,n){if((e=oe(e))instanceof es)return e._internalPath;if(typeof e=="string")return $w(t,e);throw uf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ez=new RegExp("[~\\*/\\[\\]]");function $w(t,e,n){if(e.search(Ez)>=0)throw uf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new es(...e.split("."))._internalPath}catch{throw uf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(U.INVALID_ARGUMENT,a+t+u)}function Xb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Iz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Iz extends tc{data(){return super.data()}}function wp(t,e){return typeof e=="string"?$w(t,e):e instanceof es?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jw{}class xc extends jw{}function _i(t,e,...n){let r=[];e instanceof jw&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Bw).length,a=s.filter(u=>u instanceof Ep).length;if(o>1||o>0&&a>0)throw new z(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ep extends xc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ep(e,n,r)}_apply(e){const n=this._parse(e);return tx(e._query,n),new hn(e.firestore,e.converter,Ey(e._query,n))}_parse(e){const n=fo(e.firestore);return function(s,o,a,u,c,h,d){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new z(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){AS(d,h);const g=[];for(const I of d)g.push(SS(u,s,I));p={arrayValue:{values:g}}}else p=SS(u,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||AS(d,h),p=Qb(a,o,d,h==="in"||h==="not-in");return ye.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Tz(t,e,n){const r=e,i=wp("where",t);return Ep._create(i,r,n)}class Bw extends jw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Re.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)tx(o,u),o=Ey(o,u)}(e._query,n),new hn(e.firestore,e.converter,Ey(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zw extends xc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zw(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xl(s,o)}(e._query,this._field,this._direction);return new hn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new oi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Sz(t,e="asc"){const n=e,r=wp("orderBy",t);return zw._create(r,n)}class Ip extends xc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ip(e,n,r)}_apply(e){return new hn(e.firestore,e.converter,Xd(e._query,this._limit,this._limitType))}}function Az(t){return Lb("limit",t),Ip._create("limit",t,"F")}function Pz(t){return Lb("limitToLast",t),Ip._create("limitToLast",t,"L")}class Tp extends xc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Tp(e,n,r)}_apply(e){const n=ex(e,this.type,this._docOrFields,this._inclusive);return new hn(e.firestore,e.converter,function(i,s){return new oi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Rz(...t){return Tp._create("startAt",t,!0)}function Cz(...t){return Tp._create("startAfter",t,!1)}class Sp extends xc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Sp(e,n,r)}_apply(e){const n=ex(e,this.type,this._docOrFields,this._inclusive);return new hn(e.firestore,e.converter,function(i,s){return new oi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function kz(...t){return Sp._create("endBefore",t,!1)}function bz(...t){return Sp._create("endAt",t,!0)}function ex(t,e,n,r){if(n[0]=oe(n[0]),n[0]instanceof tc)return function(s,o,a,u,c){if(!u)throw new z(U.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const d of aa(s))if(d.field.isKeyField())h.push(Xs(o,u.key));else{const p=u.data.field(d.field);if(op(p))throw new z(U.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const g=d.field.canonicalString();throw new z(U.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}h.push(p)}return new Xi(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=fo(t.firestore);return function(o,a,u,c,h,d){const p=o.explicitOrderBy;if(h.length>p.length)throw new z(U.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let I=0;I<h.length;I++){const A=h[I];if(p[I].field.isKeyField()){if(typeof A!="string")throw new z(U.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof A}`);if(!X_(o)&&A.indexOf("/")!==-1)throw new z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${A}' contains a slash.`);const k=o.path.child(ge.fromString(A));if(!J.isDocumentKey(k))throw new z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const E=new J(k);g.push(Xs(a,E))}else{const k=Qb(u,c,A);g.push(k)}}return new Xi(g,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function SS(t,e,n){if(typeof(n=oe(n))=="string"){if(n==="")throw new z(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!X_(e)&&n.indexOf("/")!==-1)throw new z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!J.isDocumentKey(r))throw new z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xs(t,new J(r))}if(n instanceof Je)return Xs(t,n._key);throw new z(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gp(n)}.`)}function AS(t,e){if(!Array.isArray(t)||t.length===0)throw new z(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tx(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class qw{convertValue(e,n="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return co(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new yp(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Y_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ql(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);re(Wk(r));const i=new Yi(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||ht(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class xz extends qw{constructor(e){super(),this.firestore=e}convertBytes(e){return new xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let ei=class extends tc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},vl=class extends ei{data(e={}){return super.data(e)}},ts=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ns(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vl(this._firestore,this._userDataWriter,r.key,r,new Ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ns(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ns(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Nz(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function Nz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}function nx(t,e){return t instanceof ei&&e instanceof ei?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ts&&e instanceof ts&&t._firestore===e._firestore&&Bb(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dz(t){t=Ee(t,Je);const e=Ee(t.firestore,st);return Nb(Dt(e),t._key).then(n=>Gw(e,t,n))}class mo extends qw{constructor(e){super(),this.firestore=e}convertBytes(e){return new xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function Oz(t){t=Ee(t,Je);const e=Ee(t.firestore,st),n=Dt(e),r=new mo(e);return ez(n,t._key).then(i=>new ei(e,r,t._key,i,new Ns(i!==null&&i.hasLocalMutations,!0),t.converter))}function Vz(t){t=Ee(t,Je);const e=Ee(t.firestore,st);return Nb(Dt(e),t._key,{source:"server"}).then(n=>Gw(e,t,n))}function Lz(t){t=Ee(t,hn);const e=Ee(t.firestore,st),n=Dt(e),r=new mo(e);return Zb(t._query),Db(n,t._query).then(i=>new ts(e,r,t,i))}function Mz(t){t=Ee(t,hn);const e=Ee(t.firestore,st),n=Dt(e),r=new mo(e);return tz(n,t._query).then(i=>new ts(e,r,t,i))}function Fz(t){t=Ee(t,hn);const e=Ee(t.firestore,st),n=Dt(e),r=new mo(e);return Db(n,t._query,{source:"server"}).then(i=>new ts(e,r,t,i))}function PS(t,e,n){t=Ee(t,Je);const r=Ee(t.firestore,st),i=Ap(t.converter,e,n);return Nc(r,[_p(fo(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ge.none())])}function RS(t,e,n,...r){t=Ee(t,Je);const i=Ee(t.firestore,st),s=fo(i);let o;return o=typeof(e=oe(e))=="string"||e instanceof es?Fw(s,"updateDoc",t._key,e,n,r):Mw(s,"updateDoc",t._key,e),Nc(i,[o.toMutation(t._key,Ge.exists(!0))])}function Uz(t){return Nc(Ee(t.firestore,st),[new Xa(t._key,Ge.none())])}function $z(t,e){const n=Ee(t.firestore,st),r=af(t),i=Ap(t.converter,e);return Nc(n,[_p(fo(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then(()=>r)}function rx(t,...e){var n,r,i;t=oe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Vy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Vy(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let u,c,h;if(t instanceof Je)c=Ee(t.firestore,st),h=Ya(t._key.path),u={next:d=>{e[o]&&e[o](Gw(c,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Ee(t,hn);c=Ee(d.firestore,st),h=d._query;const p=new mo(c);u={next:g=>{e[o]&&e[o](new ts(c,p,d,g))},error:e[o+1],complete:e[o+2]},Zb(t._query)}return function(p,g,I,A){const k=new pp(A),E=new Iw(g,k,I);return p.asyncQueue.enqueueAndForget(async()=>_w(await Na(p),E)),()=>{k.$a(),p.asyncQueue.enqueueAndForget(async()=>ww(await Na(p),E))}}(Dt(c),h,a,u)}function jz(t,e){return nz(Dt(t=Ee(t,st)),Vy(e)?e:{next:e})}function Nc(t,e){return function(r,i){const s=new bt;return r.asyncQueue.enqueueAndForget(async()=>b6(await xw(r),i,s)),s.promise}(Dt(t),e)}function Gw(t,e,n){const r=n.docs.get(e._key),i=new mo(t);return new ei(t,i,e._key,r,new Ns(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bz={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zz=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=fo(e)}set(e,n,r){this._verifyNotCommitted();const i=Pi(e,this._firestore),s=Ap(i.converter,n,r),o=_p(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ge.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Pi(e,this._firestore);let o;return o=typeof(n=oe(n))=="string"||n instanceof es?Fw(this._dataReader,"WriteBatch.update",s._key,n,r,i):Mw(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ge.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Pi(e,this._firestore);return this._mutations=this._mutations.concat(new Xa(n._key,Ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Pi(t,e){if((t=oe(t)).firestore!==e)throw new z(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qz=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=fo(n)}get(n){const r=Pi(n,this._firestore),i=new xz(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return ee();const o=s[0];if(o.isFoundDocument())return new tc(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new tc(this._firestore,i,r._key,null,r.converter);throw ee()})}set(n,r,i){const s=Pi(n,this._firestore),o=Ap(s.converter,r,i),a=_p(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Pi(n,this._firestore);let a;return a=typeof(r=oe(r))=="string"||r instanceof es?Fw(this._dataReader,"Transaction.update",o._key,r,i,s):Mw(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Pi(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Pi(e,this._firestore),r=new mo(this._firestore);return super.get(e).then(i=>new ei(this._firestore,r,n._key,i._document,new Ns(!1,!1),n.converter))}};function Gz(t,e,n){t=Ee(t,st);const r=Object.assign(Object.assign({},Bz),n);return function(s){if(s.maxAttempts<1)throw new z(U.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new bt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await J6(s);new Q6(s.asyncQueue,c,a,o,u).Xa()}),u.promise}(Dt(t),i=>e(new qz(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wz(){return new bc("deleteField")}function Hz(){return new Dw("serverTimestamp")}function Kz(...t){return new Ow("arrayUnion",t)}function Qz(...t){return new Vw("arrayRemove",t)}function Yz(t){return new Lw("increment",t)}(function(e,n=!0){(function(i){Qa=i})(os),Hi(new Cr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new st(new rj(r.getProvider("auth-internal")),new aj(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),or(wT,"4.6.3",e),or(wT,"4.6.3","esm2017")})();const Jz="@firebase/firestore-compat",Xz="0.3.32";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new z("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(){if(typeof Uint8Array>"u")throw new z("unimplemented","Uint8Arrays are not available in this environment.")}function kS(){if(!Nj())throw new z("unimplemented","Blobs are unavailable in Firestore in this environment.")}class nc{constructor(e){this._delegate=e}static fromBase64String(e){return kS(),new nc(xr.fromBase64String(e))}static fromUint8Array(e){return CS(),new nc(xr.fromUint8Array(e))}toBase64(){return kS(),this._delegate.toBase64()}toUint8Array(){return CS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){return Zz(t,["next","error","complete"])}function Zz(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{enableIndexedDbPersistence(e,n){return cz(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return hz(e._delegate)}clearIndexedDbPersistence(e){return dz(e._delegate)}}class ix{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Yi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&cr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){sz(this._delegate,e,n,r)}enableNetwork(){return pz(this._delegate)}disableNetwork(){return mz(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Vb("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return fz(this._delegate)}onSnapshotsInSync(e){return jz(this._delegate,e)}get app(){if(!this._appCompat)throw new z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Da(this,$b(this._delegate,e))}catch(n){throw en(n,"collection()","Firestore.collection()")}}doc(e){try{return new zn(this,af(this._delegate,e))}catch(n){throw en(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Zt(this,oz(this._delegate,e))}catch(n){throw en(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Gz(this._delegate,n=>e(new sx(this,n)))}batch(){return Dt(this._delegate),new ox(new zz(this._delegate,e=>Nc(this._delegate,e)))}loadBundle(e){return gz(this._delegate,e)}namedQuery(e){return yz(this._delegate,e).then(n=>n?new Zt(this,n):null)}}class Pp extends qw{constructor(e){super(),this.firestore=e}convertBytes(e){return new nc(new xr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return zn.forKey(n,this.firestore,null)}}function t5(t){Z9(t)}class sx{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Pp(e)}get(e){const n=Ds(e);return this._delegate.get(n).then(r=>new rc(this._firestore,new ei(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ds(e);return r?(Ww("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ds(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ds(e);return this._delegate.delete(n),this}}class ox{constructor(e){this._delegate=e}set(e,n,r){const i=Ds(e);return r?(Ww("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ds(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ds(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class so{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new vl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ic(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=so.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new so(e,new Pp(e),n),i.set(n,s)),s}}so.INSTANCES=new WeakMap;class zn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Pp(e)}static forPath(e,n,r){if(e.length%2!==0)throw new z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new zn(n,new Je(n._delegate,r,new J(e)))}static forKey(e,n,r){return new zn(n,new Je(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Da(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Da(this.firestore,$b(this._delegate,e))}catch(n){throw en(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=oe(e),e instanceof Je?jb(this._delegate,e):!1}set(e,n){n=Ww("DocumentReference.set",n);try{return n?PS(this._delegate,e,n):PS(this._delegate,e)}catch(r){throw en(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?RS(this._delegate,e):RS(this._delegate,e,n,...r)}catch(i){throw en(i,"updateDoc()","DocumentReference.update()")}}delete(){return Uz(this._delegate)}onSnapshot(...e){const n=ax(e),r=ux(e,i=>new rc(this.firestore,new ei(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return rx(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Oz(this._delegate):(e==null?void 0:e.source)==="server"?n=Vz(this._delegate):n=Dz(this._delegate),n.then(r=>new rc(this.firestore,new ei(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new zn(this.firestore,e?this._delegate.withConverter(so.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function en(t,e,n){return t.message=t.message.replace(e,n),t}function ax(t){for(const e of t)if(typeof e=="object"&&!My(e))return e;return{}}function ux(t,e){var n,r;let i;return My(t[0])?i=t[0]:My(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class rc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new zn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return nx(this._delegate,e._delegate)}}class ic extends rc{data(e){const n=this._delegate.data(e);return this._delegate._converter||ej(n!==void 0),n}}class Zt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Pp(e)}where(e,n,r){try{return new Zt(this.firestore,_i(this._delegate,Tz(e,n,r)))}catch(i){throw en(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Zt(this.firestore,_i(this._delegate,Sz(e,n)))}catch(r){throw en(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Zt(this.firestore,_i(this._delegate,Az(e)))}catch(n){throw en(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Zt(this.firestore,_i(this._delegate,Pz(e)))}catch(n){throw en(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Zt(this.firestore,_i(this._delegate,Rz(...e)))}catch(n){throw en(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Zt(this.firestore,_i(this._delegate,Cz(...e)))}catch(n){throw en(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Zt(this.firestore,_i(this._delegate,kz(...e)))}catch(n){throw en(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Zt(this.firestore,_i(this._delegate,bz(...e)))}catch(n){throw en(n,"endAt()","Query.endAt()")}}isEqual(e){return Bb(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Mz(this._delegate):(e==null?void 0:e.source)==="server"?n=Fz(this._delegate):n=Lz(this._delegate),n.then(r=>new Fy(this.firestore,new ts(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=ax(e),r=ux(e,i=>new Fy(this.firestore,new ts(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return rx(this._delegate,n,r)}withConverter(e){return new Zt(this.firestore,e?this._delegate.withConverter(so.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class n5{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new ic(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Fy{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Zt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ic(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new n5(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new ic(this._firestore,r))})}isEqual(e){return nx(this._delegate,e._delegate)}}class Da extends Zt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new zn(this.firestore,e):null}doc(e){try{return e===void 0?new zn(this.firestore,af(this._delegate)):new zn(this.firestore,af(this._delegate,e))}catch(n){throw en(n,"doc()","CollectionReference.doc()")}}add(e){return $z(this._delegate,e).then(n=>new zn(this.firestore,n))}isEqual(e){return jb(this._delegate,e._delegate)}withConverter(e){return new Da(this.firestore,e?this._delegate.withConverter(so.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ds(t){return Ee(t,Je)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(...e){this._delegate=new es(...e)}static documentId(){return new Hw(qe.keyField().canonicalString())}isEqual(e){return e=oe(e),e instanceof es?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this._delegate=e}static serverTimestamp(){const e=Hz();return e._methodName="FieldValue.serverTimestamp",new Rs(e)}static delete(){const e=Wz();return e._methodName="FieldValue.delete",new Rs(e)}static arrayUnion(...e){const n=Kz(...e);return n._methodName="FieldValue.arrayUnion",new Rs(n)}static arrayRemove(...e){const n=Qz(...e);return n._methodName="FieldValue.arrayRemove",new Rs(n)}static increment(e){const n=Yz(e);return n._methodName="FieldValue.increment",new Rs(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r5={Firestore:ix,GeoPoint:yp,Timestamp:We,Blob:nc,Transaction:sx,WriteBatch:ox,DocumentReference:zn,DocumentSnapshot:rc,Query:Zt,QueryDocumentSnapshot:ic,QuerySnapshot:Fy,CollectionReference:Da,FieldPath:Hw,FieldValue:Rs,setLogLevel:t5,CACHE_SIZE_UNLIMITED:lz};function i5(t,e){t.INTERNAL.registerComponent(new Cr("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},r5)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s5(t){i5(t,(e,n)=>new ix(e,n,new e5)),t.registerVersion(Jz,Xz)}s5(ri);var o5={BASE_URL:"/clothing-shop",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{APP_FB_API_KEY:a5,APP_FB_AUTH_DOMAIN:u5,APP_FB_DATABASE_URL:l5,APP_FB_PROJECT_ID:c5,APP_FB_STORAGE_BUCKET:h5,APP_FB_MESSAGING_SENDER_ID:d5,APP_FB_APP_ID:f5}=o5,p5={apiKey:a5,authDomain:u5,databaseURL:l5,projectId:c5,storageBucket:h5,messagingSenderId:d5,appId:f5},m5=async(t,e)=>{if(!t)return;const n=lf.doc(`users/${t.uid}`);if(!(await n.get()).exists){const{displayName:i,email:s}=t,o=new Date;try{await n.set({displayName:i,email:s,createdAt:o,...e})}catch(a){console.log("error creating user",a)}}return n},lx=async t=>{const n=await lf.collection("carts").where("userId","==",t).get();if(n.empty){const r=lf.collection("carts").doc();return await r.set({userId:t,cartItems:[]}),r}else return n.docs[0].ref},g5=t=>t.docs.map(n=>{const{title:r,items:i}=n.data();return{routeName:encodeURI(r.toLowerCase()),id:n.id,title:r,items:i}}).reduce((n,r)=>(n[r.title.toLowerCase()]=r,n),{});ri.initializeApp(p5);const y5=()=>new Promise((t,e)=>{const n=Dc.onAuthStateChanged(r=>{n(),t(r)},e)}),Dc=ri.auth(),lf=ri.firestore(),cx=new ri.auth.GoogleAuthProvider;cx.setCustomParameters({prompt:"select_account"});const w8=()=>({type:Ms.FETCH_COLLECTIONS_START}),v5=t=>({type:Ms.FETCH_COLLECTIONS_SUCCESS,payload:t}),_5=t=>({type:Ms.FETCH_COLLECTIONS_FAILURE,payload:t});function*w5(){try{const e=yield lf.collection("collections").get(),n=yield nn(g5,e);yield cn(v5(n))}catch(t){yield cn(_5(t.message))}}function*E5(){yield Nr(Ms.FETCH_COLLECTIONS_START,w5)}function*I5(){yield qf([nn(E5)])}function T5(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function S5(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function A5(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var bS=t=>Array.isArray(t)?t:[t];function P5(t){const e=Array.isArray(t[0])?t[0]:t;return A5(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function R5(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var C5=class{constructor(t){this.value=t}deref(){return this.value}},k5=typeof WeakRef<"u"?WeakRef:C5,b5=0,xS=1;function Sh(){return{s:b5,v:void 0,o:null,p:null}}function hx(t,e={}){let n=Sh();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:u}=arguments;for(let p=0,g=u;p<g;p++){const I=arguments[p];if(typeof I=="function"||typeof I=="object"&&I!==null){let A=a.o;A===null&&(a.o=A=new WeakMap);const k=A.get(I);k===void 0?(a=Sh(),A.set(I,a)):a=k}else{let A=a.p;A===null&&(a.p=A=new Map);const k=A.get(I);k===void 0?(a=Sh(),A.set(I,a)):a=k}}const c=a;let h;if(a.s===xS)h=a.v;else if(h=t.apply(null,arguments),s++,r){const p=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;p!=null&&r(p,h)&&(h=p,s!==0&&s--),i=typeof h=="object"&&h!==null||typeof h=="function"?new k5(h):h}return c.s=xS,c.v=h,h}return o.clearCache=()=>{n=Sh(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function x5(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,u={},c=i.pop();typeof c=="object"&&(u=c,c=i.pop()),T5(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const h={...n,...u},{memoize:d,memoizeOptions:p=[],argsMemoize:g=hx,argsMemoizeOptions:I=[],devModeChecks:A={}}=h,k=bS(p),E=bS(I),_=P5(i),T=d(function(){return s++,c.apply(null,arguments)},...k),C=g(function(){o++;const V=R5(_,arguments);return a=T.apply(null,V),a},...E);return Object.assign(C,{resultFunc:c,memoizedResultFunc:T,dependencies:_,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:g})};return Object.assign(r,{withTypes:()=>r}),r}var ru=x5(hx),dx=Object.assign((t,e=ru)=>{S5(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,u)=>(o[n[u]]=a,o),{}))},{withTypes:()=>dx});const N5=t=>t.user,Kw=ru([N5],t=>t.currentUser),fx=t=>t.cart,Rp=ru([fx],t=>t.cartItems),D5=ru([fx],t=>t.hidden),O5=ru([Rp],t=>t.reduce((e,n)=>e+n.quantity,0)),E8=ru([Rp],t=>t.reduce((e,n)=>e+n.price*n.quantity,0)),px=()=>({type:wt.TOGGLE_CART_HIDDEN}),I8=t=>({type:wt.ADD_ITEM,payload:t}),T8=t=>({type:wt.REMOVE_ITEM,payload:t}),S8=t=>({type:wt.CLEAR_ITEM_FROM_CART,payload:t}),V5=()=>({type:wt.CLEAR_CART}),L5=t=>({type:wt.SET_CART_FROM_FIREBASE,payload:t}),M5=()=>({type:wt.UPDATE_CART_IN_FIREBASE_SUCCESS}),F5=t=>({type:wt.UPDATE_CART_IN_FIREBASE_FAILURE,payload:t});function*U5(){yield cn(V5())}function*$5(){yield Nr(ze.SIGN_OUT_SUCCESS,U5)}function*j5(){const t=yield FI(Kw);if(t)try{const e=yield lx(t.id),n=yield FI(Rp);yield e.update({cartItems:n}),yield cn(M5())}catch(e){yield cn(F5(e))}}function*B5({payload:t}){const n=yield(yield lx(t.id)).get();yield cn(L5(n.data().cartItems))}function*z5(){yield Nr(ze.SIGN_IN_SUCCESS,B5)}function*q5(){yield Nr([wt.ADD_ITEM,wt.REMOVE_ITEM,wt.CLEAR_ITEM_FROM_CART],j5)}function*G5(){yield qf([nn($5),nn(z5),nn(q5)])}const A8=()=>({type:ze.GOOGLE_SIGN_IN_START}),P8=t=>({type:ze.EMAIL_SIGN_IN_START,payload:t}),W5=t=>({type:ze.SIGN_IN_SUCCESS,payload:t}),Cp=t=>({type:ze.SIGN_IN_FAILURE,payload:t}),H5=()=>({type:ze.CHECK_USER_SESSION}),K5=()=>({type:ze.SIGN_OUT_START}),Q5=()=>({type:ze.SIGN_OUT_SUCCESS}),Y5=t=>({type:ze.SIGN_OUT_FAILURE,payload:t}),R8=t=>({type:ze.SIGN_UP_START,payload:t}),J5=({user:t,additionalData:e})=>({type:ze.SIGN_UP_SUCCESS,payload:{user:t,additionalData:e}}),X5=t=>({type:ze.SIGN_UP_FAILURE,payload:t});function*kp(t,e){try{const r=yield(yield nn(m5,t,e)).get();yield cn(W5({id:r.id,...r.data()}))}catch(n){yield cn(Cp(n))}}function*Z5(){try{const{user:t}=yield Dc.signInWithPopup(cx);yield kp(t)}catch(t){yield cn(Cp(t.message)),alert(t.message)}}function*eq({payload:{email:t,password:e}}){try{const{user:n}=yield Dc.signInWithEmailAndPassword(t,e);yield kp(n)}catch(n){yield cn(Cp(n.message)),alert(n.message)}}function*tq(){try{const t=yield y5();if(!t)return;yield kp(t)}catch(t){yield cn(Cp(t))}}function*nq(){try{yield Dc.signOut(),yield cn(Q5())}catch(t){yield cn(Y5(t))}}function*rq({payload:{email:t,password:e,displayName:n}}){try{const{user:r}=yield Dc.createUserWithEmailAndPassword(t,e);yield cn(J5({user:r,additionalData:{displayName:n}}))}catch(r){yield cn(X5(r))}}function*iq({payload:{user:t,additionalData:e}}){yield kp(t,e)}function*sq(){yield Nr(ze.GOOGLE_SIGN_IN_START,Z5)}function*oq(){yield Nr(ze.EMAIL_SIGN_IN_START,eq)}function*aq(){yield Nr(ze.CHECK_USER_SESSION,tq)}function*uq(){yield Nr(ze.SIGN_OUT_START,nq)}function*lq(){yield Nr(ze.SIGN_UP_START,rq)}function*cq(){yield Nr(ze.SIGN_UP_SUCCESS,iq)}function*hq(){yield qf([nn(sq),nn(oq),nn(aq),nn(uq),nn(lq),nn(cq)])}function*dq(){yield qf([nn(I5),nn(hq),nn(G5)])}const mx=MM(),fq=[mx],gx=r_(sF,u2(...fq));mx.run(dq);const pq=k2(gx),mq="modulepreload",gq=function(t){return"/clothing-shop/"+t},NS={},bp=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(a=>{if(a=gq(a),a in NS)return;NS[a]=!0;const u=a.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":mq,u||(h.as="script",h.crossOrigin=""),h.href=a,o&&h.setAttribute("nonce",o),document.head.appendChild(h),u)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},yq="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='50px'%20height='39px'%20viewBox='0%200%2050%2039'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3c!--%20Generator:%20Sketch%2053.2%20(72643)%20-%20https://sketchapp.com%20--%3e%3ctitle%3eGroup%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%20id='WiP'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Artboard'%20transform='translate(-90.000000,%20-38.000000)'%3e%3cg%20id='Group'%20transform='translate(90.000000,%2038.000000)'%3e%3cpolygon%20id='Rectangle'%20fill='%23808282'%20points='3%2014%2025%2026.5%2047%2014%2040.855176%2039%209.08421785%2039'%3e%3c/polygon%3e%3cpolygon%20id='Triangle'%20fill-opacity='0.262838724'%20fill='%23101A1A'%20points='25%208%2040%2039%2010%2039'%3e%3c/polygon%3e%3ccircle%20id='Oval'%20fill='%235E6363'%20cx='2'%20cy='9'%20r='2'%3e%3c/circle%3e%3ccircle%20id='Oval'%20fill='%235E6363'%20cx='25'%20cy='2'%20r='2'%3e%3c/circle%3e%3ccircle%20id='Oval'%20fill='%235E6363'%20cx='48'%20cy='9'%20r='2'%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",vq="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2018.1.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20407.453%20407.453'%20style='enable-background:new%200%200%20407.453%20407.453;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20style='fill:%23010002;'%20d='M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486%20c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z'/%3e%3cpath%20style='fill:%23010002;'%20d='M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243%20v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391%20c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386%20C375.191,103.891,371.557,100.258,367.062,100.258z'/%3e%3cpath%20style='fill:%23010002;'%20d='M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0%20c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394%20c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274%20C274.461,131.163,278.095,134.796,282.59,134.796z'/%3e%3cpath%20style='fill:%23010002;'%20d='M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907%20c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65%20c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z'/%3e%3cpath%20style='fill:%23010002;'%20d='M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129%20c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65%20c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z'/%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e",_q=({toggleCartHidden:t,cartItemCount:e})=>ue.jsxs("div",{className:"cart-icon",onClick:t,children:[ue.jsx("img",{className:"shopping-icon",src:vq,alt:"Shopping Icon"}),ue.jsx("span",{className:"item-count",children:e})]}),wq=t=>({toggleCartHidden:()=>t(px())}),Eq=t=>({cartItemCount:O5(t)}),Iq=jf(Eq,wq)(_q);var Qt=function(){return Qt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Qt.apply(this,arguments)};function sc(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Me="-ms-",_l="-moz-",Ae="-webkit-",yx="comm",xp="rule",Qw="decl",Tq="@import",vx="@keyframes",Sq="@layer",_x=Math.abs,Yw=String.fromCharCode,Uy=Object.assign;function Aq(t,e){return Rt(t,0)^45?(((e<<2^Rt(t,0))<<2^Rt(t,1))<<2^Rt(t,2))<<2^Rt(t,3):0}function wx(t){return t.trim()}function Mr(t,e){return(t=e.exec(t))?t[0]:t}function fe(t,e,n){return t.replace(e,n)}function ud(t,e,n){return t.indexOf(e,n)}function Rt(t,e){return t.charCodeAt(e)|0}function Oa(t,e,n){return t.slice(e,n)}function pr(t){return t.length}function Ex(t){return t.length}function Ju(t,e){return e.push(t),t}function Pq(t,e){return t.map(e).join("")}function DS(t,e){return t.filter(function(n){return!Mr(n,e)})}var Np=1,Va=1,Ix=0,Qn=0,gt=0,iu="";function Dp(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Np,column:Va,length:o,return:"",siblings:a}}function wi(t,e){return Uy(Dp("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function bo(t){for(;t.root;)t=wi(t.root,{children:[t]});Ju(t,t.siblings)}function Rq(){return gt}function Cq(){return gt=Qn>0?Rt(iu,--Qn):0,Va--,gt===10&&(Va=1,Np--),gt}function ar(){return gt=Qn<Ix?Rt(iu,Qn++):0,Va++,gt===10&&(Va=1,Np++),gt}function js(){return Rt(iu,Qn)}function ld(){return Qn}function Op(t,e){return Oa(iu,t,e)}function $y(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kq(t){return Np=Va=1,Ix=pr(iu=t),Qn=0,[]}function bq(t){return iu="",t}function Ym(t){return wx(Op(Qn-1,jy(t===91?t+2:t===40?t+1:t)))}function xq(t){for(;(gt=js())&&gt<33;)ar();return $y(t)>2||$y(gt)>3?"":" "}function Nq(t,e){for(;--e&&ar()&&!(gt<48||gt>102||gt>57&&gt<65||gt>70&&gt<97););return Op(t,ld()+(e<6&&js()==32&&ar()==32))}function jy(t){for(;ar();)switch(gt){case t:return Qn;case 34:case 39:t!==34&&t!==39&&jy(gt);break;case 40:t===41&&jy(t);break;case 92:ar();break}return Qn}function Dq(t,e){for(;ar()&&t+gt!==57;)if(t+gt===84&&js()===47)break;return"/*"+Op(e,Qn-1)+"*"+Yw(t===47?t:ar())}function Oq(t){for(;!$y(js());)ar();return Op(t,Qn)}function Vq(t){return bq(cd("",null,null,null,[""],t=kq(t),0,[0],t))}function cd(t,e,n,r,i,s,o,a,u){for(var c=0,h=0,d=o,p=0,g=0,I=0,A=1,k=1,E=1,_=0,T="",C=i,L=s,V=r,v=T;k;)switch(I=_,_=ar()){case 40:if(I!=108&&Rt(v,d-1)==58){ud(v+=fe(Ym(_),"&","&\f"),"&\f",_x(c?a[c-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:v+=Ym(_);break;case 9:case 10:case 13:case 32:v+=xq(I);break;case 92:v+=Nq(ld()-1,7);continue;case 47:switch(js()){case 42:case 47:Ju(Lq(Dq(ar(),ld()),e,n,u),u);break;default:v+="/"}break;case 123*A:a[c++]=pr(v)*E;case 125*A:case 59:case 0:switch(_){case 0:case 125:k=0;case 59+h:E==-1&&(v=fe(v,/\f/g,"")),g>0&&pr(v)-d&&Ju(g>32?VS(v+";",r,n,d-1,u):VS(fe(v," ","")+";",r,n,d-2,u),u);break;case 59:v+=";";default:if(Ju(V=OS(v,e,n,c,h,i,a,T,C=[],L=[],d,s),s),_===123)if(h===0)cd(v,e,V,V,C,s,d,a,L);else switch(p===99&&Rt(v,3)===110?100:p){case 100:case 108:case 109:case 115:cd(t,V,V,r&&Ju(OS(t,V,V,0,0,i,a,T,i,C=[],d,L),L),i,L,d,a,r?C:L);break;default:cd(v,V,V,V,[""],L,0,a,L)}}c=h=g=0,A=E=1,T=v="",d=o;break;case 58:d=1+pr(v),g=I;default:if(A<1){if(_==123)--A;else if(_==125&&A++==0&&Cq()==125)continue}switch(v+=Yw(_),_*A){case 38:E=h>0?1:(v+="\f",-1);break;case 44:a[c++]=(pr(v)-1)*E,E=1;break;case 64:js()===45&&(v+=Ym(ar())),p=js(),h=d=pr(T=v+=Oq(ld())),_++;break;case 45:I===45&&pr(v)==2&&(A=0)}}return s}function OS(t,e,n,r,i,s,o,a,u,c,h,d){for(var p=i-1,g=i===0?s:[""],I=Ex(g),A=0,k=0,E=0;A<r;++A)for(var _=0,T=Oa(t,p+1,p=_x(k=o[A])),C=t;_<I;++_)(C=wx(k>0?g[_]+" "+T:fe(T,/&\f/g,g[_])))&&(u[E++]=C);return Dp(t,e,n,i===0?xp:a,u,c,h,d)}function Lq(t,e,n,r){return Dp(t,e,n,yx,Yw(Rq()),Oa(t,2,-2),0,r)}function VS(t,e,n,r,i){return Dp(t,e,n,Qw,Oa(t,0,r),Oa(t,r+1,-1),r,i)}function Tx(t,e,n){switch(Aq(t,e)){case 5103:return Ae+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+t+t;case 4789:return _l+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+t+_l+t+Me+t+t;case 5936:switch(Rt(t,e+11)){case 114:return Ae+t+Me+fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ae+t+Me+fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ae+t+Me+fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ae+t+Me+t+t;case 6165:return Ae+t+Me+"flex-"+t+t;case 5187:return Ae+t+fe(t,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+Me+"flex-$1$2")+t;case 5443:return Ae+t+Me+"flex-item-"+fe(t,/flex-|-self/g,"")+(Mr(t,/flex-|baseline/)?"":Me+"grid-row-"+fe(t,/flex-|-self/g,""))+t;case 4675:return Ae+t+Me+"flex-line-pack"+fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ae+t+Me+fe(t,"shrink","negative")+t;case 5292:return Ae+t+Me+fe(t,"basis","preferred-size")+t;case 6060:return Ae+"box-"+fe(t,"-grow","")+Ae+t+Me+fe(t,"grow","positive")+t;case 4554:return Ae+fe(t,/([^-])(transform)/g,"$1"+Ae+"$2")+t;case 6187:return fe(fe(fe(t,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),t,"")+t;case 5495:case 3959:return fe(t,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return fe(fe(t,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+Me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+t+t;case 4200:if(!Mr(t,/flex-|baseline/))return Me+"grid-column-align"+Oa(t,e)+t;break;case 2592:case 3360:return Me+fe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Mr(r.props,/grid-\w+-end/)})?~ud(t+(n=n[e].value),"span",0)?t:Me+fe(t,"-start","")+t+Me+"grid-row-span:"+(~ud(n,"span",0)?Mr(n,/\d+/):+Mr(n,/\d+/)-+Mr(t,/\d+/))+";":Me+fe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Mr(r.props,/grid-\w+-start/)})?t:Me+fe(fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return fe(t,/(.+)-inline(.+)/,Ae+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pr(t)-1-e>6)switch(Rt(t,e+1)){case 109:if(Rt(t,e+4)!==45)break;case 102:return fe(t,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+_l+(Rt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ud(t,"stretch",0)?Tx(fe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return Me+i+":"+s+c+(o?Me+i+"-span:"+(a?u:+u-+s)+c:"")+t});case 4949:if(Rt(t,e+6)===121)return fe(t,":",":"+Ae)+t;break;case 6444:switch(Rt(t,Rt(t,14)===45?18:11)){case 120:return fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(Rt(t,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+Me+"$2box$3")+t;case 100:return fe(t,":",":"+Me)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(t,"scroll-","scroll-snap-")+t}return t}function cf(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Mq(t,e,n,r){switch(t.type){case Sq:if(t.children.length)break;case Tq:case Qw:return t.return=t.return||t.value;case yx:return"";case vx:return t.return=t.value+"{"+cf(t.children,r)+"}";case xp:if(!pr(t.value=t.props.join(",")))return""}return pr(n=cf(t.children,r))?t.return=t.value+"{"+n+"}":""}function Fq(t){var e=Ex(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Uq(t){return function(e){e.root||(e=e.return)&&t(e)}}function $q(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Qw:t.return=Tx(t.value,t.length,n);return;case vx:return cf([wi(t,{value:fe(t.value,"@","@"+Ae)})],r);case xp:if(t.length)return Pq(n=t.props,function(i){switch(Mr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bo(wi(t,{props:[fe(i,/:(read-\w+)/,":"+_l+"$1")]})),bo(wi(t,{props:[i]})),Uy(t,{props:DS(n,r)});break;case"::placeholder":bo(wi(t,{props:[fe(i,/:(plac\w+)/,":"+Ae+"input-$1")]})),bo(wi(t,{props:[fe(i,/:(plac\w+)/,":"+_l+"$1")]})),bo(wi(t,{props:[fe(i,/:(plac\w+)/,Me+"input-$1")]})),bo(wi(t,{props:[i]})),Uy(t,{props:DS(n,r)});break}return""})}}var jq={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rn={},La=typeof process<"u"&&Rn!==void 0&&(Rn.REACT_APP_SC_ATTR||Rn.SC_ATTR)||"data-styled",Sx="active",Ax="data-styled-version",Vp="6.1.11",Jw=`/*!sc*/
`,Xw=typeof window<"u"&&"HTMLElement"in window,Bq=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rn!==void 0&&Rn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rn.REACT_APP_SC_DISABLE_SPEEDY!==""?Rn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rn!==void 0&&Rn.SC_DISABLE_SPEEDY!==void 0&&Rn.SC_DISABLE_SPEEDY!==""&&Rn.SC_DISABLE_SPEEDY!=="false"&&Rn.SC_DISABLE_SPEEDY),zq={},Lp=Object.freeze([]),Ma=Object.freeze({});function Px(t,e,n){return n===void 0&&(n=Ma),t.theme!==n.theme&&t.theme||e||n.theme}var Rx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qq=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gq=/(^-|-$)/g;function LS(t){return t.replace(qq,"-").replace(Gq,"")}var Wq=/(a)(d)/gi,Ah=52,MS=function(t){return String.fromCharCode(t+(t>25?39:97))};function By(t){var e,n="";for(e=Math.abs(t);e>Ah;e=e/Ah|0)n=MS(e%Ah)+n;return(MS(e%Ah)+n).replace(Wq,"$1-$2")}var Jm,Cx=5381,Qo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},kx=function(t){return Qo(Cx,t)};function bx(t){return By(kx(t)>>>0)}function Hq(t){return t.displayName||t.name||"Component"}function Xm(t){return typeof t=="string"&&!0}var xx=typeof Symbol=="function"&&Symbol.for,Nx=xx?Symbol.for("react.memo"):60115,Kq=xx?Symbol.for("react.forward_ref"):60112,Qq={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yq={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jq=((Jm={})[Kq]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jm[Nx]=Dx,Jm);function FS(t){return("type"in(e=t)&&e.type.$$typeof)===Nx?Dx:"$$typeof"in t?Jq[t.$$typeof]:Qq;var e}var Xq=Object.defineProperty,Zq=Object.getOwnPropertyNames,US=Object.getOwnPropertySymbols,eG=Object.getOwnPropertyDescriptor,tG=Object.getPrototypeOf,$S=Object.prototype;function Ox(t,e,n){if(typeof e!="string"){if($S){var r=tG(e);r&&r!==$S&&Ox(t,r,n)}var i=Zq(e);US&&(i=i.concat(US(e)));for(var s=FS(t),o=FS(e),a=0;a<i.length;++a){var u=i[a];if(!(u in Yq||n&&n[u]||o&&u in o||s&&u in s)){var c=eG(e,u);try{Xq(t,u,c)}catch{}}}}return t}function Fa(t){return typeof t=="function"}function Zw(t){return typeof t=="object"&&"styledComponentId"in t}function Os(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function zy(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function oc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function qy(t,e,n){if(n===void 0&&(n=!1),!n&&!oc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=qy(t[r],e[r]);else if(oc(e))for(var r in e)t[r]=qy(t[r],e[r]);return t}function eE(t,e){Object.defineProperty(t,"toString",{value:e})}function Oc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var nG=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Oc(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Jw);return n},t}(),hd=new Map,hf=new Map,dd=1,Ph=function(t){if(hd.has(t))return hd.get(t);for(;hf.has(dd);)dd++;var e=dd++;return hd.set(t,e),hf.set(e,t),e},rG=function(t,e){dd=e+1,hd.set(t,e),hf.set(e,t)},iG="style[".concat(La,"][").concat(Ax,'="').concat(Vp,'"]'),sG=new RegExp("^".concat(La,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),oG=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},aG=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Jw),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(sG);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(rG(h,c),oG(t,h,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function uG(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vx=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(La,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(La,Sx),r.setAttribute(Ax,Vp);var o=uG();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},lG=function(){function t(e){this.element=Vx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Oc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),cG=function(){function t(e){this.element=Vx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),hG=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),jS=Xw,dG={isServer:!Xw,useCSSOMInjection:!Bq},df=function(){function t(e,n,r){e===void 0&&(e=Ma),n===void 0&&(n={});var i=this;this.options=Qt(Qt({},dG),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Xw&&jS&&(jS=!1,function(s){for(var o=document.querySelectorAll(iG),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(La)!==Sx&&(aG(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),eE(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(d){var p=function(E){return hf.get(E)}(d);if(p===void 0)return"continue";var g=s.names.get(p),I=o.getGroup(d);if(g===void 0||I.length===0)return"continue";var A="".concat(La,".g").concat(d,'[id="').concat(p,'"]'),k="";g!==void 0&&g.forEach(function(E){E.length>0&&(k+="".concat(E,","))}),u+="".concat(I).concat(A,'{content:"').concat(k,'"}').concat(Jw)},h=0;h<a;h++)c(h);return u}(i)})}return t.registerId=function(e){return Ph(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Qt(Qt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new hG(i):r?new lG(i):new cG(i)}(this.options),new nG(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ph(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Ph(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ph(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),fG=/&/g,pG=/^\s*\/\/.*$/gm;function Lx(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Lx(n.children,e)),n})}function mG(t){var e,n,r,i=Ma,s=i.options,o=s===void 0?Ma:s,a=i.plugins,u=a===void 0?Lp:a,c=function(p,g,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):p},h=u.slice();h.push(function(p){p.type===xp&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(fG,n).replace(r,c))}),o.prefix&&h.push($q),h.push(Mq);var d=function(p,g,I,A){g===void 0&&(g=""),I===void 0&&(I=""),A===void 0&&(A="&"),e=A,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(pG,""),E=Vq(I||g?"".concat(I," ").concat(g," { ").concat(k," }"):k);o.namespace&&(E=Lx(E,o.namespace));var _=[];return cf(E,Fq(h.concat(Uq(function(T){return _.push(T)})))),_};return d.hash=u.length?u.reduce(function(p,g){return g.name||Oc(15),Qo(p,g.name)},Cx).toString():"",d}var gG=new df,Gy=mG(),Mx=ae.createContext({shouldForwardProp:void 0,styleSheet:gG,stylis:Gy});Mx.Consumer;ae.createContext(void 0);function Wy(){return ln.useContext(Mx)}var yG=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Gy);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,eE(this,function(){throw Oc(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Gy),this.name+e.hash},t}(),vG=function(t){return t>="A"&&t<="Z"};function BS(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;vG(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Fx=function(t){return t==null||t===!1||t===""},Ux=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Fx(s)&&(Array.isArray(s)&&s.isCss||Fa(s)?r.push("".concat(BS(i),":"),s,";"):oc(s)?r.push.apply(r,sc(sc(["".concat(i," {")],Ux(s),!1),["}"],!1)):r.push("".concat(BS(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in jq||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ji(t,e,n,r){if(Fx(t))return[];if(Zw(t))return[".".concat(t.styledComponentId)];if(Fa(t)){if(!Fa(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ji(i,e,n,r)}var s;return t instanceof yG?n?(t.inject(n,r),[t.getName(r)]):[t]:oc(t)?Ux(t):Array.isArray(t)?Array.prototype.concat.apply(Lp,t.map(function(o){return ji(o,e,n,r)})):[t.toString()]}function $x(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Fa(n)&&!Zw(n))return!1}return!0}var _G=kx(Vp),wG=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$x(e),this.componentId=n,this.baseHash=Qo(_G,n),this.baseStyle=r,df.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Os(i,this.staticRulesId);else{var s=zy(ji(this.rules,e,n,r)),o=By(Qo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Os(i,o),this.staticRulesId=o}else{for(var u=Qo(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var d=this.rules[h];if(typeof d=="string")c+=d;else if(d){var p=zy(ji(d,e,n,r));u=Qo(u,p+h),c+=p}}if(c){var g=By(u>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=Os(i,g)}}return i},t}(),tE=ae.createContext(void 0);tE.Consumer;var Zm={};function EG(t,e,n){var r=Zw(t),i=t,s=!Xm(t),o=e.attrs,a=o===void 0?Lp:o,u=e.componentId,c=u===void 0?function(C,L){var V=typeof C!="string"?"sc":LS(C);Zm[V]=(Zm[V]||0)+1;var v="".concat(V,"-").concat(bx(Vp+V+Zm[V]));return L?"".concat(L,"-").concat(v):v}(e.displayName,e.parentComponentId):u,h=e.displayName,d=h===void 0?function(C){return Xm(C)?"styled.".concat(C):"Styled(".concat(Hq(C),")")}(t):h,p=e.displayName&&e.componentId?"".concat(LS(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;I=function(C,L){return A(C,L)&&k(C,L)}}else I=A}var E=new wG(n,p,r?i.componentStyle:void 0);function _(C,L){return function(V,v,y){var S=V.attrs,P=V.componentStyle,x=V.defaultProps,O=V.foldedComponentIds,R=V.styledComponentId,_e=V.target,he=ae.useContext(tE),ft=Wy(),Ne=V.shouldForwardProp||ft.shouldForwardProp,W=Px(v,he,x)||Ma,q=function(Y,Z,te){for(var se,Te=Qt(Qt({},Z),{className:void 0,theme:te}),$e=0;$e<Y.length;$e+=1){var je=Fa(se=Y[$e])?se(Te):se;for(var de in je)Te[de]=de==="className"?Os(Te[de],je[de]):de==="style"?Qt(Qt({},Te[de]),je[de]):je[de]}return Z.className&&(Te.className=Os(Te.className,Z.className)),Te}(S,v,W),B=q.as||_e,b={};for(var N in q)q[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&q.theme===W||(N==="forwardedAs"?b.as=q.forwardedAs:Ne&&!Ne(N,B)||(b[N]=q[N]));var D=function(Y,Z){var te=Wy(),se=Y.generateAndInjectStyles(Z,te.styleSheet,te.stylis);return se}(P,q),j=Os(O,R);return D&&(j+=" "+D),q.className&&(j+=" "+q.className),b[Xm(B)&&!Rx.has(B)?"class":"className"]=j,b.ref=y,ln.createElement(B,b)}(T,C,L)}_.displayName=d;var T=ae.forwardRef(_);return T.attrs=g,T.componentStyle=E,T.displayName=d,T.shouldForwardProp=I,T.foldedComponentIds=r?Os(i.foldedComponentIds,i.styledComponentId):"",T.styledComponentId=p,T.target=r?i.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(L){for(var V=[],v=1;v<arguments.length;v++)V[v-1]=arguments[v];for(var y=0,S=V;y<S.length;y++)qy(L,S[y],!0);return L}({},i.defaultProps,C):C}}),eE(T,function(){return".".concat(T.styledComponentId)}),s&&Ox(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function zS(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var qS=function(t){return Object.assign(t,{isCss:!0})};function su(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Fa(t)||oc(t))return qS(ji(zS(Lp,sc([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ji(r):qS(ji(zS(r,e)))}function Hy(t,e,n){if(n===void 0&&(n=Ma),!e)throw Oc(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,su.apply(void 0,sc([i],s,!1)))};return r.attrs=function(i){return Hy(t,e,Qt(Qt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Hy(t,e,Qt(Qt({},n),i))},r}var jx=function(t){return Hy(EG,t)},Yn=jx;Rx.forEach(function(t){Yn[t]=jx(t)});var IG=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=$x(e),df.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(zy(ji(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&df.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function TG(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=su.apply(void 0,sc([t],e,!1)),i="sc-global-".concat(bx(JSON.stringify(r))),s=new IG(r,i),o=function(u){var c=Wy(),h=ae.useContext(tE),d=ae.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(d,u,c.styleSheet,h,c.stylis),ae.useLayoutEffect(function(){if(!c.styleSheet.server)return a(d,u,c.styleSheet,h,c.stylis),function(){return s.removeStyles(d,c.styleSheet)}},[d,u,c.styleSheet,h,c.stylis]),null};function a(u,c,h,d,p){if(s.isStatic)s.renderStyles(u,zq,h,p);else{var g=Qt(Qt({},c),{theme:Px(c,d,o.defaultProps)});s.renderStyles(u,g,h,p)}}return ae.memo(o)}const SG=su`
	background-color: black;
	color: white;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;

		@media screen and (max-width: 800px) {
			background-color: black;
			color: white;
			border: none;
		}
	}
`,AG=su`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;

		@media screen and (max-width: 800px) {
			background-color: white;
			color: black;
			border: 1px solid black;
		}
	}
`,PG=su`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;

		@media screen and (max-width: 800px) {
			background-color: #4285f4;
			color: white;
		}
	}
`,RG=({isGoogleSignIn:t,inverted:e})=>t?PG:e?AG:SG,CG=Yn.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;

	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	transition: all 0.2s;

	&:focus {
		outline: none;
	}

	&:active {
		transform: translateY(0.3rem);
		-webkit-tap-highlight-color: transparent;
	}

	${RG}
`,kG=({children:t,...e})=>ue.jsx(CG,{...e,children:t}),bG=({item:{name:t,price:e,quantity:n,imageUrl:r}})=>ue.jsxs("div",{className:"cart-item",children:[ue.jsx("img",{src:r,alt:""}),ue.jsxs("div",{className:"item-details",children:[ue.jsx("span",{className:"name",children:t}),ue.jsxs("span",{className:"price",children:[n," x $",e]})]})]}),xG=ae.memo(bG),NG=({cartItems:t,history:e,dispatch:n})=>ue.jsxs("div",{className:"cart-dropdown",children:[ue.jsx("div",{className:"cart-items",children:t.length?t.map(r=>ue.jsx(xG,{item:r},r.id)):ue.jsx("span",{className:"empty-message",children:"Your cart is empty"})}),ue.jsx(kG,{onClick:()=>{e.push("/checkout"),n(px())},children:"GO TO CHECKOUT"})]}),DG=t=>({cartItems:Rp(t)}),OG=WV(jf(DG)(NG)),Bx=su`
	padding: 10px 15px;
	cursor: pointer;
`,VG=Yn.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 0px;
	}
`,LG=Yn(e_)`
	height: 100%;
	width: 70px;
	padding: 25px;

	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 0;
	}
`,MG=Yn.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`,GS=Yn(e_)`
	${Bx}
`,FG=Yn.div`
	${Bx}
`,UG=({currentUser:t,hidden:e,signOutStart:n})=>ue.jsxs(VG,{children:[ue.jsx(LG,{to:"/",children:ue.jsx("img",{className:"logo",src:yq,alt:"Logo"})}),ue.jsxs(MG,{children:[ue.jsx(GS,{to:"/shop",children:"SHOP"}),t?ue.jsx(FG,{onClick:n,children:"SIGN OUT"}):ue.jsx(GS,{to:"/signIn",children:"SIGN IN"}),ue.jsx(Iq,{})]}),e?null:ue.jsx(OG,{})]}),$G=dx({currentUser:Kw,hidden:D5}),jG=t=>({signOutStart:()=>t(K5())}),BG=jf($G,jG)(UG),zG=Yn.div`
	height: 60vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`,qG=Yn.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 3px solid rgba(195, 195, 195, 0.6);
	border-radius: 50%;
	border-top-color: #636767;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;
	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`,GG=()=>ue.jsx(zG,{children:ue.jsx(qG,{})}),WG=Yn.div`
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,HG=Yn.div`
	display: inline-block;
	background-image: ${({imageUrl:t})=>`url(${t})`};
	background-size: cover;
	background-position: center;
	width: 40vh;
	height: 40vh;
`,KG=Yn.h2`
	font-size: 28px;
	color: #2f8e89;
`,QG=({message:t})=>ue.jsxs(WG,{children:[ue.jsx(HG,{imageUrl:"https://i.imgur.com/yW2W9SC.png"}),ue.jsx(KG,{children:t})]});class YG extends ae.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.log("Error Boundary:",e),console.log("Info:",n)}render(){return this.state.hasError?ue.jsx(QG,{message:"Sorry this page is broken"}):this.props.children}}const JG=TG`
	body {
		font-family: 'Open Sans Condensed' !important;
		padding: 20px 40px;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`,XG=ln.lazy(()=>bp(()=>import("./homepage.component-DJ_ZL4fT.js"),__vite__mapDeps([0,1]))),ZG=ln.lazy(()=>bp(()=>import("./shop.component-DoN4ih-H.js"),[])),e8=ln.lazy(()=>bp(()=>import("./sign-in-and-sign-out.component-CkvLE8Zd.js"),__vite__mapDeps([2,3]))),t8=ln.lazy(()=>bp(()=>import("./checkout.compenent-V2HsGUZJ.js"),[])),n8=({checkUserSession:t,currentUser:e})=>(ln.useEffect(()=>{t()},[t]),ue.jsxs("div",{children:[ue.jsx(JG,{}),ue.jsx(BG,{}),ue.jsx(YG,{children:ue.jsx(ln.Suspense,{fallback:ue.jsx(GG,{}),children:ue.jsxs(GV,{children:[ue.jsx(gh,{exact:!0,path:"/",component:XG}),ue.jsx(gh,{path:"/shop",component:ZG}),ue.jsx(gh,{exact:!0,path:"/checkout",component:t8}),ue.jsx(gh,{exact:!0,path:"/signin",render:()=>e?ue.jsx(yI,{to:"/"}):ue.jsx(e8,{})}),ue.jsx(yI,{to:"/"})]})})})]})),r8=t=>({currentUser:Kw(t)}),i8=t=>({checkUserSession:()=>t(H5())}),s8=jf(r8,i8)(n8);eg.createRoot(document.getElementById("root")).render(ue.jsx(ae.StrictMode,{children:ue.jsx(YL,{store:gx,children:ue.jsx(HV,{basename:"/clothing-shop",children:ue.jsx(CP,{persistor:pq,children:ue.jsx(s8,{})})})})}));export{kG as C,gh as R,GG as S,bp as _,dx as a,jf as b,ru as c,GV as d,yI as e,w8 as f,A8 as g,P8 as h,S8 as i,ue as j,I8 as k,T8 as l,qO as m,Rp as n,E8 as o,Yn as p,a2 as q,ln as r,R8 as s,Iu as t,ff as u,WV as w};
