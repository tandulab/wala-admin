import{k as d,j as A,u as D,h as T,n as g,_ as E,f as s,w as n,r as o,o as t,a as u,J as L,d as a,t as i,e as l,x as N,b as y,K as Q,y as R}from"../index70335.js";const V={props:{questions:Array},setup(){const p=d({icon:"pi pi-home",to:"/template"});d("");const _=d([{label:""}]),c=A();return D(),T(),{home:p,items:_,toggleEdit:function(f,r){f.stopPropagation(),c.name=="dettaglio-campagna"?g.push({name:"campagna-dettaglio-domanda",params:{id:r.id}}):g.push({name:"dettaglio-domanda",params:{id:r.id}})}}},components:{}};const j={class:"flex flex-column w-full"},q={class:"flex justify-content-between py-2 px-3 align-items-center"},S={key:0,class:"text-500 font-semibold"},$={key:1,class:"text-500 font-semibold"},F={class:"px-3 py-2"};function J(p,_,c,m,f,r){const b=o("Button"),h=o("Column"),x=o("DataTable"),k=o("AccordionTab"),C=o("Accordion"),B=R("tooltip");return t(),s(C,null,{default:n(()=>[(t(!0),u(Q,null,L(c.questions,(e,v)=>(t(),s(k,{key:e.id},{header:n(()=>[a("div",j,[a("div",q,[e.label_it?(t(),u("div",S,i(v+1)+") "+i(e.label_it),1)):l("",!0),e.labels?(t(),u("div",$,[a("span",null,i(v+1)+") "+i(e.labels.label_it),1)])):l("",!0),N(y(b,{type:"button",onClick:w=>m.toggleEdit(w,e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-pencil"},null,8,["onClick"]),[[B,"Modifica",void 0,{top:!0}]])])])]),default:n(()=>[a("div",F,[y(x,{value:e.answers,responsiveLayout:"scroll"},{default:n(()=>[e.label_it?(t(),s(h,{key:0,field:"label_it",header:"Risposte"})):l("",!0),e.labels?(t(),s(h,{key:1,field:"labels.label_it",header:"Risposte"})):l("",!0)]),_:2},1032,["value"])])]),_:2},1024))),128))]),_:1})}const M=E(V,[["render",J]]);export{M as Q};
