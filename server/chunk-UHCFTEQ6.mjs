import './polyfills.server.mjs';
import{a as D}from"./chunk-3WN65TRN.mjs";var Y=(t,n,c,s)=>{let o=F(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture,r,u;return t.__zone_symbol__addEventListener?(r="__zone_symbol__addEventListener",u="__zone_symbol__removeEventListener"):(r="addEventListener",u="removeEventListener"),t[r](n,c,o),()=>{t[u](n,c,o)}},F=t=>{if(g===void 0)try{let n=Object.defineProperty({},"passive",{get:()=>{g=!0}});t.addEventListener("optsTest",()=>{},n)}catch{g=!1}return!!g},g,W=2e3,j=(t,n,c,s,o)=>{let r,u,m,i,f,a,h,v=0,y=d=>{v=Date.now()+W,n(d)&&(!u&&c&&(u=Y(t,"touchmove",c,o)),m||(m=Y(d.target,"touchend",e,o)),i||(i=Y(d.target,"touchcancel",e,o)))},X=d=>{v>Date.now()||n(d)&&(!a&&c&&(a=Y(x(t),"mousemove",c,o)),h||(h=Y(x(t),"mouseup",T,o)))},e=d=>{p(),s&&s(d)},T=d=>{E(),s&&s(d)},p=()=>{u&&u(),m&&m(),i&&i(),u=m=i=void 0},E=()=>{a&&a(),h&&h(),a=h=void 0},S=()=>{p(),E()},_=(d=!0)=>{d?(r||(r=Y(t,"touchstart",y,o)),f||(f=Y(t,"mousedown",X,o))):(r&&r(),f&&f(),r=f=void 0,S())};return{enable:_,stop:S,destroy:()=>{_(!1),s=c=n=void 0}}},x=t=>t instanceof Document?t:t.ownerDocument,q=(t,n,c)=>{let s=c*(Math.PI/180),o=t==="x",r=Math.cos(s),u=n*n,m=0,i=0,f=!1,a=0;return{start(h,v){m=h,i=v,a=0,f=!0},detect(h,v){if(!f)return!1;let y=h-m,X=v-i,e=y*y+X*X;if(e<u)return!1;let T=Math.sqrt(e),p=(o?y:X)/T;return p>r?a=1:p<-r?a=-1:a=0,f=!1,!0},isGesture(){return a!==0},getDirection(){return a}}},I=t=>{let n=!1,c=!1,s=!0,o=!1,r=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),u=r.canStart,m=r.onWillStart,i=r.onStart,f=r.onEnd,a=r.notCaptured,h=r.onMove,v=r.threshold,y=r.passive,X=r.blurOnStart,e={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},T=q(r.direction,r.threshold,r.maxAngle),p=D.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=l=>{let P=w(l);return c||!s||(R(l,e),e.startX=e.currentX,e.startY=e.currentY,e.startTime=e.currentTime=P,e.velocityX=e.velocityY=e.deltaX=e.deltaY=0,e.event=l,u&&u(e)===!1)||(p.release(),!p.start())?!1:(c=!0,v===0?b():(T.start(e.startX,e.startY),!0))},S=l=>{if(n){!o&&s&&(o=!0,L(e,l),requestAnimationFrame(_));return}L(e,l),T.detect(e.currentX,e.currentY)&&(!T.isGesture()||!b())&&A()},_=()=>{n&&(o=!1,h&&h(e))},b=()=>p.capture()?(n=!0,s=!1,e.startX=e.currentX,e.startY=e.currentY,e.startTime=e.currentTime,m?m(e).then(C):C(),!0):!1,d=()=>{if(typeof document<"u"){let l=document.activeElement;l?.blur&&l.blur()}},C=()=>{X&&d(),i&&i(e),s=!0},M=()=>{n=!1,c=!1,o=!1,s=!0,p.release()},G=l=>{let P=n,z=s;if(M(),!!z){if(L(e,l),P){f&&f(e);return}a&&a(e)}},O=j(r.el,E,S,G,{capture:!1,passive:y}),A=()=>{M(),O.stop(),a&&a(e)};return{enable(l=!0){l||(n&&G(void 0),M()),O.enable(l)},destroy(){p.destroy(),O.destroy()}}},L=(t,n)=>{if(!n)return;let c=t.currentX,s=t.currentY,o=t.currentTime;R(n,t);let r=t.currentX,u=t.currentY,i=(t.currentTime=w(n))-o;if(i>0&&i<100){let f=(r-c)/i,a=(u-s)/i;t.velocityX=f*.7+t.velocityX*.3,t.velocityY=a*.7+t.velocityY*.3}t.deltaX=r-t.startX,t.deltaY=u-t.startY,t.event=n},R=(t,n)=>{let c=0,s=0;if(t){let o=t.changedTouches;if(o&&o.length>0){let r=o[0];c=r.clientX,s=r.clientY}else t.pageX!==void 0&&(c=t.pageX,s=t.pageY)}n.currentX=c,n.currentY=s},w=t=>t.timeStamp||Date.now();export{I as a};
