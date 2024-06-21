import{p as o,w as d,j as e,a as r,b as c,q as m}from"./index-CD9B34DJ.js";import{C as x,s as C,a as v,W as f}from"./collection-item.component-CU1_gAM0.js";const w=o.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	@media screen and (max-width: 800px) {
		align-items: center;
	}
`,h=o.h1`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;
	&:hover {
		color: grey;
	}
`,u=o.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`,g=({title:t,items:i,history:n,match:l,routeName:a})=>e.jsxs(w,{children:[e.jsx(h,{onClick:()=>n.push(`${l.path}/${a}`),children:t.toUpperCase()}),e.jsx(u,{children:i.filter((s,p)=>p<4).map(s=>e.jsx(x,{item:s},s.id))})]}),j=d(g),P=o.div`
	display: flex;
	flex-direction: column;
`,y=({collections:t})=>e.jsx(P,{children:t.map(({id:i,...n})=>e.jsx(j,{...n},i))}),$=r({collections:C}),S=c($)(y),b=r({isLoading:v}),F=m(c(b),f)(S);export{F as default};
