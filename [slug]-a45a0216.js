import{S as t,i as e,s as a,e as s,b as l,g as n,a as o,f as i,c as u,j as c,l as r,p as d,n as b,h as p,r as h,q as m,u as f}from"./main-80dcd298.js";import{b as v,s as g}from"./api-80ecb004.js";import{c as w}from"./tools-c085b23f.js";function _(t,e,a){const s=t.slice();return s[14]=e[a],s}function $(t){let e,a;return{c(){e=s("option"),e.__value=a=t[14].label,e.value=e.__value},m(t,a){l(t,e,a)},p(t,s){16&s&&a!==(a=t[14].label)&&(e.__value=a,e.value=e.__value)},d(t){t&&n(e)}}}function j(t){let e,a,m,f,v,g,w,j,y,q,x,D,E,F,L,H,S,z=t[4],I=[];for(let e=0;e<z.length;e+=1)I[e]=$(_(t,z,e));return document.title=L="Edit "+t[1],{c(){e=s("form"),a=s("div"),m=s("input"),f=o(),v=s("div"),g=s("input"),w=o(),j=s("datalist");for(let t=0;t<I.length;t+=1)I[t].c();y=o(),q=s("div"),x=s("textarea"),D=o(),E=s("div"),E.innerHTML='<input type="submit" value="Ubah" class="btn btn-success"/>',F=o(),i(m,"class","form-control"),m.required=!0,i(m,"placeholder","Judul"),i(a,"class","mb-3"),i(g,"class","form-control"),g.required=!0,i(g,"placeholder","Label"),i(g,"list","label"),i(v,"class","mb-3"),i(j,"id","label"),i(x,"class","form-control"),i(x,"placeholder","Isi"),i(q,"class","mb-3"),i(E,"class","mb-3")},m(s,n){l(s,e,n),u(e,a),u(a,m),c(m,t[1]),u(e,f),u(e,v),u(v,g),c(g,t[2]),u(e,w),u(e,j);for(let t=0;t<I.length;t+=1)I[t].m(j,null);u(e,y),u(e,q),u(q,x),t[9](x),c(x,t[3]),u(e,D),u(e,E),l(s,F,n),H||(S=[r(m,"input",t[7]),r(g,"input",t[8]),r(x,"input",t[10]),r(e,"submit",d(t[5]))],H=!0)},p(t,[e]){if(2&e&&m.value!==t[1]&&c(m,t[1]),4&e&&g.value!==t[2]&&c(g,t[2]),16&e){let a;for(z=t[4],a=0;a<z.length;a+=1){const s=_(t,z,a);I[a]?I[a].p(s,e):(I[a]=$(s),I[a].c(),I[a].m(j,null))}for(;a<I.length;a+=1)I[a].d(1);I.length=z.length}8&e&&c(x,t[3]),2&e&&L!==(L="Edit "+t[1])&&(document.title=L)},i:b,o:b,d(a){a&&n(e),p(I,a),t[9](null),a&&n(F),H=!1,h(S)}}}function y(t,e,a){let s,{slug:l}=e,[n,o,i,u]=["","","",[]];m(()=>(()=>{const t=()=>a(0,s.style.height=window.innerHeight-250+"px",s);t(),window.addEventListener("resize",t)})());(async()=>{const t=new FormData;t.append("sql",btoa(btoa(`\n\t\t\tselect distinct label\n\t\t\tfrom database_${v}\n\t\t\torder by label\n\t\t`)));let e=await fetch(g,{method:"post",body:t}).then(t=>t.json());e=await e,a(4,u=e)})();return(async()=>{const t=new FormData;t.append("sql",btoa(btoa(`\n\t\t\tselect judul, label, isi\n\t\t\tfrom database_${v}\n\t\t\twhere slug = '${l}'\n\t\t`)));let e=await fetch(g,{method:"post",body:t}).then(t=>t.json());e=await e,a(1,n=e[0].judul),a(2,o=e[0].label),a(3,i=e[0].isi)})(),t.$$set=t=>{"slug"in t&&a(6,l=t.slug)},[s,n,o,i,u,async()=>{const t=new FormData;t.append("sql",btoa(btoa(`\n\t\t\tupdate database_${v}\n\t\t\tset\n\t\t\t\tjudul = '${w(n)}',\n\t\t\t\tlabel = '${w(o)}',\n\t\t\t\tisi = '${w(i)}'\n\t\t\twhere slug = '${l}'\n\t\t`)));let e=await fetch(g,{method:"post",body:t});e=await e,e&&alert("Sudah diupdate")},l,function(){n=this.value,a(1,n)},function(){o=this.value,a(2,o)},function(t){f[t?"unshift":"push"](()=>{s=t,a(0,s)})},function(){i=this.value,a(3,i)}]}export default class extends t{constructor(t){super(),e(this,t,y,j,a,{slug:6})}}
