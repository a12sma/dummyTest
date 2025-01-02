var L={exports:{}},S={},U={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W;function re(){if(W)return r;W=1;var d=Symbol.for("react.element"),b=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),E=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function h(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,F={};function v(e,t,n){this.props=e,this.context=t,this.refs=F,this.updater=n||R}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N(){}N.prototype=v.prototype;function q(e,t,n){this.props=e,this.context=t,this.refs=F,this.updater=n||R}var g=q.prototype=new N;g.constructor=q,A(g,v.prototype),g.isPureReactComponent=!0;var V=Array.isArray,J=Object.prototype.hasOwnProperty,I={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function B(e,t,n){var u,o={},c=null,f=null;if(t!=null)for(u in t.ref!==void 0&&(f=t.ref),t.key!==void 0&&(c=""+t.key),t)J.call(t,u)&&!M.hasOwnProperty(u)&&(o[u]=t[u]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var i=Array(s),y=0;y<s;y++)i[y]=arguments[y+2];o.children=i}if(e&&e.defaultProps)for(u in s=e.defaultProps,s)o[u]===void 0&&(o[u]=s[u]);return{$$typeof:d,type:e,key:c,ref:f,props:o,_owner:I.current}}function X(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function T(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Z(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var z=/\/+/g;function D(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Z(""+e.key):t.toString(36)}function k(e,t,n,u,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var f=!1;if(e===null)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case d:case b:f=!0}}if(f)return f=e,o=o(f),e=u===""?"."+D(f,0):u,V(o)?(n="",e!=null&&(n=e.replace(z,"$&/")+"/"),k(o,t,n,"",function(y){return y})):o!=null&&(T(o)&&(o=X(o,n+(!o.key||f&&f.key===o.key?"":(""+o.key).replace(z,"$&/")+"/")+e)),t.push(o)),1;if(f=0,u=u===""?".":u+":",V(e))for(var s=0;s<e.length;s++){c=e[s];var i=u+D(c,s);f+=k(c,t,n,i,o)}else if(i=h(e),typeof i=="function")for(e=i.call(e),s=0;!(c=e.next()).done;)c=c.value,i=u+D(c,s++),f+=k(c,t,n,i,o);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function w(e,t,n){if(e==null)return e;var u=[],o=0;return k(e,u,"","",function(c){return t.call(n,c,o++)}),u}function ee(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},$={transition:null},te={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:$,ReactCurrentOwner:I};function H(){throw Error("act(...) is not supported in production builds of React.")}return r.Children={map:w,forEach:function(e,t,n){w(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return w(e,function(){t++}),t},toArray:function(e){return w(e,function(t){return t})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=v,r.Fragment=j,r.Profiler=O,r.PureComponent=q,r.StrictMode=C,r.Suspense=a,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,r.act=H,r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=A({},e.props),o=e.key,c=e.ref,f=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,f=I.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)J.call(t,i)&&!M.hasOwnProperty(i)&&(u[i]=t[i]===void 0&&s!==void 0?s[i]:t[i])}var i=arguments.length-2;if(i===1)u.children=n;else if(1<i){s=Array(i);for(var y=0;y<i;y++)s[y]=arguments[y+2];u.children=s}return{$$typeof:d,type:e.type,key:o,ref:c,props:u,_owner:f}},r.createContext=function(e){return e={$$typeof:E,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:P,_context:e},e.Consumer=e},r.createElement=B,r.createFactory=function(e){var t=B.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:m,render:e}},r.isValidElement=T,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:ee}},r.memo=function(e,t){return{$$typeof:x,type:e,compare:t===void 0?null:t}},r.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},r.unstable_act=H,r.useCallback=function(e,t){return l.current.useCallback(e,t)},r.useContext=function(e){return l.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return l.current.useDeferredValue(e)},r.useEffect=function(e,t){return l.current.useEffect(e,t)},r.useId=function(){return l.current.useId()},r.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)},r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return l.current.useMemo(e,t)},r.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)},r.useRef=function(e){return l.current.useRef(e)},r.useState=function(e){return l.current.useState(e)},r.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)},r.useTransition=function(){return l.current.useTransition()},r.version="18.3.1",r}var Y;function Q(){return Y||(Y=1,U.exports=re()),U.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G;function ne(){if(G)return S;G=1;var d=Q(),b=Symbol.for("react.element"),j=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,O=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function E(m,a,x){var p,_={},h=null,R=null;x!==void 0&&(h=""+x),a.key!==void 0&&(h=""+a.key),a.ref!==void 0&&(R=a.ref);for(p in a)C.call(a,p)&&!P.hasOwnProperty(p)&&(_[p]=a[p]);if(m&&m.defaultProps)for(p in a=m.defaultProps,a)_[p]===void 0&&(_[p]=a[p]);return{$$typeof:b,type:m,key:h,ref:R,props:_,_owner:O.current}}return S.Fragment=j,S.jsx=E,S.jsxs=E,S}var K;function oe(){return K||(K=1,L.exports=ne()),L.exports}var ue=oe(),ie=Q();export{ie as a,ue as j,Q as r};