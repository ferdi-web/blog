import{S as s,i as a,s as t,e as o,a as e,f as n,b as r,c,j as u,l as i,p as l,n as p,g as f,r as m,k as d,q as h,o as b,m as w,B as j,u as k}from"./main-09fceaa5.js";import{b as y,c as g,s as q}from"./index-7c208677.js";import{c as v}from"./tools-c085b23f.js";function x(s){let a,t,d,h,b,w;return{c(){a=o("form"),t=o("div"),d=o("input"),h=e(),n(d,"type","password"),n(d,"class","form-control"),n(d,"placeholder","Masukkan password"),d.required=!0,n(t,"class","form-group"),document.title="Login"},m(o,e){r(o,a,e),c(a,t),c(t,d),s[3](d),u(d,s[0]),r(o,h,e),b||(w=[i(d,"input",s[4]),i(a,"submit",l(s[2]))],b=!0)},p(s,[a]){1&a&&d.value!==s[0]&&u(d,s[0])},i:p,o:p,d(t){t&&f(a),s[3](null),t&&f(h),b=!1,m(w)}}}function S(s,a,t){let o,e;d(s,b,s=>t(5,o=s)),d(s,w,s=>t(6,e=s));let n,r="";h(()=>n.focus());return[r,n,async()=>{let s=new FormData;s.append("sql",y(`\n\t select count(*) as banyak\n\t from database_${g}\n\t where password = "${v(r)}"\n\t`));let a=await fetch(q,{method:"post",body:s}).then(s=>s.json());a=await a,a[0].banyak>0?(localStorage.setItem("password",r),j(b,o=!0,o),e("/")):t(0,r="")},function(s){k[s?"unshift":"push"](()=>{n=s,t(1,n)})},function(){r=this.value,t(0,r)}]}export default class extends s{constructor(s){super(),a(this,s,S,x,t,{})}}
