import{c as g,e as l,f as a,a as i,h,j as d,D as f,g as y,I as m,J as x,K as v,R as o}from"./index-CoZ-b2op.js";import{h as C}from"./render-5l8-ILLk.js";const _=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(s,{slots:r}){const{proxy:{$q:t}}=y(),e=l(d,a);if(e===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(l(f,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const c=i(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof s.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:t.screen.height;return s.styleFn(n,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":t.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":t.screen.height-n+"px"}}),u=i(()=>`q-page${s.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:c.value},C(r.default))}}),Q="/assets/quasar-logo-vertical-Dh1dpsZJ.svg",q={__name:"IndexPage",setup(s){return(r,t)=>(m(),x(_,{class:"flex flex-center"},{default:v(()=>t[0]||(t[0]=[o("div",null,[o("p",null,"Deploy")],-1),o("img",{alt:"Quasar logo",src:Q,style:{width:"200px",height:"200px"}},null,-1)])),_:1}))}};export{q as default};
