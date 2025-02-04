import{s as C,f as j,l as T,g as w,h as E,m as G,d,j as u,i as b,J as H,p as J,n as h,e as I,M as P,a0 as Q,I as v,X as R,Y as S,T as q,a1 as z,P as U,Q as X,R as Y,S as A}from"./scheduler.f853ebe8.js";import{S as M,i as N,a as p,t as g,g as B,c as D}from"./index.ef34d6a7.js";import{g as F}from"./TabTitle.91a6e2c7.js";import{t as K}from"./UIcon.084c0323.js";function L(a){let t,r;return{c(){t=j("h3"),r=T(a[0]),this.h()},l(l){t=w(l,"H3",{class:!0});var e=E(t);r=G(e,a[0]),e.forEach(d),this.h()},h(){u(t,"class","font-[var(--title-f)] text-1.25em")},m(l,e){b(l,t,e),H(t,r)},p(l,[e]){e&1&&J(r,l[0])},i:h,o:h,d(l){l&&d(t)}}}function O(a,t,r){let{title:l}=t;return a.$$set=e=>{"title"in e&&r(0,l=e.title)},[l]}class re extends M{constructor(t){super(),N(this,t,O,L,C,{title:0})}}function V(a){let t,r,l;return{c(){t=j("img"),this.h()},l(e){t=w(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){u(t,"class",r=v(`w-15px h-15px ${a[2]?"invert-100":""}`)+" svelte-1m94jop"),q(t.src,l=a[1])||u(t,"src",l),u(t,"alt",a[0]),z(t,"chip-icon-logo-inverted",a[5]&&a[2])},m(e,s){b(e,t,s)},p(e,s){s&4&&r!==(r=v(`w-15px h-15px ${e[2]?"invert-100":""}`)+" svelte-1m94jop")&&u(t,"class",r),s&2&&!q(t.src,l=e[1])&&u(t,"src",l),s&1&&u(t,"alt",e[0]),s&36&&z(t,"chip-icon-logo-inverted",e[5]&&e[2])},i:h,o:h,d(e){e&&d(t)}}}function W(a){let t;const r=a[8].default,l=U(r,a,a[7],null);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,s){l&&l.m(e,s),t=!0},p(e,s){l&&l.p&&(!t||s&128)&&X(l,r,e,e[7],t?A(r,e[7],s,null):Y(e[7]),null)},i(e){t||(p(l,e),t=!0)},o(e){g(l,e),t=!1},d(e){l&&l.d(e)}}}function k(a){let t,r,l,e,s;const _=[W,V],n=[];function m(i,o){return i[6].default?0:1}r=m(a),l=n[r]=_[r](a);let f=[{href:a[4]},{class:e=v(`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${a[4]?"cursor-pointer":"cursor-help"} ${a[3]?"grayscale-65 hover:grayscale-0":""}`)+" svelte-1m94jop"},{"data-help":a[0]}],c={};for(let i=0;i<f.length;i+=1)c=R(c,f[i]);return{c(){t=j(a[4]?"a":"div"),l.c(),this.h()},l(i){t=w(i,((a[4]?"a":"div")||"null").toUpperCase(),{href:!0,class:!0,"data-help":!0});var o=E(t);l.l(o),o.forEach(d),this.h()},h(){S(a[4]?"a":"div")(t,c)},m(i,o){b(i,t,o),n[r].m(t,null),s=!0},p(i,o){let y=r;r=m(i),r===y?n[r].p(i,o):(B(),g(n[y],1,1,()=>{n[y]=null}),D(),l=n[r],l?l.p(i,o):(l=n[r]=_[r](i),l.c()),p(l,1),l.m(t,null)),S(i[4]?"a":"div")(t,c=F(f,[(!s||o&16)&&{href:i[4]},(!s||o&24&&e!==(e=v(`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${i[4]?"cursor-pointer":"cursor-help"} ${i[3]?"grayscale-65 hover:grayscale-0":""}`)+" svelte-1m94jop"))&&{class:e},(!s||o&1)&&{"data-help":i[0]}]))},i(i){s||(p(l),s=!0)},o(i){g(l),s=!1},d(i){i&&d(t),n[r].d()}}}function Z(a){let t=a[4]?"a":"div",r,l,e=(a[4]?"a":"div")&&k(a);return{c(){e&&e.c(),r=I()},l(s){e&&e.l(s),r=I()},m(s,_){e&&e.m(s,_),b(s,r,_),l=!0},p(s,[_]){s[4],t?C(t,s[4]?"a":"div")?(e.d(1),e=k(s),t=s[4]?"a":"div",e.c(),e.m(r.parentNode,r)):e.p(s,_):(e=k(s),t=s[4]?"a":"div",e.c(),e.m(r.parentNode,r))},i(s){l||(p(e,s),l=!0)},o(s){g(e,s),l=!1},d(s){s&&d(r),e&&e.d(s)}}}function x(a,t,r){let l;P(a,K,o=>r(5,l=o));let{$$slots:e={},$$scope:s}=t;const _=Q(e);let{name:n=""}=t,{logo:m=""}=t,{inverted:f=!1}=t,{grayscale:c=!0}=t,{href:i=void 0}=t;return a.$$set=o=>{"name"in o&&r(0,n=o.name),"logo"in o&&r(1,m=o.logo),"inverted"in o&&r(2,f=o.inverted),"grayscale"in o&&r(3,c=o.grayscale),"href"in o&&r(4,i=o.href),"$$scope"in o&&r(7,s=o.$$scope)},[n,m,f,c,i,l,_,s,e]}class se extends M{constructor(t){super(),N(this,t,x,Z,C,{name:0,logo:1,inverted:2,grayscale:3,href:4})}}export{re as C,se as a};
