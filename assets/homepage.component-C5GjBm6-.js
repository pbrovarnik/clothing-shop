import{c as a,p as n,w as l,j as t,a as d,b as p}from"./index-CD9B34DJ.js";const x=e=>e.directory,m=a([x],e=>e.sections),g=n.div`
	height: ${({size:e})=>e?"380px":"240px"};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
		margin-right: 7.5px;
	}
	&:last-child {
		margin-left: 7.5px;
	}

	@media screen and (max-width: 800px) {
		height: 200px;
	}
`,h=n.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({imageUrl:e})=>`url(${e})`};
`,u=n.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
`,f=n.span`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`,b=n.span`
	font-weight: lighter;
	font-size: 16px;
`,j=({title:e,imageUrl:o,size:i,history:c,linkUrl:r,match:s})=>t.jsxs(g,{size:i,onClick:()=>c.push(`${s.url}${r}`),children:[t.jsx(h,{className:"background-image",imageUrl:o}),t.jsxs(u,{className:"content",children:[t.jsx(f,{children:e.toUpperCase()}),t.jsx(b,{children:"SHOP NOW"})]})]}),y=l(j),k=({sections:e})=>t.jsx("div",{className:"directory-menu",children:e.map(({id:o,...i})=>t.jsx(y,{...i},o))}),w=d({sections:m}),v=p(w)(k),C=n.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 10px;
`,$=()=>t.jsx(C,{children:t.jsx(v,{})});export{$ as default};
