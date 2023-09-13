import{h as j}from"./moment55442.js";import{g as H,F as J,u as Q,h as W,i as X,j as Z,k as p,c as N,l as k,m as R,n as V,s as $,C as ee,A as te,_ as ae,a as F,e as y,b as r,w as u,r as f,o as v,p as C,f as w,q as E,t as A,v as oe,x,d as se,y as ne}from"../index55442.js";import{h as le}from"./loader55442.js";const re={setup(U,n){H(()=>{_.value=!0,o.value={first:0,rows:i.value.rows,sortField:null,sortOrder:null,filters:d.value};const t=localStorage.getItem("dt-campaigns");if(o.value.page==null&&t){let l=JSON.parse(t);o.value.first=l.first,o.value.page=l.first/o.value.rows}J.register("myfilter",(l,q)=>l===q),h(),D.name=="nuovo-report"?m.value=!0:m.value=!1});const g=Q(),a=W(),T=X(),D=Z(),i=p(),d=p({status:{value:"",matchMode:"contains"},name:{value:"",matchMode:"contains"},company:{value:"",matchMode:"contains"}}),_=p(!0),o=p(),b=p(0),M=p([{label:"My Filter",value:"myfilter"}]),S=[{label:"Attiva",value:"active"},{label:"Conclusa",value:"finished"},{label:"Programmata",value:"scheduled"}],m=p(!1),e=p(),s=N(()=>g.getters[ee.CURRENT_CAMPAIGNS]),c=N(()=>g.getters[te.IS_USER_SUPERADMIN]);function h(){_.value=!0;const t=new Map;t.set("name",d.value.name.value),t.set("company",d.value.company.value),t.set("status",d.value.status.value),t.set("page",o.value.page+1),t.set("per_page",o.value.rows),o.value.sortField&&(o.value.sortOrder==1?t.set("sorted_by",o.value.sortField+"_asc"):t.set("sorted_by",o.value.sortField+"_desc")),setTimeout(()=>{P(t)},Math.random()*1e3+250)}const P=async function(t){try{const l=await g.dispatch(k.FETCH_ALL_CAMPAIGNS,t);return _.value=!1,l}catch(l){le(g),R(a,l)}},I=async function(t){await g.dispatch(k.DELETE_CAMPAIGN,t).then(()=>{$(a,{message:"Campagna eliminata correttamente.",title:""}),h()}).catch(l=>{R(a,l)})},z=(t,l)=>{T.require({target:t.currentTarget,message:"Sei sicuro di voler eliminare questa campagna?",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{I(l)}})},B=t=>{o.value=t,h()},Y=t=>{o.value=t,h()},G=()=>{o.value.page=0,o.value.filters=d.value,h()},O=function(t){V.push({name:"dettaglio-campagna",params:{id:t.id}})},K=function(t){V.push({name:"report",params:{id:t}})},L=function(t){switch(t){case"active":return"Attiva";case"finished":return"Conclusa";case"scheduled":return"Programmata";default:return t}};return n.expose({selectedCampaigns:e}),{dt:i,response:s,filters:d,loading:_,totalRecords:b,lazyParams:o,loadLazyData:h,matchModes:M,selectedCampaigns:e,campaigns_status:S,isNewReport:m,onPage:B,onSort:Y,onFilter:G,confirmDeleteCampaign:z,prettyStatus:L,toggleEdit:O,goToReport:K,isUserSuperAdmin:c,moment:j}}},ie={key:0,class:"flex align-items-center justify-content-between mb-0 mr-0 col-12 generic-filters border-round-md mb-4 px-3"},ce=se("div",null,"Seleziona le campagne che vuoi includere nel report",-1),ue=[ce],de={key:0};function pe(U,n,g,a,T,D){const i=f("Column"),d=f("InputText"),_=f("Badge"),o=f("Dropdown"),b=f("Button"),M=f("DataTable"),S=f("ConfirmPopup"),m=ne("tooltip");return v(),F("div",null,[a.isNewReport?(v(),F("div",ie,ue)):y("",!0),r(M,{value:a.response.campaigns,totalRecords:a.response.total,lazy:!0,paginator:!0,rows:30,filters:a.filters,"onUpdate:filters":n[0]||(n[0]=e=>a.filters=e),ref:"dt",dataKey:"id",loading:a.loading,onPage:n[1]||(n[1]=e=>a.onPage(e)),onSort:n[2]||(n[2]=e=>a.onSort(e)),onFilter:n[3]||(n[3]=e=>a.onFilter()),filterDisplay:"row",removableSort:"",selection:a.selectedCampaigns,"onUpdate:selection":n[4]||(n[4]=e=>a.selectedCampaigns=e)},{empty:u(()=>[C(" Nessuna campagna trovata. ")]),default:u(()=>[a.isNewReport?(v(),w(i,{key:0,selectionMode:"multiple",headerStyle:"width: 3em"})):y("",!0),r(i,{field:"name",header:"Nome",filterMatchMode:"contains",ref:"name",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:u(({filterModel:e,filterCallback:s})=>[r(d,{type:"text",modelValue:e.value,"onUpdate:modelValue":c=>e.value=c,onKeydown:E(c=>s(),["enter"]),class:"p-column-filter",placeholder:"Filtra per campagna"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),r(i,{field:"company",header:"Azienda",filterMatchMode:"contains",ref:"company",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:u(({data:e})=>{var s;return[C(A(((s=e.company)==null?void 0:s.name)||"-"),1)]}),filter:u(({filterModel:e,filterCallback:s})=>[r(d,{type:"text",modelValue:e.value,"onUpdate:modelValue":c=>e.value=c,onKeydown:E(c=>s(),["enter"]),class:"p-column-filter",placeholder:"Filtra per azienda"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),r(i,{field:"start_at",header:"Data inizio",sortable:!1},{body:u(({data:e})=>[C(A(a.moment.unix(e.start_at).format("DD/MM/YYYY")),1)]),_:1}),r(i,{field:"end_at",header:"Data fine",sortable:!1},{body:u(({data:e})=>[C(A(a.moment.unix(e.end_at).format("DD/MM/YYYY")),1)]),_:1}),r(i,{field:"status",header:"Stato",sortable:!1,ref:"status",filterField:"status",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:u(({data:e})=>[e.status?(v(),F("span",de,[r(_,{value:a.prettyStatus(e.status),class:oe(["uppercase border-noround",e.status])},null,8,["value","class"])])):y("",!0)]),filter:u(({filterModel:e,filterCallback:s})=>[r(o,{options:a.campaigns_status,id:"status",class:"p-column-filter",optionLabel:"label",optionValue:"value",placeholder:"Filtra per stato",modelValue:e.value,"onUpdate:modelValue":c=>e.value=c,onChange:c=>s()},null,8,["options","modelValue","onUpdate:modelValue","onChange"])]),_:1},512),a.isNewReport?y("",!0):(v(),w(i,{key:1,header:"",style:{width:"12rem"}},{body:u(({data:e})=>[x(r(b,{type:"button",onClick:s=>a.goToReport(e.id),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-chart-bar",disabled:!e.report_ready},null,8,["onClick","disabled"]),[[m,"Report",void 0,{top:!0}]]),a.isUserSuperAdmin?x((v(),w(b,{key:0,type:"button",onClick:s=>a.toggleEdit(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-pencil"},null,8,["onClick"])),[[m,"Modifica",void 0,{top:!0}]]):y("",!0),a.isUserSuperAdmin?x((v(),w(b,{key:1,type:"button",onClick:s=>a.confirmDeleteCampaign(s,e.id),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200",icon:"pi pi-trash",disabled:e.can_delete},null,8,["onClick","disabled"])),[[m,"Elimina",void 0,{top:!0}]]):y("",!0)]),_:1}))]),_:1},8,["value","totalRecords","filters","loading","selection"]),r(S)])}const ge=ae(re,[["render",pe]]);export{ge as C};
