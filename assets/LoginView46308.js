import{Z as xe,k as w,$ as Ee,z as I,a0 as q,a1 as P,a2 as _e,c as h,a3 as Ce,a4 as Ve,a5 as H,a6 as W,a7 as m,E as Y,R as Ie,g as Se,a8 as J,u as je,h as Oe,a9 as Pe,n as Le,m as Te,_ as ze,a as B,b as S,w as Q,r as N,o as k,d as C,v as X,t as K,e as ee,aa as Ae,ab as Be}from"../index46308.js";import{s as Ne,h as te}from"./loader46308.js";function ne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((r,t)=>(n.includes(t)||(r[t]=m(e[t])),r),{})}function O(e){return typeof e=="function"}function ke(e){return Ce(e)||Ve(e)}function ue(e,n,r){let t=e;const a=n.split(".");for(let l=0;l<a.length;l++){if(!t[a[l]])return r;t=t[a[l]]}return t}function D(e,n,r){return h(()=>e.some(t=>ue(n,t,{[r]:!1})[r]))}function re(e,n,r){return h(()=>e.reduce((t,a)=>{const l=ue(n,a,{[r]:!1})[r]||[];return t.concat(l)},[]))}function ce(e,n,r,t){return e.call(t,m(n),m(r),t)}function de(e){return e.$valid!==void 0?!e.$valid:!e}function De(e,n,r,t,a,l,v){let{$lazy:i,$rewardEarly:f}=a,o=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],c=arguments.length>8?arguments[8]:void 0,d=arguments.length>9?arguments[9]:void 0,p=arguments.length>10?arguments[10]:void 0;const g=w(!!t.value),s=w(0);r.value=!1;const $=I([n,t].concat(o,p),()=>{if(i&&!t.value||f&&!d.value&&!r.value)return;let u;try{u=ce(e,n,c,v)}catch(R){u=Promise.reject(R)}s.value++,r.value=!!s.value,g.value=!1,Promise.resolve(u).then(R=>{s.value--,r.value=!!s.value,l.value=R,g.value=de(R)}).catch(R=>{s.value--,r.value=!!s.value,l.value=R,g.value=!0})},{immediate:!0,deep:typeof n=="object"});return{$invalid:g,$unwatch:$}}function qe(e,n,r,t,a,l,v,i){let{$lazy:f,$rewardEarly:o}=t;const c=()=>({}),d=h(()=>{if(f&&!r.value||o&&!i.value)return!1;let p=!0;try{const g=ce(e,n,v,l);a.value=g,p=de(g)}catch(g){a.value=g}return p});return{$unwatch:c,$invalid:d}}function Ge(e,n,r,t,a,l,v,i,f,o,c){const d=w(!1),p=e.$params||{},g=w(null);let s,$;e.$async?{$invalid:s,$unwatch:$}=De(e.$validator,n,d,r,t,g,a,e.$watchTargets,f,o,c):{$invalid:s,$unwatch:$}=qe(e.$validator,n,r,t,g,a,f,o);const u=e.$message;return{$message:O(u)?h(()=>u(ne({$pending:d,$invalid:s,$params:ne(p),$model:n,$response:g,$validator:l,$propertyPath:i,$property:v}))):u||"",$params:p,$pending:d,$invalid:s,$response:g,$unwatch:$}}function Fe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=m(e),r=Object.keys(n),t={},a={},l={};let v=null;return r.forEach(i=>{const f=n[i];switch(!0){case O(f.$validator):t[i]=f;break;case O(f):t[i]={$validator:f};break;case i==="$validationGroups":v=f;break;case i.startsWith("$"):l[i]=f;break;default:a[i]=f}}),{rules:t,nestedValidators:a,config:l,validationGroups:v}}function Ue(){}const Me="__root";function $e(e,n,r){if(r)return n?n(e()):e();try{var t=Promise.resolve(e());return n?t.then(n):t}catch(a){return Promise.reject(a)}}function Ze(e,n){return $e(e,Ue,n)}function He(e,n){var r=e();return r&&r.then?r.then(n):n(r)}function We(e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{return Promise.resolve(e.apply(this,n))}catch(t){return Promise.reject(t)}}}function Ye(e,n,r,t,a,l,v,i,f){const o=Object.keys(e),c=t.get(a,e),d=w(!1),p=w(!1),g=w(0);if(c){if(!c.$partial)return c;c.$unwatch(),d.value=c.$dirty.value}const s={$dirty:d,$path:a,$touch:()=>{d.value||(d.value=!0)},$reset:()=>{d.value&&(d.value=!1)},$commit:()=>{}};return o.length?(o.forEach($=>{s[$]=Ge(e[$],n,s.$dirty,l,v,$,r,a,f,p,g)}),s.$externalResults=h(()=>i.value?[].concat(i.value).map(($,u)=>({$propertyPath:a,$property:r,$validator:"$externalResults",$uid:`${a}-externalResult-${u}`,$message:$,$params:{},$response:null,$pending:!1})):[]),s.$invalid=h(()=>{const $=o.some(u=>m(s[u].$invalid));return p.value=$,!!s.$externalResults.value.length||$}),s.$pending=h(()=>o.some($=>m(s[$].$pending))),s.$error=h(()=>s.$dirty.value?s.$pending.value||s.$invalid.value:!1),s.$silentErrors=h(()=>o.filter($=>m(s[$].$invalid)).map($=>{const u=s[$];return P({$propertyPath:a,$property:r,$validator:$,$uid:`${a}-${$}`,$message:u.$message,$params:u.$params,$response:u.$response,$pending:u.$pending})}).concat(s.$externalResults.value)),s.$errors=h(()=>s.$dirty.value?s.$silentErrors.value:[]),s.$unwatch=()=>o.forEach($=>{s[$].$unwatch()}),s.$commit=()=>{p.value=!0,g.value=Date.now()},t.set(a,e,s),s):(c&&t.set(a,e,s),s)}function Je(e,n,r,t,a,l,v){const i=Object.keys(e);return i.length?i.reduce((f,o)=>(f[o]=G({validations:e[o],state:n,key:o,parentKey:r,resultsCache:t,globalConfig:a,instance:l,externalResults:v}),f),{}):{}}function Qe(e,n,r){const t=h(()=>[n,r].filter(s=>s).reduce((s,$)=>s.concat(Object.values(m($))),[])),a=h({get(){return e.$dirty.value||(t.value.length?t.value.every(s=>s.$dirty):!1)},set(s){e.$dirty.value=s}}),l=h(()=>{const s=m(e.$silentErrors)||[],$=t.value.filter(u=>(m(u).$silentErrors||[]).length).reduce((u,R)=>u.concat(...R.$silentErrors),[]);return s.concat($)}),v=h(()=>{const s=m(e.$errors)||[],$=t.value.filter(u=>(m(u).$errors||[]).length).reduce((u,R)=>u.concat(...R.$errors),[]);return s.concat($)}),i=h(()=>t.value.some(s=>s.$invalid)||m(e.$invalid)||!1),f=h(()=>t.value.some(s=>m(s.$pending))||m(e.$pending)||!1),o=h(()=>t.value.some(s=>s.$dirty)||t.value.some(s=>s.$anyDirty)||a.value),c=h(()=>a.value?f.value||i.value:!1),d=()=>{e.$touch(),t.value.forEach(s=>{s.$touch()})},p=()=>{e.$commit(),t.value.forEach(s=>{s.$commit()})},g=()=>{e.$reset(),t.value.forEach(s=>{s.$reset()})};return t.value.length&&t.value.every(s=>s.$dirty)&&d(),{$dirty:a,$errors:v,$invalid:i,$anyDirty:o,$error:c,$pending:f,$touch:d,$reset:g,$silentErrors:l,$commit:p}}function G(e){const n=We(function(){return A(),He(function(){if(u.$rewardEarly)return Z(),Ze(Y)},function(){return $e(Y,function(){return new Promise(y=>{if(!z.value)return y(!T.value);const E=I(z,()=>{y(!T.value),E()})})})})});let{validations:r,state:t,key:a,parentKey:l,childResults:v,resultsCache:i,globalConfig:f={},instance:o,externalResults:c}=e;const d=l?`${l}.${a}`:a,{rules:p,nestedValidators:g,config:s,validationGroups:$}=Fe(r),u=Object.assign({},f,s),R=a?h(()=>{const y=m(t);return y?m(y[a]):void 0}):t,V=Object.assign({},m(c)||{}),F=h(()=>{const y=m(c);return a?y?m(y[a]):void 0:y}),U=Ye(p,R,a,i,d,u,o,F,t),x=Je(g,R,d,i,u,o,F),M={};$&&Object.entries($).forEach(y=>{let[E,b]=y;M[E]={$invalid:D(b,x,"$invalid"),$error:D(b,x,"$error"),$pending:D(b,x,"$pending"),$errors:re(b,x,"$errors"),$silentErrors:re(b,x,"$silentErrors")}});const{$dirty:L,$errors:ve,$invalid:T,$anyDirty:ge,$error:he,$pending:z,$touch:A,$reset:pe,$silentErrors:ye,$commit:Z}=Qe(U,x,v),Re=a?h({get:()=>m(R),set:y=>{L.value=!0;const E=m(t),b=m(c);b&&(b[a]=V[a]),q(E[a])?E[a].value=y:E[a]=y}}):null;a&&u.$autoDirty&&I(R,()=>{L.value||A();const y=m(c);y&&(y[a]=V[a])},{flush:"sync"});function we(y){return(v.value||{})[y]}function be(){q(c)?c.value=V:Object.keys(V).length===0?Object.keys(c).forEach(y=>{delete c[y]}):Object.assign(c,V)}return P(Object.assign({},U,{$model:Re,$dirty:L,$error:he,$errors:ve,$invalid:T,$anyDirty:ge,$pending:z,$touch:A,$reset:pe,$path:d||Me,$silentErrors:ye,$validate:n,$commit:Z},v&&{$getResultsForChild:we,$clearExternalResults:be,$validationGroups:M},x))}class Xe{constructor(){this.storage=new Map}set(n,r,t){this.storage.set(n,{rules:r,result:t})}checkRulesValidity(n,r,t){const a=Object.keys(t),l=Object.keys(r);return l.length!==a.length||!l.every(i=>a.includes(i))?!1:l.every(i=>r[i].$params?Object.keys(r[i].$params).every(f=>m(t[i].$params[f])===m(r[i].$params[f])):!0)}get(n,r){const t=this.storage.get(n);if(!t)return;const{rules:a,result:l}=t,v=this.checkRulesValidity(n,r,a),i=l.$unwatch?l.$unwatch:()=>({});return v?l:{$dirty:l.$dirty,$partial:!0,$unwatch:i}}}const j={COLLECT_ALL:!0,COLLECT_NONE:!1},se=Symbol("vuelidate#injectChildResults"),ae=Symbol("vuelidate#removeChildResults");function Ke(e){let{$scope:n,instance:r}=e;const t={},a=w([]),l=h(()=>a.value.reduce((c,d)=>(c[d]=m(t[d]),c),{}));function v(c,d){let{$registerAs:p,$scope:g,$stopPropagation:s}=d;s||n===j.COLLECT_NONE||g===j.COLLECT_NONE||n!==j.COLLECT_ALL&&n!==g||(t[p]=c,a.value.push(p))}r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],v);function i(c){a.value=a.value.filter(d=>d!==c),delete t[c]}r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],i);const f=H(se,[]);W(se,r.__vuelidateInjectInstances);const o=H(ae,[]);return W(ae,r.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:f,removeValidationResultsFromParent:o}}function fe(e){return new Proxy(e,{get(n,r){return typeof n[r]=="object"?fe(n[r]):h(()=>n[r])}})}let oe=0;function et(e,n){var r;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(t=e,e=void 0,n=void 0);let{$registerAs:a,$scope:l=j.COLLECT_ALL,$stopPropagation:v,$externalResults:i,currentVueInstance:f}=t;const o=f||((r=xe())===null||r===void 0?void 0:r.proxy),c=o?o.$options:{};a||(oe+=1,a=`_vuelidate_${oe}`);const d=w({}),p=new Xe,{childResults:g,sendValidationResultsToParent:s,removeValidationResultsFromParent:$}=o?Ke({$scope:l,instance:o}):{childResults:w({})};if(!e&&c.validations){const u=c.validations;n=w({}),Ee(()=>{n.value=o,I(()=>O(u)?u.call(n.value,new fe(n.value)):u,R=>{d.value=G({validations:R,state:n,childResults:g,resultsCache:p,globalConfig:t,instance:o,externalResults:i||o.vuelidateExternalResults})},{immediate:!0})}),t=c.validationsConfig||t}else{const u=q(e)||ke(e)?e:P(e||{});I(u,R=>{d.value=G({validations:R,state:n,childResults:g,resultsCache:p,globalConfig:t,instance:o!=null?o:{},externalResults:i})},{immediate:!0})}return o&&(s.forEach(u=>u(d,{$registerAs:a,$scope:l,$stopPropagation:v})),_e(()=>$.forEach(u=>u(a)))),h(()=>Object.assign({},m(d.value),g.value))}const me=e=>{if(e=m(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let n in e)return!0;return!1}return!!String(e).length};function _(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t=>(t=m(t),!me(t)||n.every(a=>a.test(t)))}_(/^[a-zA-Z]*$/);_(/^[a-zA-Z0-9]*$/);_(/^\d*(\.\d+)?$/);const tt=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var nt=_(tt),rt={$validator:nt,$message:"Value is not a valid email address",$params:{type:"email"}};const le=(e,n)=>e?me(typeof n=="string"?n.trim():n):!0;function st(e){return function(n,r){if(typeof e!="function")return le(m(e),n);const t=e.call(this,n,r);return le(t,n)}}function ie(e){return{$validator:st(e),$message:"The value is required",$params:{type:"requiredIf",prop:e}}}const at=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;_(at);_(/(^[0-9]*$)|(^-[0-9]+$)/);_(/^[-]?\d*(\.\d+)?$/);const ot=Ie({name:"LoginView",setup(){Se(()=>{e.dispatch(J.SET_SIDEBAR_VISIBILITY,!1)});const e=je(),n=Oe(),r=w(1),t=P({email:"",password:"",terms:null}),a={email:{required:ie(r.value==1),email:rt},password:{required:ie(r.value==2)}},l=w(!1),v=et(a,t),i=h(()=>e.getters["auth/currentUser"]);return{formStep:r,formSubmitted:l,v$:v,currentUser:i,handleSubmit:o=>{if(l.value=!0,r.value==2&&t.password.length!=5)return;if(!o)return;const c={email:t.email,password:t.password};Ne(e),e.dispatch(Pe,c).then(()=>{te(e),e.dispatch(J.SET_SIDEBAR_VISIBILITY,!0),Le.push({name:"campagne"})}).catch(d=>{te(e),Te(n,d)})}}}}),lt={class:"flex justify-content-center align-items-center h-screen"},it=C("div",{class:"mt-5 text-center"},[C("img",{src:Be,style:{width:"80px"}})],-1),ut=C("h1",null,"Benvenuto!",-1),ct=C("h2",{class:"font-weight-normal mb-5"}," Inserisci le credenziali ed accedi all\u2019area riservata. ",-1),dt={key:0,class:"p-error w-100"},$t={key:1,class:"p-error w-100"},ft={class:"mt-4 text-right"};function mt(e,n,r,t,a,l){const v=N("InputText"),i=N("SubmitBtn"),f=N("Card");return k(),B("div",lt,[S(f,{class:"p-4"},{header:Q(()=>[it]),content:Q(()=>[ut,ct,C("form",{class:"mt-4 flex flex-column",onSubmit:n[2]||(n[2]=Ae(o=>e.handleSubmit(!e.v$.$invalid),["prevent"]))},[S(v,{id:"email",class:X({"p-invalid":e.v$.email.$invalid&&e.formSubmitted,"w-100":!0,"mb-1":!0}),placeholder:"Indirizzo email *",modelValue:e.v$.email.$model,"onUpdate:modelValue":n[0]||(n[0]=o=>e.v$.email.$model=o)},null,8,["class","modelValue"]),e.formSubmitted&&e.v$.email.$errors.length>0?(k(),B("label",dt,K(e.v$.email.$errors.map(o=>o.$message).join("<br />")),1)):ee("",!0),S(v,{id:"password",class:X({"p-invalid":e.v$.password.$invalid&&e.formSubmitted,"w-100":!0,"mt-3":!0,"mb-1":!0}),type:"password",placeholder:"Password *",modelValue:e.v$.password.$model,"onUpdate:modelValue":n[1]||(n[1]=o=>e.v$.password.$model=o)},null,8,["class","modelValue"]),e.formSubmitted&&e.v$.password.$errors.length>0?(k(),B("label",$t,K(e.v$.password.$errors.map(o=>o.$message).join("<br />")),1)):ee("",!0),C("div",ft,[S(i,{label:"Invia",class:"btn-max-width",width:"w-100"})])],32)]),_:1})])}const ht=ze(ot,[["render",mt]]);export{ht as default};
