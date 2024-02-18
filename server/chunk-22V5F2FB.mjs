import './polyfills.server.mjs';
import{a as sn}from"./chunk-MGCQ5COH.mjs";import{i as $}from"./chunk-UKOR4UMD.mjs";var an,yt=i=>(i.forEach(o=>{for(let s in o)if(o.hasOwnProperty(s)){let u=o[s];if(s==="easing"){let l="animation-timing-function";o[l]=u,delete o[s]}else{let l=Et(s);l!==s&&(o[l]=u,delete o[s])}}}),i),Et=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fn=i=>{if(an===void 0){let o=i.style.animationName!==void 0,s=i.style.webkitAnimationName!==void 0;an=!o&&s?"-webkit-":""}return an},c=(i,o,s)=>{let u=o.startsWith("animation")?fn(i):"";i.style.setProperty(u+o,s)},b=(i,o)=>{let s=o.startsWith("animation")?fn(i):"";i.style.removeProperty(s+o)},At=(i,o)=>{let s,u={passive:!0},l=()=>{s&&s()},E=v=>{i===v.target&&(l(),o(v))};return i&&(i.addEventListener("webkitAnimationEnd",E,u),i.addEventListener("animationend",E,u),s=()=>{i.removeEventListener("webkitAnimationEnd",E,u),i.removeEventListener("animationend",E,u)}),l},Ct=(i=[])=>i.map(o=>{let s=o.offset,u=[];for(let l in o)o.hasOwnProperty(l)&&l!=="offset"&&u.push(`${l}: ${o[l]};`);return`${s*100}% { ${u.join(" ")} }`}).join(" "),$n=[],bt=i=>{let o=$n.indexOf(i);return o<0&&(o=$n.push(i)-1),`ion-animation-${o}`},St=i=>{let o=i.getRootNode!==void 0?i.getRootNode():i;return o.head||o},vt=(i,o,s)=>{var u;let l=St(s),E=fn(s),v=l.querySelector("#"+i);if(v)return v;let f=((u=s.ownerDocument)!==null&&u!==void 0?u:document).createElement("style");return f.id=i,f.textContent=`@${E}keyframes ${i} { ${o} } @${E}keyframes ${i}-alt { ${o} }`,l.appendChild(f),f},H=(i=[],o)=>{if(o!==void 0){let s=Array.isArray(o)?o:[o];return[...i,...s]}return i},Tt=i=>{let o,s,u,l,E,v,f=[],Z=[],J=[],w=!1,m,Q={},X=[],Y=[],nn={},T=0,V=!1,j=!1,q,_,W,x,D=!0,L=!1,I=!0,O,r,B=!1,cn=i,tn=[],N=[],G=[],h=[],p=[],en=[],un=[],ln=[],dn=[],mn=[],S=[],wn=typeof AnimationEffect=="function"||sn!==void 0&&typeof sn.AnimationEffect=="function",A=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&wn,Pn=100,hn=()=>S,Tn=n=>(p.forEach(t=>{t.destroy(n)}),_n(n),h.length=0,p.length=0,f.length=0,Rn(),w=!1,I=!0,r),_n=n=>{gn(),n&&yn()},xn=()=>{V=!1,j=!1,I=!0,_=void 0,W=void 0,x=void 0,T=0,L=!1,D=!0,B=!1},Dn=()=>T!==0&&!B,pn=(n,t)=>{let e=t.findIndex(a=>a.c===n);e>-1&&t.splice(e,1)},Kn=(n,t)=>(G.push({c:n,o:t}),r),on=(n,t)=>((t?.oneTimeCallback?N:tn).push({c:n,o:t}),r),Rn=()=>(tn.length=0,N.length=0,r),gn=()=>{if(A)S.forEach(n=>{n.cancel()}),S.length=0;else{let n=h.slice();$(()=>{n.forEach(t=>{b(t,"animation-name"),b(t,"animation-duration"),b(t,"animation-timing-function"),b(t,"animation-iteration-count"),b(t,"animation-delay"),b(t,"animation-play-state"),b(t,"animation-fill-mode"),b(t,"animation-direction")})})}},yn=()=>{en.forEach(n=>{n?.parentNode&&n.parentNode.removeChild(n)}),en.length=0},kn=n=>(un.push(n),r),Wn=n=>(ln.push(n),r),Ln=n=>(dn.push(n),r),In=n=>(mn.push(n),r),On=n=>(Z=H(Z,n),r),Nn=n=>(J=H(J,n),r),zn=(n={})=>(Q=n,r),Mn=(n=[])=>{for(let t of n)Q[t]="";return r},Un=n=>(X=H(X,n),r),Vn=n=>(Y=H(Y,n),r),jn=(n={})=>(nn=n,r),qn=(n=[])=>{for(let t of n)nn[t]="";return r},z=()=>E!==void 0?E:m?m.getFill():"both",K=()=>_!==void 0?_:v!==void 0?v:m?m.getDirection():"normal",M=()=>V?"linear":u!==void 0?u:m?m.getEasing():"linear",C=()=>j?0:W!==void 0?W:s!==void 0?s:m?m.getDuration():0,F=()=>l!==void 0?l:m?m.getIterations():1,R=()=>x!==void 0?x:o!==void 0?o:m?m.getDelay():0,Bn=()=>f,Gn=n=>(v=n,g(!0),r),Hn=n=>(E=n,g(!0),r),Zn=n=>(o=n,g(!0),r),Jn=n=>(u=n,g(!0),r),Qn=n=>(!A&&n===0&&(n=1),s=n,g(!0),r),Xn=n=>(l=n,g(!0),r),Yn=n=>(m=n,r),nt=n=>{if(n!=null)if(n.nodeType===1)h.push(n);else if(n.length>=0)for(let t=0;t<n.length;t++)h.push(n[t]);else console.error("Invalid addElement value");return r},tt=n=>{if(n!=null)if(Array.isArray(n))for(let t of n)t.parent(r),p.push(t);else n.parent(r),p.push(n);return r},et=n=>{let t=f!==n;return f=n,t&&it(f),r},it=n=>{A?hn().forEach(t=>{let e=t.effect;if(e.setKeyframes)e.setKeyframes(n);else{let a=new KeyframeEffect(e.target,n,e.getTiming());t.effect=a}}):En()},ot=()=>{un.forEach(a=>a()),ln.forEach(a=>a());let n=Z,t=J,e=Q;h.forEach(a=>{let d=a.classList;n.forEach(y=>d.add(y)),t.forEach(y=>d.remove(y));for(let y in e)e.hasOwnProperty(y)&&c(a,y,e[y])})},rt=()=>{rn(),dn.forEach(d=>d()),mn.forEach(d=>d());let n=D?1:0,t=X,e=Y,a=nn;h.forEach(d=>{let y=d.classList;t.forEach(P=>y.add(P)),e.forEach(P=>y.remove(P));for(let P in a)a.hasOwnProperty(P)&&c(d,P,a[P])}),W=void 0,_=void 0,x=void 0,tn.forEach(d=>d.c(n,r)),N.forEach(d=>d.c(n,r)),N.length=0,I=!0,D&&(L=!0),D=!0},k=()=>{T!==0&&(T--,T===0&&(rt(),m&&m.animationFinish()))},En=(n=!0)=>{yn();let t=yt(f);h.forEach(e=>{if(t.length>0){let a=Ct(t);O=i!==void 0?i:bt(a);let d=vt(O,a,e);en.push(d),c(e,"animation-duration",`${C()}ms`),c(e,"animation-timing-function",M()),c(e,"animation-delay",`${R()}ms`),c(e,"animation-fill-mode",z()),c(e,"animation-direction",K());let y=F()===1/0?"infinite":F().toString();c(e,"animation-iteration-count",y),c(e,"animation-play-state","paused"),n&&c(e,"animation-name",`${d.id}-alt`),$(()=>{c(e,"animation-name",d.id||null)})}})},st=()=>{h.forEach(n=>{let t=n.animate(f,{id:cn,delay:R(),duration:C(),easing:M(),iterations:F(),fill:z(),direction:K()});t.pause(),S.push(t)}),S.length>0&&(S[0].onfinish=()=>{k()})},An=(n=!0)=>{ot(),f.length>0&&(A?st():En(n)),w=!0},U=n=>{if(n=Math.min(Math.max(n,0),.9999),A)S.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+C()*n,t.pause()});else{let t=`-${C()*n}ms`;h.forEach(e=>{f.length>0&&(c(e,"animation-delay",t),c(e,"animation-play-state","paused"))})}},Cn=n=>{S.forEach(t=>{t.effect.updateTiming({delay:R(),duration:C(),easing:M(),iterations:F(),fill:z(),direction:K()})}),n!==void 0&&U(n)},bn=(n=!0,t)=>{$(()=>{h.forEach(e=>{c(e,"animation-name",O||null),c(e,"animation-duration",`${C()}ms`),c(e,"animation-timing-function",M()),c(e,"animation-delay",t!==void 0?`-${t*C()}ms`:`${R()}ms`),c(e,"animation-fill-mode",z()||null),c(e,"animation-direction",K()||null);let a=F()===1/0?"infinite":F().toString();c(e,"animation-iteration-count",a),n&&c(e,"animation-name",`${O}-alt`),$(()=>{c(e,"animation-name",O||null)})})})},g=(n=!1,t=!0,e)=>(n&&p.forEach(a=>{a.update(n,t,e)}),A?Cn(e):bn(t,e),r),at=(n=!1,t)=>(p.forEach(e=>{e.progressStart(n,t)}),Sn(),V=n,w||An(),g(!1,!0,t),r),ft=n=>(p.forEach(t=>{t.progressStep(n)}),U(n),r),ct=(n,t,e)=>(V=!1,p.forEach(a=>{a.progressEnd(n,t,e)}),e!==void 0&&(W=e),L=!1,D=!0,n===0?(_=K()==="reverse"?"normal":"reverse",_==="reverse"&&(D=!1),A?(g(),U(1-t)):(x=(1-t)*C()*-1,g(!1,!1))):n===1&&(A?(g(),U(t)):(x=t*C()*-1,g(!1,!1))),n!==void 0&&!m&&vn(),r),Sn=()=>{w&&(A?S.forEach(n=>{n.pause()}):h.forEach(n=>{c(n,"animation-play-state","paused")}),B=!0)},ut=()=>(p.forEach(n=>{n.pause()}),Sn(),r),lt=()=>{q=void 0,k()},rn=()=>{q&&clearTimeout(q)},dt=()=>{if(rn(),$(()=>{h.forEach(n=>{f.length>0&&c(n,"animation-play-state","running")})}),f.length===0||h.length===0)k();else{let n=R()||0,t=C()||0,e=F()||1;isFinite(e)&&(q=setTimeout(lt,n+t*e+Pn)),At(h[0],()=>{rn(),$(()=>{mt(),$(k)})})}},mt=()=>{h.forEach(n=>{b(n,"animation-duration"),b(n,"animation-delay"),b(n,"animation-play-state")})},ht=()=>{S.forEach(n=>{n.play()}),(f.length===0||h.length===0)&&k()},pt=()=>{A?(U(0),Cn()):bn()},vn=n=>new Promise(t=>{n?.sync&&(j=!0,on(()=>j=!1,{oneTimeCallback:!0})),w||An(),L&&(pt(),L=!1),I&&(T=p.length+1,I=!1);let e=()=>{pn(a,N),t()},a=()=>{pn(e,G),t()};on(a,{oneTimeCallback:!0}),Kn(e,{oneTimeCallback:!0}),p.forEach(d=>{d.play()}),A?ht():dt(),B=!1}),gt=()=>{p.forEach(n=>{n.stop()}),w&&(gn(),w=!1),xn(),G.forEach(n=>n.c(0,r)),G.length=0},Fn=(n,t)=>{let e=f[0];return e!==void 0&&(e.offset===void 0||e.offset===0)?e[n]=t:f=[{offset:0,[n]:t},...f],r};return r={parentAnimation:m,elements:h,childAnimations:p,id:cn,animationFinish:k,from:Fn,to:(n,t)=>{let e=f[f.length-1];return e!==void 0&&(e.offset===void 0||e.offset===1)?e[n]=t:f=[...f,{offset:1,[n]:t}],r},fromTo:(n,t,e)=>Fn(n,t).to(n,e),parent:Yn,play:vn,pause:ut,stop:gt,destroy:Tn,keyframes:et,addAnimation:tt,addElement:nt,update:g,fill:Hn,direction:Gn,iterations:Xn,duration:Qn,easing:Jn,delay:Zn,getWebAnimations:hn,getKeyframes:Bn,getFill:z,getDirection:K,getDelay:R,getIterations:F,getEasing:M,getDuration:C,afterAddRead:Ln,afterAddWrite:In,afterClearStyles:qn,afterStyles:jn,afterRemoveClass:Vn,afterAddClass:Un,beforeAddRead:kn,beforeAddWrite:Wn,beforeClearStyles:Mn,beforeStyles:zn,beforeRemoveClass:Nn,beforeAddClass:On,onFinish:on,isRunning:Dn,progressStart:at,progressStep:ft,progressEnd:ct}};export{Tt as a};
