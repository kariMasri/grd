import{o as w,u as C,R as c,a,a8 as o,j as e,I as i,e as x,F as I,w as b,a9 as d}from"index-c4efdbaa.js";import{H as N}from"index-a86df390.js";import{u as k}from"useCaptcha-d845d421.js";import{u as v}from"useLoading-d59ed7cd.js";import"ClipLoader-f3413bad.js";const L=()=>{const r=C(),{captchaProps:u,captchaToken:s,resetCaptcha:p}=k(),{loadingElement:m,loading:f,setLoading:l}=v(e(I,{children:"Sign In"})),n=c.useRef(null),t=c.useRef(null),h=()=>{s.length<1||!n.current||!t.current||(l(!0),b.sendWithCallback({ID:"login",username:n.current.value,password:t.current.value,captchaToken:s},g=>{switch(l(!1),p(),g.status){case"INCORRECT_CAPTCHA":d.error("Failed to verify captcha");break;case"INVALID_CREDENTIALS":d.error("Wrong username or password!");break;case"OK":r(null);break}}))};return a(o,{requireNoLogin:!0,className:"p-3 max-w-[450px]",children:[e(o.Header,{children:"Sign In"}),e(o.Body,{children:a("div",{className:"flex flex-col gap-2.5",children:[e(i,{ref:n,label:"Username"}),e(i,{type:"password",ref:t,label:"Password"}),e(N,{...u}),e(x,{onClick:h,disabled:f||s.length<1,children:m}),a("div",{className:"flex flex-col gap-2",children:[e("a",{className:"m-auto font text-white cursor-pointer font-semibold",onClick:()=>(r("reset-password"),!1),children:"Forgot Password?"}),a("div",{className:"flex gap-1 justify-center",children:[e("span",{children:"Don't have an account?"}),e("a",{className:"text-white font-semibold cursor-pointer",onClick:()=>(r("register"),!1),children:"Register an account"})]})]})]})})]})},A=w(L);export{A as default};
