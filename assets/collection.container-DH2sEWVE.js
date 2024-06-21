import{p as n,b as s,j as e,a as l,q as r}from"./index-FTmMxjph.js";import{C as c,b as p,c as d,W as m}from"./collection-item.component-kbYHvCg9.js";const x=n.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`,g=n.h2`
	font-size: 38px;
	margin: 0 auto 30px;
`,f=n.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
	& > div {
		margin-bottom: 30px;
	}
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`,C=({collection:t})=>{if(!t)return;const{title:o,items:a}=t;return e.jsxs(x,{children:[e.jsx(g,{children:o}),e.jsx(f,{children:a.map(i=>e.jsx(c,{item:i},i.id))})]})},u=(t,o)=>({collection:p(o.match.params.collectionId)(t)}),h=s(u)(C),j=l({isLoading:t=>!d(t)}),I=r(s(j),m)(h);export{I as default};
