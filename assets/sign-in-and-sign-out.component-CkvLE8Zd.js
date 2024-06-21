import{j as e,p as l,b as x,r as h,C as g,g as w,h as j,s as f}from"./index-BCybB48d.js";const o=({handleChange:s,label:n,...a})=>e.jsxs("div",{className:"group",children:[e.jsx("input",{className:"form-input",onChange:s,...a}),n?e.jsx("label",{className:`${a.value.length?"shrink":""} form-input-label`,children:n}):null]}),y=l.div`
	width: 380px;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		width: 340px;
	}
`,C=l.h2`
	margin: 10px 0;
`,b=l.div`
	display: flex;
	justify-content: space-between;
`,v=({emailSignInStart:s,googleSignInStart:n})=>{const[a,p]=h.useState({email:"",password:""}),{email:d,password:i}=a,r=t=>{const{value:c,name:u}=t.target;p({...a,[u]:c})},m=async t=>{t.preventDefault(),s(d,i)};return e.jsxs(y,{children:[e.jsx(C,{children:"I already have an account"}),e.jsx("span",{children:"Sign in with your email and password"}),e.jsxs("form",{onSubmit:m,children:[e.jsx(o,{name:"email",type:"email",handleChange:r,value:d,label:"email",required:!0}),e.jsx(o,{name:"password",type:"password",value:i,handleChange:r,label:"password",required:!0}),e.jsxs(b,{children:[e.jsx(g,{type:"submit",children:" Sign in "}),e.jsx(g,{type:"button",onClick:n,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})},I=s=>({googleSignInStart:()=>s(w()),emailSignInStart:(n,a)=>s(j({email:n,password:a}))}),U=x(null,I)(v),N=l.div`
	display: flex;
	flex-direction: column;
	width: 380px;

	@media screen and (max-width: 800px) {
		width: 340px;
	}
`,P=l.h2`
	margin: 10px 0;
`,q=({signUpStart:s})=>{const[n,a]=h.useState({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:p,email:d,password:i,confirmPassword:r}=n,m=async c=>{if(c.preventDefault(),i!==r){alert("Passwords dont match");return}s({displayName:p,email:d,password:i,confirmPassword:r})},t=c=>{const{name:u,value:S}=c.target;a({...n,[u]:S})};return e.jsxs(N,{children:[e.jsx(P,{children:"I do not have a account"}),e.jsx("span",{children:"Sign up with your email and password"}),e.jsxs("form",{className:"sign-up-form",onSubmit:m,children:[e.jsx(o,{type:"text",name:"displayName",value:p,onChange:t,label:"Display Name",required:!0}),e.jsx(o,{type:"email",name:"email",value:d,onChange:t,label:"Email",required:!0}),e.jsx(o,{type:"password",name:"password",value:i,onChange:t,label:"Password",required:!0}),e.jsx(o,{type:"password",name:"confirmPassword",value:r,onChange:t,label:"Confirm Password",required:!0}),e.jsx(g,{type:"submit",children:"SIGN UP"})]})]})},D=s=>({signUpStart:n=>s(f(n))}),T=x(null,D)(q),$=l.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		width: unset;
		align-items: center;
		> *:first-child {
			margin-bottom: 50px;
		}
	}
`,E=()=>e.jsxs($,{children:[e.jsx(U,{}),e.jsx(T,{})]});export{E as default};
