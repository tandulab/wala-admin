import{g as ee,u as K,h as G,i as ae,j as H,k as p,c as F,E as B,m as w,D as Y,_ as q,a as T,b as m,w as b,e as x,r as _,o as y,p as k,z as te,M as ne,s as U,B as oe,f as L,d as s,v as O,K as se,J as le,t as j}from"../index70335.js";import{h as f,s as S}from"./loader70335.js";import{h as ie}from"./moment70335.js";const ce={props:{contacts:Array},setup(){ee(()=>{});const d=K(),l=G();ae();const g=H(),e=p(),C=p({email:{value:"",matchMode:"contains"}}),v=p(!0),c=p(),a=p(0),r=p([{label:"My Filter",value:"myfilter"}]),h=F(()=>d.getters[Y.CURRENT_AUDIENCE]);function o(){const i=new Map;i.set("email",C.value.email.value),i.set("page",c.value.page+1),i.set("per_page",c.value.rows),c.value.sortField&&(c.value.sortOrder==1?i.set("sorted_by",c.value.sortField+"_asc"):i.set("sorted_by",c.value.sortField+"_desc")),setTimeout(()=>{E()},Math.random()*1e3+250)}const E=async function(){try{const i=await d.dispatch(B.FETCH_AUDIENCE_DETAIL,g.params.id+"");return v.value=!1,i}catch(i){f(d),w(l,i)}};return{dt:e,audience_detail:h,filters:C,loading:v,totalRecords:a,lazyParams:c,loadLazyData:o,matchModes:r,onPage:i=>{c.value=i,o()},onSort:i=>{c.value=i,o()},moment:ie}}},re={key:0};function de(d,l,g,e,C,v){const c=_("Column"),a=_("DataTable");return g.contacts?(y(),T("div",re,[m(a,{value:g.contacts,lazy:!1,paginator:!0,rows:30,ref:"dt",dataKey:"id",onPage:l[0]||(l[0]=r=>e.onPage(r)),onSort:l[1]||(l[1]=r=>e.onSort(r)),stateStorage:"local",stateKey:"dt-campaigns",removableSort:""},{empty:b(()=>[k(" Nessun referente trovato. ")]),default:b(()=>[m(c,{field:"email",header:"Email",ref:"email"},null,512),m(c,{field:"first_name",header:"Nome",ref:"name"},null,512),m(c,{field:"last_name",header:"Cognome",ref:"surname"},null,512),m(c,{field:"phone",header:"Telefono",ref:"phone"},null,512)]),_:1},8,["value"])])):x("",!0)}const ue=q(ce,[["render",de]]),me={setup(){const d=F(()=>a.getters[Y.CURRENT_AUDIENCE]),l=F(()=>a.getters[oe.CURRENT_COMPANIES]),g=p({icon:"pi pi-home",to:"/audience"}),e=p(!1),C=p([{label:""}]),v=p(""),c=H(),a=K(),r=G(),h=p(new Array),o=p({}),E=p(!1),A=p(!1),D=async function(){try{return await a.dispatch(ne.FETCH_ALL_COMPANIES)}catch(t){f(a),w(r,t)}},i=async function(t){S(a);try{const n=await a.dispatch(B.FETCH_AUDIENCE_DETAIL,t);return o.value.id=d.value.id,o.value.name=d.value.name,o.value.users=d.value.users,o.value.company_id=d.value.company?d.value.company.id+"":"",f(a),n}catch(n){f(a),w(r,n)}},u=()=>{e.value=!0},M=()=>{e.value=!1},R=t=>{if(t===0)return"0 B";let n=1e3,I=3,N=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],P=Math.floor(Math.log(t)/Math.log(n));return parseFloat((t/Math.pow(n,P)).toFixed(I))+" "+N[P]},J=t=>{h.value=t.files},Z=function(t){h.value.splice(t,1)},Q=async function(t){const n=new FormData;S(a),n.append("file",h.value[0]);const I={audience_id:d.value.id,formData:n};try{const N=await a.dispatch(B.IMPORT_CONTACTS,I);return h.value=[],U(r,{message:"File caricato correttamente.",title:""}),i(d.value.id+""),M(),f(a),N}catch(N){f(a),w(r,N)}},V=function(){var t,n;return((t=o.value)==null?void 0:t.name)==""||((n=o.value)==null?void 0:n.name)==null?E.value=!0:E.value=!1,E.value},z=function(){var t,n;return((t=o.value)==null?void 0:t.company_id)==""||((n=o.value)==null?void 0:n.company_id)==null?A.value=!0:A.value=!1,A.value},W=function(){V()||z()||(v.value!=""&&o.value.id?$():X())},X=async function(){S(a);const t={audience:{name:o.value.name,company_id:o.value.company_id}};try{const n=await a.dispatch(B.CREATE_AUDIENCE,t);return U(r,{message:"Audience creato correttamente.",title:""}),i(d.value.id+""),f(a),n}catch(n){f(a),w(r,n)}},$=async function(){S(a);const t={audience:{id:o.value.id,name:o.value.name,company_id:o.value.company_id}};try{const n=await a.dispatch(B.UPDATE_AUDIENCE,t);return U(r,{message:"Audience aggiornato correttamente.",title:""}),f(a),n}catch(n){f(a),w(r,n)}};return te(async()=>{v.value=c.params.id+"",D(),v.value!=""?(i(v.value),C.value[0]={label:"Modifica audience"}):C.value[0]={label:"Nuova audience"}}),{home:g,items:C,displayBasic:e,files:h,audience_detail:d,tmp_audience:o,invalid_name:E,invalid_company:A,response:l,audience_id:v,uploadContacts:Q,openBasic:u,onSelectedFiles:J,onRemoveTempDocument:Z,formatSize:R,validateName:V,validateCompany:z,saveAudience:W,fetchAllCompanies:D}},components:{ContactsTable:ue}},pe={class:"m-4"},_e={class:"flex align-items-center justify-content-between"},ve=s("h1",{class:"mb-3"},"AUDIENCE",-1),fe={class:"flex align-items-center justify-content-between mx-0"},he={class:"field col-4 px-0"},ye=s("label",{for:"name"},"Nome audience*",-1),Ce={key:0,id:"name",class:"p-error"},Ee={class:"field col-4 p-0 m-0 mb-3"},be=s("label",{for:"company"},"Azienda*",-1),ge={key:0,id:"company",class:"p-error"},Ae={class:"flex align-items-center justify-content-between"},Te=s("h1",null,"Contatti",-1),we=s("a",{href:"https://wala.s3-eu-central-1.amazonaws.com/wala_template_import_audience.xlsx",class:"p-button mr-4 p-button-outlined",icon:"pi pi-download"},[s("i",{class:"pi pi-download mr-2"}),k(" TEMPLATE ")],-1),xe={key:0,class:"m-0 p-0 list-none"},De={class:"flex align-items-center"},Ne=s("i",{class:"pi mr-2 document-icon"},null,-1),Be=s("br",null,null,-1),ke=["onClick"],Se=s("div",{class:"text-center"},[s("b",null,"Trascina qui il documento"),s("p",{class:"text-xs"},"(Dimensione massima 20 MB)")],-1),Me={class:"flex justify-content-end mt-3"};function Ie(d,l,g,e,C,v){const c=_("Breadcrumb"),a=_("Button"),r=_("InputText"),h=_("Dropdown"),o=_("Card"),E=_("Message"),A=_("FileUpload"),D=_("Dialog"),i=_("ContactsTable");return y(),T("div",pe,[m(c,{home:e.home,model:e.items,class:"mb-3 mt-0 pt-0"},null,8,["home","model"]),m(o,null,{content:b(()=>[s("div",_e,[ve,m(a,{class:"",label:"Salva",onClick:e.saveAudience},null,8,["onClick"])]),s("div",fe,[s("div",he,[ye,m(r,{id:"name",type:"text",modelValue:e.tmp_audience.name,"onUpdate:modelValue":l[0]||(l[0]=u=>e.tmp_audience.name=u),class:O(["w-full",{"p-invalid":e.invalid_name}]),onChange:e.validateName},null,8,["modelValue","class","onChange"]),e.invalid_name?(y(),T("small",Ce,"Campo obbligatorio.")):x("",!0)])]),s("div",Ee,[be,m(h,{modelValue:e.tmp_audience.company_id,"onUpdate:modelValue":l[1]||(l[1]=u=>e.tmp_audience.company_id=u),options:e.response.companies,optionLabel:"name",optionValue:"id",id:"company",class:O(["w-full",{"p-invalid":e.invalid_company}]),onChange:e.validateCompany},null,8,["modelValue","options","class","onChange"]),e.invalid_company?(y(),T("small",ge,"Campo obbligatorio.")):x("",!0)])]),_:1}),e.tmp_audience.id?(y(),L(o,{key:0,class:"mt-4"},{content:b(()=>[s("div",Ae,[Te,s("div",null,[we,m(a,{class:"",label:"carica",icon:"pi pi-upload",onClick:e.openBasic},null,8,["onClick"]),m(D,{header:"CARICA FILE",visible:e.displayBasic,"onUpdate:visible":l[4]||(l[4]=u=>e.displayBasic=u),style:{width:"500px"}},{default:b(()=>[e.tmp_audience.users&&e.tmp_audience.users.length>0?(y(),L(E,{key:0,severity:"warn"},{default:b(()=>[k("Attenzione! Importando un nuovo file i contatti presenti verrano sovrascritti.")]),_:1})):x("",!0),m(A,{name:"files[]",onUploader:l[2]||(l[2]=u=>e.uploadContacts(u)),multiple:!1,accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",maxFileSize:2e6,customUpload:!0,modelValue:e.files,"onUpdate:modelValue":l[3]||(l[3]=u=>e.files=u),onSelect:e.onSelectedFiles},{content:b(()=>[e.files?(y(),T("ul",xe,[(y(!0),T(se,null,le(e.files,(u,M)=>(y(),T("li",{key:u.name,class:"flex align-items-center p-fileupload-file justify-content-between"},[s("div",De,[Ne,k(" "+j(u.name),1),Be,k(" "+j(e.formatSize(u.size)),1)]),s("i",{class:"pi pi-times p-button-icon text-red-600 cursor-pointer font-semibold",onClick:R=>e.onRemoveTempDocument(M)},null,8,ke)]))),128))])):x("",!0)]),empty:b(()=>[Se]),_:1},8,["modelValue","onSelect"]),s("div",Me,[m(a,{class:"p-button-outlined",label:"carica",icon:"pi pi-upload",onClick:e.uploadContacts},null,8,["onClick"])])]),_:1},8,["visible"])])]),m(i,{contacts:e.tmp_audience.users},null,8,["contacts"])]),_:1})):x("",!0)])}const Ve=q(me,[["render",Ie]]);export{Ve as default};
