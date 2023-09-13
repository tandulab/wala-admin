import{k as _,j as W,u as X,h as Z,i as $,c as A,E as ee,s as U,K as g,m as v,n as I,G as ae,U as M,O as te,_ as ne,a as y,d as i,b as c,w as B,D as oe,r as f,o as p,f as se,e as E,p as F,v as x}from"../index46308.js";import"./moment46308.js";import{s as k,h as m}from"./loader46308.js";const le={setup(){const D=_({icon:"pi pi-home",to:"/referenti"}),s=_(""),S=_([{label:""}]),a=W(),n=X(),r=Z(),t=_({}),b=$(),h=_(!1),C=_(!1),d=_(!1),R=_(),T=A(()=>n.getters[ae.CURRENT_COMPANIES]),u=A(()=>n.getters[M.CURRENT_USER]),l=A(()=>n.getters[M.CURRENT_USERS]),O=async function(){try{return await n.dispatch(te.FETCH_ALL_COMPANIES)}catch(e){m(n),v(r,e)}},z=async function(){try{const e=await n.dispatch(g.FETCH_USER_DETAIL,a.params.id+"");return j(),e}catch(e){m(n),v(r,e)}},P=async function(){if(V()||N()||w())return;k(n);const e={user:t.value};try{const o=await n.dispatch(g.UPDATE_USER,e);return U(r,{message:"Referente aggiornato correttamente.",title:""}),I.replace({name:"referenti"}),m(n),o}catch(o){m(n),v(r,o)}},H=async function(){if(V()||N()||w())return;k(n);const e={user:t.value};try{const o=await n.dispatch(g.CREATE_USER,e);return U(r,{message:"Referente creato correttamente.",title:""}),I.replace({name:"referenti"}),m(n),o}catch(o){m(n),v(r,o)}},j=function(){var e;t.value.id=u.value.id,t.value.first_name=u.value.first_name,t.value.last_name=u.value.last_name,t.value.email=u.value.email,t.value.company_id=(e=u.value.company)==null?void 0:e.id},G=function(){if(R.value&&t.value.id){if(!t.value.company_id){U(r,{message:"Campo azienda obbligatorio",title:"",error:!0});return}q()}else s.value!=""&&t.value.id?P():H()},q=async function(){k(n);const e={user_id:t.value.id,users:{company_id:t.value.company_id}};try{const o=await n.dispatch(g.ADD_USER_TO_ADMIN,e);return U(r,{message:"Referente creato correttamente.",title:""}),m(n),o}catch(o){m(n),v(r,o)}},N=function(){var e,o;return((e=t.value)==null?void 0:e.last_name)==""||((o=t.value)==null?void 0:o.last_name)==null?C.value=!0:C.value=!1,C.value},V=function(){var e,o;return((e=t.value)==null?void 0:e.first_name)==""||((o=t.value)==null?void 0:o.first_name)==null?h.value=!0:h.value=!1,h.value},w=function(){var e,o;return((e=t.value)==null?void 0:e.email)==""||((o=t.value)==null?void 0:o.email)==null?d.value=!0:d.value=!1,d.value},Y=e=>{b.require({target:e.currentTarget,message:"Sei sicuro di voler inviare le credenziali?",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{K()}})},K=async function(){try{const e=await n.dispatch(g.AUTH_SEND_CREDENTIALS,t.value.id);return U(r,{message:"Credenziali inviate correttamente.",title:""}),e}catch(e){m(n),v(r,e)}},J=async function(e){const o=new Map;o.set("email",e.query),o.set("per_page",1e6);try{return await n.dispatch(g.FETCH_ALL_USERS,o)}catch(L){m(n),v(r,L)}},Q=function(e){t.value.first_name=e.value.first_name,t.value.last_name=e.value.last_name,t.value.email=e.value.email,t.value.id=e.value.id};return ee(async()=>{O(),s.value=a.params.id+"",s.value!=""?(z(),S.value[0]={label:"Modifica referente"}):S.value[0]={label:"Nuovo referente"}}),{user_detail:u,home:D,items:S,response:T,tmp_user:t,invalid_first_name:h,invalid_last_name:C,invalid_email:d,search_email:R,resp_users:l,route:a,saveUser:G,validateLastName:N,validateFirstName:V,validateEmail:w,confirmSendCredential:Y,fetchAllUsers:J,onSelectUser:Q}},components:{}};const ie={class:"m-4"},re={class:"flex align-items-center justify-content-between"},ce=i("h1",null,"REFERENTE",-1),me={key:0},de={class:"formgrid flex col-10 pl-0"},ue={class:"field col-6 flex flex-column"},_e=i("label",{for:"name"},"Email",-1),fe={class:"formgrid grid col-10"},ve={class:"field col-6"},pe=i("label",{for:"name"},"Nome*",-1),he={key:0,id:"name",class:"p-error"},Ce={class:"field col-6"},ge=i("label",{for:"name"},"Cognome*",-1),ye={key:0,id:"name",class:"p-error"},Ee={class:"field col-6"},Ue=i("label",{for:"name"},"Email*",-1),Se={key:0,id:"name",class:"p-error"},be={class:"field col-6"},Re={for:"company"},Te={key:0},Ne={class:"flex justify-content-end"};function Ve(D,s,S,a,n,r){const t=f("Breadcrumb"),b=f("Button"),h=f("Message"),C=f("AutoComplete"),d=f("InputText"),R=f("Dropdown"),T=f("Card"),u=f("ConfirmPopup");return p(),y(oe,null,[i("div",ie,[c(t,{home:a.home,model:a.items,class:"mb-3 mt-0 pt-0"},null,8,["home","model"]),c(T,null,{content:B(()=>[i("div",re,[ce,a.tmp_user.id?(p(),se(b,{key:0,label:"Invia credenziali",onClick:s[0]||(s[0]=l=>a.confirmSendCredential(l)),class:"p-button-outlined"})):E("",!0)]),a.route.params.id?E("",!0):(p(),y("div",me,[c(h,{severity:"info"},{default:B(()=>[F("Seleziona un utente indicando la sua email oppure compila il form sottostante")]),_:1}),i("div",de,[i("div",ue,[_e,c(C,{modelValue:a.search_email,"onUpdate:modelValue":s[1]||(s[1]=l=>a.search_email=l),suggestions:a.resp_users.users,forceSelection:"",onComplete:s[2]||(s[2]=l=>a.fetchAllUsers(l)),optionLabel:"email",optionValue:"id",id:"search-user",onItemSelect:s[3]||(s[3]=l=>a.onSelectUser(l))},null,8,["modelValue","suggestions"])])])])),i("div",fe,[i("div",ve,[pe,c(d,{id:"name",type:"text",modelValue:a.tmp_user.first_name,"onUpdate:modelValue":s[4]||(s[4]=l=>a.tmp_user.first_name=l),class:x(["w-full",{"p-invalid":a.invalid_first_name}]),onChange:a.validateFirstName},null,8,["modelValue","class","onChange"]),a.invalid_first_name?(p(),y("small",he,"Campo obbligatorio.")):E("",!0)]),i("div",Ce,[ge,c(d,{id:"name",type:"text",modelValue:a.tmp_user.last_name,"onUpdate:modelValue":s[5]||(s[5]=l=>a.tmp_user.last_name=l),class:x(["w-full",{"p-invalid":a.invalid_last_name}]),onChange:a.validateLastName},null,8,["modelValue","class","onChange"]),a.invalid_last_name?(p(),y("small",ye,"Campo obbligatorio.")):E("",!0)]),i("div",Ee,[Ue,c(d,{id:"name",type:"text",modelValue:a.tmp_user.email,"onUpdate:modelValue":s[6]||(s[6]=l=>a.tmp_user.email=l),class:x(["w-full",{"p-invalid":a.invalid_email}]),onChange:a.validateEmail},null,8,["modelValue","class","onChange"]),a.invalid_email?(p(),y("small",Se,"Campo obbligatorio.")):E("",!0)]),i("div",be,[i("label",Re,[F("Azienda"),a.search_email!=""?(p(),y("span",Te,"*")):E("",!0)]),c(R,{modelValue:a.tmp_user.company_id,"onUpdate:modelValue":s[7]||(s[7]=l=>a.tmp_user.company_id=l),options:a.response.companies,optionLabel:"name",optionValue:"id",id:"company",class:"w-full"},null,8,["modelValue","options"])])]),i("div",Ne,[c(b,{label:"Salva",onClick:a.saveUser},null,8,["onClick"])])]),_:1})]),c(u)],64)}const ke=ne(le,[["render",Ve]]);export{ke as default};
