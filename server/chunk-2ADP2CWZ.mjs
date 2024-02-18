import './polyfills.server.mjs';
import{c as R}from"./chunk-J7RF7HU7.mjs";import{c as S}from"./chunk-ZCVO2WXJ.mjs";import{b as v}from"./chunk-MGCQ5COH.mjs";import{a as u,c as g}from"./chunk-TO5YMVMS.mjs";import{a as k}from"./chunk-QZXE35H7.mjs";import{b as y,f as O,g as D,h as C,l as A}from"./chunk-UKOR4UMD.mjs";import{i as c}from"./chunk-ITQ3FBGB.mjs";var w=0,q=0,b=new WeakMap,h=e=>({create(t){return B(e,t)},dismiss(t,o,i){return G(document,t,o,e,i)},getTop(){return c(this,null,function*(){return f(document,e)})}}),Z=h("ion-alert"),ee=h("ion-action-sheet");var te=h("ion-modal");var ne=h("ion-popover");var oe=e=>{typeof document<"u"&&j(document);let n=w++;e.overlayIndex=n},ie=e=>(e.hasAttribute("id")||(e.id=`ion-overlay-${++q}`),e.id),B=(e,n)=>typeof window<"u"&&typeof window.customElements<"u"?window.customElements.whenDefined(e).then(()=>{let t=document.createElement(e);return t.classList.add("overlay-hidden"),Object.assign(t,Object.assign(Object.assign({},n),{hasController:!0})),x(document).appendChild(t),new Promise(o=>y(t,o))}):Promise.resolve(),m='[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',I=(e,n)=>{let t=e.querySelector(m),o=t?.shadowRoot;o&&(t=o.querySelector(m)||t),t?A(t):n.focus()},_=e=>e.classList.contains("overlay-hidden"),L=(e,n)=>{let t=Array.from(e.querySelectorAll(m)),o=t.length>0?t[t.length-1]:null,i=o?.shadowRoot;i&&(o=i.querySelector(m)||o),o?o.focus():n.focus()},V=(e,n)=>{let t=f(n,"ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover"),o=e.target;if(!t||!o||t.classList.contains("ion-disable-focus-trap"))return;let i=()=>{if(t===o)t.lastFocus=void 0;else{let a=C(t);if(!a.contains(o))return;let s=a.querySelector(".ion-overlay-wrapper");if(!s)return;if(s.contains(o)||o===a.querySelector("ion-backdrop"))t.lastFocus=o;else{let d=t.lastFocus;I(s,t),d===n.activeElement&&L(s,t),t.lastFocus=n.activeElement}}},r=()=>{if(t.contains(o))t.lastFocus=o;else{let a=t.lastFocus;I(t,t),a===n.activeElement&&L(t,t),t.lastFocus=n.activeElement}};t.shadowRoot?r():i()},j=e=>{w===0&&(w=1,e.addEventListener("focus",n=>{V(n,e)},!0),e.addEventListener("ionBackButton",n=>{let t=f(e);t?.backdropDismiss&&n.detail.register(100,()=>t.dismiss(void 0,E))}),e.addEventListener("keydown",n=>{if(n.key==="Escape"){let t=f(e);t?.backdropDismiss&&t.dismiss(void 0,E)}}))},G=(e,n,t,o,i)=>{let r=f(e,o,i);return r?r.dismiss(n,t):Promise.reject("overlay does not exist")},M=(e,n)=>(n===void 0&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(n)).filter(t=>t.overlayIndex>0)),F=(e,n)=>M(e,n).filter(t=>!_(t)),f=(e,n,t)=>{let o=F(e,n);return t===void 0?o[o.length-1]:o.find(i=>i.id===t)},T=(e=!1)=>{let t=x(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))},se=(e,n,t,o,i)=>c(void 0,null,function*(){var r,a;if(e.presented)return;T(!0),e.presented=!0,e.willPresent.emit(),(r=e.willPresentShorthand)===null||r===void 0||r.emit();let s=g(e),d=e.enterAnimation?e.enterAnimation:u.get(n,s==="ios"?t:o);(yield P(e,d,e.el,i))&&(e.didPresent.emit(),(a=e.didPresentShorthand)===null||a===void 0||a.emit()),e.el.tagName!=="ION-TOAST"&&W(e.el),e.keyboardClose&&(document.activeElement===null||!e.el.contains(document.activeElement))&&e.el.focus()}),W=e=>c(void 0,null,function*(){let n=document.activeElement;if(!n)return;let t=n?.shadowRoot;t&&(n=t.querySelector(m)||n),yield e.onDidDismiss(),n.focus()}),re=(e,n,t,o,i,r,a)=>c(void 0,null,function*(){var s,d;if(!e.presented)return!1;v!==void 0&&F(v).length===1&&T(!1),e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:n,role:t}),(s=e.willDismissShorthand)===null||s===void 0||s.emit({data:n,role:t});let l=g(e),p=e.leaveAnimation?e.leaveAnimation:u.get(o,l==="ios"?i:r);t!==U&&(yield P(e,p,e.el,a)),e.didDismiss.emit({data:n,role:t}),(d=e.didDismissShorthand)===null||d===void 0||d.emit({data:n,role:t}),b.delete(e),e.el.classList.add("overlay-hidden"),e.el.style.removeProperty("pointer-events"),e.el.lastFocus!==void 0&&(e.el.lastFocus=void 0)}catch(l){console.error(l)}return e.el.remove(),!0}),x=e=>e.querySelector("ion-app")||e.body,P=(e,n,t,o)=>c(void 0,null,function*(){t.classList.remove("overlay-hidden");let i=e.el,r=n(i,o);(!e.animated||!u.getBoolean("animated",!0))&&r.duration(0),e.keyboardClose&&r.beforeAddWrite(()=>{let s=t.ownerDocument.activeElement;s?.matches("input,ion-input, ion-textarea")&&s.blur()});let a=b.get(e)||[];return b.set(e,[...a,r]),yield r.play(),!0}),ae=(e,n)=>{let t,o=new Promise(i=>t=i);return Y(e,n,i=>{t(i.detail)}),o},Y=(e,n,t)=>{let o=i=>{D(e,n,o),t(i)};O(e,n,o)},de=e=>e==="cancel"||e===E,K=e=>e(),le=(e,n)=>{if(typeof e=="function")return u.get("_zoneGate",K)(()=>{try{return e(n)}catch(o){throw o}})},E="backdrop",U="gesture",ce=39,ue=e=>{let n=!1,t,o=R(),i=(s=!1)=>{if(t&&!s)return{delegate:t,inline:n};let{el:d,hasController:l,delegate:p}=e;return n=d.parentNode!==null&&!l,t=n?p||o:p,{inline:n,delegate:t}};return{attachViewToDom:s=>c(void 0,null,function*(){let{delegate:d}=i(!0);if(d)return yield d.attachViewToDom(e.el,s);let{hasController:l}=e;if(l&&s!==void 0)throw new Error("framework delegate is missing");return null}),removeViewFromDom:()=>{let{delegate:s}=i();s&&e.el!==void 0&&s.removeViewFromDom(e.el.parentElement,e.el)}}},me=()=>{let e,n=()=>{e&&(e(),e=void 0)};return{addClickListener:(o,i)=>{n();let r=i!==void 0?document.getElementById(i):null;if(!r){k(`A trigger element with the ID "${i}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,o);return}e=((s,d)=>{let l=()=>{d.present()};return s.addEventListener("click",l),()=>{s.removeEventListener("click",l)}})(r,o)},removeClickListener:n}};export{b as a,Z as b,ee as c,te as d,ne as e,oe as f,ie as g,I as h,f as i,se as j,re as k,ae as l,de as m,le as n,E as o,U as p,ce as q,ue as r,me as s};
