import{R as Q,u as X,h as Y,c as I,j as J,k as w,E as K,V as N,m as V,B as Z,W as ee,_ as te,a as c,b as p,d as t,w as y,t as v,D as L,M as A,e as h,r as k,o as i,f as S,x as M,X as se,Y as oe,p as T,y as ae}from"../index55442.js";import{h as F,s as ne}from"./loader55442.js";const ie=function(e){return e.params.id!==void 0?e.params.id:""},re=Q({name:"ReportView",setup(){const e=X(),d=Y(),n=I(()=>e.getters[ee.CURRENT_REPORT]),O=I(()=>e.getters["auth/isUserSuperAdmin"]),P=I(()=>e.getters["auth/isUserAdmin"]),$=J(),D=w({icon:"pi pi-home",to:"/campagne"}),B=w([{label:"Report"}]),b=["Carichi di cura","Economico - Finanziarie","Salute e benessere","Mobilit\xE0 e trasporto","Formazione","Tempo libero"],x=w(),m=w(),C=w(),z=I(()=>({chartData:{datasets:[{data:n.value!=null?n.value.sections:[],backgroundColor:["#cd1867","#DB4CB3","#EABB3D","#B958D8","#a1c653","#009265"]}],labels:b},chartOptions:{maintainAspectRatio:.5,plugins:{legend:{display:!1},tooltip:{callbacks:{label:s=>`${s.formattedValue}`}}},scales:{y:{ticks:{display:!1}}}}})),f=w(),a=w([{label:"Et\xE0",code:"age",items:[{label:"18-34",value:"filter_age_18"},{label:"35-54",value:"filter_age_35"},{label:"55-64",value:"filter_age_55"},{label:"65+",value:"filter_age_65"}]},{label:"Genere",code:"genre",items:[{label:"Maschio",value:"filter_gender_m"},{label:"Femmina",value:"filter_gender_f"},{label:"Altro/Preferisco non rispondere",value:"filter_gender_a"}]}]),E=async function(s){try{const o=await e.dispatch(N.FETCH_REPORT_DETAIL,s);return G(),U(),o}catch(o){F(e),V(d,o)}},j=async function(){m.value=ie($);const s=new Map;if(f.value&&s.set("filter",f.value),s.set("report_id",m.value),m.value!="")if($.name=="dettaglio-report")D.value={icon:"pi pi-home",to:"/reports"},E(s);else try{const o=await e.dispatch(N.SHOW,s);return G(),U(),o}catch(o){F(e),V(d,o)}},U=()=>{C.value=[],n.value.answers[0].forEach(s=>{C.value.push(q(s))})},q=s=>{const o=[],l=[];if(n.value!=null)return s.answers.forEach(r=>{o.push(r.total),l.push(r.showrt_answer_label)}),{chartData:{datasets:[{data:o,backgroundColor:["#6EF0D2","#DB4CB3","#EABB3D","#F0A68F"]}],labels:l},chartOptions:{indexAxis:"y",maintainAspectRatio:.5,plugins:{title:{display:!1,text:`${s.question_label} - Rispondenti: ${s.answer_count} su ${n.value.completed}`},legend:{display:!1},tooltip:{callbacks:{label:r=>"",title:r=>[`${o[r[0].dataIndex]} risposte`,`${Math.round(o[r[0].dataIndex]*100/s.answer_count)}% del campione`,`${Math.round(o[r[0].dataIndex]*100/n.value.completed)}% del totale`]}}}},question:`${s.question_label} - Rispondenti: ${s.answer_count} su ${n.value.completed} `}},H=(s,o)=>{const l=[],r=[],g=[];if(n.value!=null)return s.answers.forEach(_=>{l.push(_.total),g.push(_.showrt_answer_label),r.push(_.answer_label),s.answer_count*100/n.value.completed}),{chartData:{datasets:[{data:l,backgroundColor:o}],labels:g},chartOptions:{maintainAspectRatio:.5,plugins:{title:{display:!0},legend:{display:!1},tooltip:{callbacks:{label:_=>"",title:_=>[`${r[_[0].dataIndex]}`,`${l[_[0].dataIndex]} risposte`,`${Math.round(l[_[0].dataIndex]*100/s.answer_count)}% del campione`,`${Math.round(l[_[0].dataIndex]*100/n.value.completed)}% del totale`]}}}},question:`${s.question_label} <br> Rispondenti: ${s.answer_count} su ${n.value.completed} `}},G=()=>{if(x.value=[],b.forEach((s,o)=>{let l={title:s,content:[]};x.value.push(l)}),n.value.answers)for(let s in n.value.answers)switch(+s){case 1:{R(s,"#cd1867",0);break}case 2:R(s,"#DB4CB3",1);break;case 3:R(s,"#EABB3D",2);break;case 4:R(s,"#B958D8",3);break;case 5:R(s,"#a1c653",4);break;case 6:R(s,"#009265",5);break}},R=(s,o,l)=>{n.value.answers[s].forEach(r=>{x.value[l].content.push(H(r,o))})},W=async function(s){let o="";s?o=`/reports/${m.value}/download_report`:o=`/campaigns/${m.value}/download_report`,ne(e);try{const r=await Z({method:"get",url:o,responseType:"blob",timeout:6e4});var l=new Blob([r.data],{type:r.headers["content-type"]});const g=document.createElement("a");g.href=window.URL.createObjectURL(l),s?g.download=`report_${n.value.report_title.replace(/\s/g,"_").toLocaleLowerCase()}.xlsx`:g.download=`report_${n.value.campaign_name.replace(/\s/g,"_").toLocaleLowerCase()}.xlsx`,g.click(),F(e)}catch(r){F(e),V(d,r)}};return K(async()=>{j()}),{home:D,items:B,chartSections:z,genericChartData:H,chartsTab0:C,report:n,tabs:x,groupedFilters:a,selectedGroupedFilter:f,route:$,downloadReport:W,userIsSuperAdmin:O,isUserAdmin:P,initReport:j}}}),le="/assets/user55442.svg",ce="/assets/thumbs-up55442.svg",de="/assets/hourglass55442.svg",pe="/assets/thumbs-down55442.svg";const u=e=>(se("data-v-92cce65f"),e=e(),oe(),e),ue={class:"dashboard"},me={class:"mb-3"},_e={class:"container"},he={class:"col-12 flex align-items-center justify-content-between pb-0"},be={class:"flex"},ve=u(()=>t("h3",{class:"text-white m-0 mr-3"},"Questionario",-1)),fe={key:0,class:"text-white mt-0"},ge={key:1,class:"text-white mt-0"},we={key:0,class:"col-12 flex align-items-center"},ye=u(()=>t("h3",{class:"text-white m-0 mr-3"},"Inizio",-1)),ke={class:"text-white mt-0"},xe={key:1,class:"col-12 flex align-items-center"},Ee=u(()=>t("h3",{class:"text-white m-0 mr-3"},"Scadenza",-1)),Re={class:"text-white mt-0"},Te={key:0,class:"grid justify-content-center align-items-end flex-wrap border-round-sm"},Ce={class:"col-12"},$e={class:"container"},De=u(()=>t("h3",null,"Fruizione questionario",-1)),Be={class:"flex align-items-center justify-content-between flex-wrap"},Ie={class:"counter-block border-round-2xl p-3"},Le={class:"text-white m-0"},Ae=u(()=>t("div",{class:"flex align-items-center justify-content-between"},[T(" Iscritti "),t("img",{src:le,class:"h-2rem"})],-1)),Se={class:"counter-block border-round-2xl p-3"},Fe={class:"text-white m-0"},ze=u(()=>t("div",{class:"flex align-items-center justify-content-between"},[T(" Concluso "),t("img",{src:ce,class:"h-2rem"})],-1)),Ve={class:"counter-block border-round-2xl p-3"},Me={class:"text-white m-0"},Oe=u(()=>t("div",{class:"flex align-items-center justify-content-between"},[T(" Iniziato "),t("img",{src:de,class:"h-2rem"})],-1)),Pe={class:"counter-block border-round-2xl p-3"},je={class:"text-white m-0"},Ue=u(()=>t("div",{class:"flex align-items-center justify-content-between"},[T(" Non iniziato "),t("img",{src:pe,class:"h-2rem"})],-1)),He={class:"col-12 pl-0 ml-0 mb-0"},Ge=u(()=>t("h3",{class:"mb-0"},"Risultati",-1)),Ne={class:"flex justify-content-end mt-0 mb-2"},qe={class:"wrapper-charts"},We={class:"flex"},Qe={class:""},Xe=u(()=>t("h3",{class:"mt-3"},"Bisogni",-1)),Ye=u(()=>t("p",{class:"mb-6 font-italic line-height-2"},[T("I punteggi assegnati alle singole aree previste dal grafico indicano l\u2019intensit\xE0 di bisogno rilevata nella popolazione aziendale. Pi\xF9 alto il punteggio, maggiore l\u2019intensit\xE0 di bisogno rilevata nella specifica area."),t("br"),T(" Si noti bene che il punteggio non si riferisce ad una porzione percentuale della popolazione aziendale.")],-1)),Je={key:0,class:"flex row-gap-3 flex-column"},Ke={class:"text-center font-semibold"},Ze=["innerHTML"],et={class:"pi pi-info-circle cursor-pointer"},tt={key:0,class:"flex flex-wrap"},st={class:"text-center font-semibold"},ot=["innerHTML"],at={class:"pi pi-info-circle cursor-pointer"},nt={class:"text-center font-semibold"},it=["innerHTML"],rt={class:"pi pi-info-circle cursor-pointer"};function lt(e,d,n,O,P,$){const D=k("Breadcrumb"),B=k("Button"),b=k("Card"),x=k("Dropdown"),m=k("Chart"),C=k("TabPanel"),z=k("TabView"),f=ae("tooltip");return i(),c("div",ue,[p(D,{home:e.home,model:e.items,class:"mb-3 mt-0 pt-0"},null,8,["home","model"]),t("div",me,[p(b,{class:"box py-2"},{content:y(()=>[t("div",_e,[t("div",he,[t("div",be,[ve,e.report&&e.report.campaign_name?(i(),c("span",fe,v(e.report.campaign_name),1)):h("",!0),e.report&&e.report.report_title?(i(),c("span",ge,v(e.report.report_title),1)):h("",!0)]),(e.isUserAdmin||e.userIsSuperAdmin)&&e.route.name!="dettaglio-report"?(i(),S(B,{key:0,class:"p-button-outlined p-button-secondary",label:"Scarica Report",onClick:d[0]||(d[0]=a=>e.downloadReport(!1))})):h("",!0),(e.isUserAdmin||e.userIsSuperAdmin)&&e.route.name=="dettaglio-report"?(i(),S(B,{key:1,class:"p-button-outlined p-button-secondary",label:"Scarica Report",onClick:d[1]||(d[1]=a=>e.downloadReport(!0))})):h("",!0)]),e.report&&e.report.campaign_start_at?(i(),c("div",we,[ye,t("span",ke,v(e.report.campaign_start_at),1)])):h("",!0),e.report&&e.report.campaign_end_at?(i(),c("div",xe,[Ee,t("span",Re,v(e.report.campaign_end_at),1)])):h("",!0)])]),_:1})]),e.report?(i(),c("div",Te,[t("div",Ce,[t("div",$e,[De,t("div",Be,[t("div",Ie,[t("h2",Le,v(e.report.total),1),Ae]),t("div",Se,[t("h2",Fe,v(e.report.completed),1),ze]),t("div",Ve,[t("h2",Me,v(e.report.started),1),Oe]),t("div",Pe,[t("h2",je,v(e.report.total-e.report.completed-e.report.started),1),Ue])]),t("div",He,[Ge,t("div",Ne,[p(x,{modelValue:e.selectedGroupedFilter,"onUpdate:modelValue":d[2]||(d[2]=a=>e.selectedGroupedFilter=a),options:e.groupedFilters,optionLabel:"label",optionValue:"value",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Filtra per et\xE0 o genere",onChange:d[3]||(d[3]=a=>e.initReport()),showClear:!0},null,8,["modelValue","options"])])]),t("div",qe,[t("div",We,[p(b,null,{content:y(()=>[t("div",Qe,[t("div",null,[Xe,Ye,p(m,{type:"bar",data:e.chartSections.chartData,options:e.chartSections.chartOptions},null,8,["data","options"])])])]),_:1})]),e.chartsTab0?(i(),c("div",Je,[(i(!0),c(L,null,A(e.chartsTab0.slice(0,2),a=>(i(),S(b,{key:a},{content:y(()=>[t("div",Ke,[t("span",{innerHTML:a.question,class:"line-height-3"},null,8,Ze),M(t("i",et,null,512),[[f,"Il questionario \xE8 adattivo e mostra le domande solo agli utenti in target. La domanda \xE8 stata posta ad un campione selezionato di utenti. Passando il mouse sul grafico \xE8 possibile accedere alle statistiche di approfondimento.",void 0,{top:!0}]])]),p(m,{type:"bar",data:a.chartData,options:a.chartOptions},null,8,["data","options"])]),_:2},1024))),128))])):h("",!0)]),e.chartsTab0?(i(),c("div",tt,[(i(!0),c(L,null,A(e.chartsTab0.slice(2),a=>(i(),c("div",{class:"col-6",key:a},[p(b,null,{content:y(()=>[t("div",st,[t("span",{innerHTML:a.question,class:"line-height-3"},null,8,ot),M(t("i",at,null,512),[[f,"Il questionario \xE8 adattivo e mostra le domande solo agli utenti in target. La domanda \xE8 stata posta ad un campione selezionato di utenti. Passando il mouse sul grafico \xE8 possibile accedere alle statistiche di approfondimento.",void 0,{top:!0}]])]),p(m,{type:"bar",data:a.chartData,options:a.chartOptions},null,8,["data","options"])]),_:2},1024)]))),128))])):h("",!0),p(b,{class:"mt-4"},{content:y(()=>[p(z,null,{default:y(()=>[(i(!0),c(L,null,A(e.tabs,a=>(i(),S(C,{key:a.title,header:a.title},{default:y(()=>[(i(!0),c(L,null,A(a.content,E=>(i(),c("div",{key:E,class:"my-4 xs:col-12 xs:col-offset-0 lg:col-8 lg:col-offset-2"},[t("div",nt,[t("span",{innerHTML:E.question,class:"line-height-3"},null,8,it),M(t("i",rt,null,512),[[f,"Il questionario \xE8 adattivo e mostra le domande solo agli utenti in target. La domanda \xE8 stata posta ad un campione selezionato di utenti. Passando il mouse sul grafico \xE8 possibile accedere alle statistiche di approfondimento.",void 0,{top:!0}]])]),p(m,{type:"bar",data:E.chartData,options:E.chartOptions},null,8,["data","options"])]))),128))]),_:2},1032,["header"]))),128))]),_:1})]),_:1})])])])):h("",!0)])}const pt=te(re,[["render",lt],["__scopeId","data-v-92cce65f"]]);export{pt as default};
