import{u as d,c as r,C as u,A as g,_ as C,a as n,b as i,w as f,r as o,o as e,d as S,t as A,e as p,f as T}from"../index92302.js";import{C as k}from"./CampaignsTable92302.js";import"./loader92302.js";const E={setup(){const t=d(),a=r(()=>t.getters[u.CURRENT_CAMPAIGNS]),c=r(()=>t.getters[g.IS_USER_SUPERADMIN]);return{campaigns:a,isUserSuperAdmin:c}},components:{CampaignsTable:k}},N={class:"flex justify-content-between align-items-center"},b={key:0,class:"uppercase"},h={key:0},y={key:1};function B(t,a,c,s,R,U){const m=o("Button"),_=o("CampaignsTable"),l=o("Card");return e(),n("div",null,[i(l,null,{content:f(()=>[S("div",N,[s.campaigns?(e(),n("h1",b,[s.campaigns.total==1?(e(),n("span",h," 1 Campagna")):(e(),n("span",y,A(s.campaigns.total)+" Campagne",1))])):p("",!0),s.isUserSuperAdmin?(e(),T(m,{key:1,label:"Nuova campagna",onClick:a[0]||(a[0]=v=>t.$router.push("/dettaglio-campagna"))})):p("",!0)]),i(_)]),_:1})])}const I=C(E,[["render",B]]);export{I as default};
