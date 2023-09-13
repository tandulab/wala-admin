import{g as A,F as O,u as S,h as z,i as D,k as f,c as E,O as T,m as M,n as V,s as R,G as F,_ as k,a as v,b as r,w as _,r as c,o as g,p as B,q as I,e as x,x as N,y as L,d as K,t as U}from"../index99933.js";import{h as q}from"./moment99933.js";import{h as Y}from"./loader99933.js";const $={setup(){A(()=>{p.value=!0,t.value={first:0,rows:o.value.rows,sortField:null,sortOrder:null,filters:d.value};const e=localStorage.getItem("dt-companies");if(t.value.page==null&&e){let s=JSON.parse(e);t.value.first=s.first,t.value.page=s.first/t.value.rows}O.register("myfilter",(s,P)=>s===P),i()});const l=S(),n=z(),b=D(),o=f(),d=f({name:{value:"",matchMode:"contains"}}),p=f(!0),t=f(),u=f(0),m=f([{label:"My Filter",value:"myfilter"}]),C=E(()=>l.getters[F.CURRENT_COMPANIES]);function i(){p.value=!0;const e=new Map;e.set("name",d.value.name.value),e.set("page",t.value.page+1),e.set("per_page",t.value.rows),t.value.sortField&&(t.value.sortOrder==1?e.set("sorted_by",t.value.sortField+"_asc"):e.set("sorted_by",t.value.sortField+"_desc")),setTimeout(()=>{h(e)},Math.random()*1e3+250)}const h=async function(e){try{const s=await l.dispatch(T.FETCH_ALL_COMPANIES,e);return p.value=!1,s}catch(s){Y(l),M(n,s)}},a=async function(e){await l.dispatch(T.DELETE_COMPANY,e).then(()=>{R(n,{message:"Azienda eliminata correttamente.",title:""}),i()}).catch(s=>{M(n,s)})};return{dt:o,response:C,filters:d,loading:p,totalRecords:u,lazyParams:t,loadLazyData:i,matchModes:m,onPage:e=>{t.value=e,i()},onSort:e=>{t.value=e,i()},onFilter:()=>{t.value.page=0,t.value.filters=d.value,i()},confirmDeleteCompany:(e,s)=>{b.require({target:e.currentTarget,message:"Sei sicuro di voler eliminare questa azienda?",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{a(s)}})},toggleEdit:function(e){V.push({name:"dettaglio-azienda",params:{id:e.id}})},moment:q}}},G=["src"];function j(l,n,b,o,d,p){const t=c("InputText"),u=c("Column"),m=c("Button"),C=c("DataTable"),i=c("ConfirmPopup"),h=L("tooltip");return g(),v("div",null,[r(C,{value:o.response.companies,lazy:!0,paginator:!0,rows:30,totalRecords:o.response.total,filters:o.filters,"onUpdate:filters":n[0]||(n[0]=a=>o.filters=a),ref:"dt",dataKey:"id",loading:o.loading,onPage:n[1]||(n[1]=a=>o.onPage(a)),onSort:n[2]||(n[2]=a=>o.onSort(a)),onFilter:n[3]||(n[3]=a=>o.onFilter()),filterDisplay:"row",stateStorage:"local",stateKey:"dt-companies",removableSort:""},{empty:_(()=>[B(" Nessuna azienda trovata. ")]),default:_(()=>[r(u,{field:"name",header:"Nome",filterMatchMode:"contains",ref:"name",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:_(({filterModel:a,filterCallback:y})=>[r(t,{type:"text",modelValue:a.value,"onUpdate:modelValue":w=>a.value=w,onKeydown:I(w=>y(),["enter"]),class:"p-column-filter",placeholder:"Filtra per nome"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),r(u,{field:"logo",header:"Logo",sortable:!1},{body:_(({data:a})=>[a.logo_url?(g(),v("img",{key:0,src:a.logo_url,style:{height:"4rem"}},null,8,G)):x("",!0)]),_:1}),r(u,{header:"",style:{width:"9rem"}},{body:_(({data:a})=>[N(r(m,{type:"button",onClick:y=>o.toggleEdit(a),class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-pencil"},null,8,["onClick"]),[[h,"Modifica",void 0,{top:!0}]]),N(r(m,{type:"button",onClick:y=>o.confirmDeleteCompany(y,a.id),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200",icon:"pi pi-trash"},null,8,["onClick"]),[[h,"Elimina",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading"]),r(i)])}const H=k($,[["render",j]]),J={setup(){const l=S();return{companies:E(()=>l.getters[F.CURRENT_COMPANIES])}},components:{CompaniesTable:H}},Q={class:"flex justify-content-between align-items-center"},W={key:0,class:"uppercase"},X={key:0},Z={key:1};function ee(l,n,b,o,d,p){const t=c("Button"),u=c("CompaniesTable"),m=c("Card");return g(),v("div",null,[r(m,null,{content:_(()=>[K("div",Q,[o.companies?(g(),v("h1",W,[o.companies.total==1?(g(),v("span",X," 1 Azienda")):(g(),v("span",Z,U(o.companies.total)+" Aziende",1))])):x("",!0),r(t,{label:"Nuova azienda",onClick:n[0]||(n[0]=C=>l.$router.push("/dettaglio-azienda"))})]),r(u)]),_:1})])}const le=k(J,[["render",ee]]);export{le as default};
