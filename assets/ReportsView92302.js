import{g as V,F as L,u as P,h as z,i as A,k as v,c as Y,X as T,m as E,Y as U,n as x,p as F,s as S,Z as N,_ as O,a as R,b as s,w as f,r as u,o as b,q as M,v as I,t as D,E as K,N as q,y as w,z as H,d as k,e as j}from"../index92302.js";import{h as G}from"./loader92302.js";const J={setup(){V(()=>{_.value=!0,r.value={first:0,rows:o.value.rows,sortField:null,sortOrder:null,filters:d.value};const e=localStorage.getItem("dt-templates");if(r.value.page==null&&e){let n=JSON.parse(e);r.value.first=n.first,r.value.page=n.first/r.value.rows}L.register("filter_report",(n,B)=>n===B),i()});const l=P(),a=z(),y=A(),o=v(),d=v({title:{value:"",matchMode:"contains"}}),_=v(!0),r=v(),p=v(0),m=v([{label:"My Filter",value:"filter_report"}]),h=Y(()=>l.getters[N.CURRENT_REPORTS]);function i(){_.value=!0;const e=new Map;e.set("title",d.value.title?d.value.title.value:""),e.set("page",r.value.page+1),e.set("per_page",r.value.rows),r.value.sortField&&(r.value.sortOrder==1?e.set("sorted_by",r.value.sortField+"_asc"):e.set("sorted_by",r.value.sortField+"_desc")),setTimeout(()=>{g(e)},Math.random()*1e3+250)}const g=async function(e){try{const n=await l.dispatch(T.FETCH_ALL_REPORTS,e);return _.value=!1,n}catch(n){G(l),E(a,n)}},t=async function(e){await l.dispatch(T.DELETE_REPORT,e).then(()=>{S(a,{message:"Report eliminato correttamente.",title:""}),i()}).catch(n=>{E(a,n)})};return{dt:o,response:h,loading:_,filters1:d,totalRecords:p,lazyParams:r,loadLazyData:i,matchModes:m,goToReport:function(e){l.dispatch(T.SET_CREATED_AT,x.unix(e.created_at).format("YYYY-MM-DD")),F.push({name:"dettaglio-report",params:{id:e.id}})},onPage:e=>{r.value=e,i()},onSort:e=>{r.value=e,i()},onFilter:()=>{r.value.page=0,r.value.filters=d.value,i()},confirmDeleteTemplate:(e,n)=>{y.require({target:e.currentTarget,message:"Sei sicuro di voler eliminare questo report?",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{t(n)}})},toggleEdit:function(e){F.push({name:"dettaglio-report",params:{id:e.id}})},reloadReport:async function(e){await l.dispatch(T.REFRESH_REPORT,e).then(()=>{S(a,{message:"Report aggiornato correttamente.",title:""}),i()}).catch(n=>{E(a,n)})},isButtonReportDisabled:U,moment:x}}};function X(l,a,y,o,d,_){const r=u("InputText"),p=u("Column"),m=u("Button"),h=u("DataTable"),i=u("ConfirmPopup"),g=H("tooltip");return b(),R("div",null,[s(h,{value:o.response.reports,totalRecords:o.response.total,lazy:!0,paginator:!0,rows:30,filters:o.filters1,"onUpdate:filters":a[0]||(a[0]=t=>o.filters1=t),ref:"dt",dataKey:"id",loading:o.loading,onPage:a[1]||(a[1]=t=>o.onPage(t)),onSort:a[2]||(a[2]=t=>o.onSort(t)),onFilter:a[3]||(a[3]=t=>o.onFilter()),filterDisplay:"row",removableSort:""},{empty:f(()=>[M(" Nessun report trovato. ")]),default:f(()=>[s(p,{field:"title",header:"Nome",filterMatchMode:"contains",ref:"title",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:f(({filterModel:t,filterCallback:c})=>[s(r,{type:"text",modelValue:t.value,"onUpdate:modelValue":C=>t.value=C,onKeydown:I(C=>c(),["enter"]),class:"p-column-filter",placeholder:"Filtra per report"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),s(p,{field:"created_at",header:"Data creazione",sortable:!1},{body:f(({data:t})=>[M(D(o.moment.unix(t.created_at).format("DD/MM/YYYY")),1)]),_:1}),s(p,{field:"campaign",header:"Campagne",sortable:!1},{body:f(({data:t})=>[(b(!0),R(K,null,q(t.campaigns,c=>(b(),R("p",{key:c.id,class:"m-0"},D(c.name),1))),128))]),_:1}),s(p,{header:"",style:{width:"14rem"}},{body:f(({data:t})=>[w(s(m,{type:"button",onClick:c=>o.goToReport(t),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-chart-bar",disabled:!t.ready},null,8,["onClick","disabled"]),[[g,"Report",void 0,{top:!0}]]),w(s(m,{type:"button",onClick:c=>o.reloadReport(t.id),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-refresh",disabled:o.isButtonReportDisabled(o.moment.unix(t.created_at).format("YYYY-MM-DD"))},null,8,["onClick","disabled"]),[[g,"Ricarica report",void 0,{top:!0}]]),w(s(m,{type:"button",onClick:c=>o.confirmDeleteTemplate(c,t.id),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200",icon:"pi pi-trash"},null,8,["onClick"]),[[g,"Elimina",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading"]),s(i)])}const Z=O(J,[["render",X]]),Q={setup(){const l=P();return{reports:Y(()=>l.getters[N.CURRENT_REPORTS])}},components:{ReportsTable:Z}},W={class:"flex justify-content-between align-items-center"},$={key:0,class:"uppercase"};function ee(l,a,y,o,d,_){const r=u("Button"),p=u("ReportsTable"),m=u("Card");return b(),R("div",null,[s(m,null,{content:f(()=>[k("div",W,[o.reports?(b(),R("h1",$,[k("span",null,D(o.reports.total)+" Report",1)])):j("",!0),s(r,{class:"",label:"Nuovo report",onClick:a[0]||(a[0]=h=>l.$router.push("/nuovo-report"))})]),s(p)]),_:1})])}const ie=O(Q,[["render",ee]]);export{ie as default};
