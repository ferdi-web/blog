import{S as a,i as s,s as t,e as o,a as e,h as n,b as r,c as u,q as i,l,p as c,n as p,g as m,r as f,k as d,u as b,o as h,m as w,A as k,v as y}from"./main-e83be055.js";import{a as g,s as j}from"./api-ad30823f.js";import{c as v}from"./tools-c085b23f.js";function q(a){let s,t,d,b,h,w;return{c(){s=o("form"),t=o("div"),d=o("input"),b=e(),n(d,"type","password"),n(d,"class","form-control"),n(d,"placeholder","Masukkan password"),d.required=!0,n(t,"class","form-group"),document.title="Login"},m(o,e){r(o,s,e),u(s,t),u(t,d),a[3](d),i(d,a[0]),r(o,b,e),h||(w=[l(d,"input",a[4]),l(s,"submit",c(a[2]))],h=!0)},p(a,[s]){1&s&&d.value!==a[0]&&i(d,a[0])},i:p,o:p,d(t){t&&m(s),a[3](null),t&&m(b),h=!1,f(w)}}}function x(a,s,t){let o,e;d(a,h,a=>t(5,o=a)),d(a,w,a=>t(6,e=a));let n,r="";b(()=>n.focus());return[r,n,async()=>{let a=new FormData;a.append("sql",btoa(btoa(`\n\t select count(*) as banyak\n\t from database_${g}\n\t where password = "${v(r)}"\n\t`)));let s=await fetch(j,{method:"post",body:a}).then(a=>a.json());s=await s,s[0].banyak>0?(localStorage.setItem("password",r),k(h,o=!0,o),e("/")):t(0,r="")},function(a){y[a?"unshift":"push"](()=>{n=a,t(1,n)})},function(){r=this.value,t(0,r)}]}export default class extends a{constructor(a){super(),s(this,a,x,q,t,{})}}
