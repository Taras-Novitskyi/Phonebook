"use strict";(self.webpackChunkPhonebook=self.webpackChunkPhonebook||[]).push([[215],{215:function(e,n,t){t.r(n),t.d(n,{RegisterPage:function(){return y},default:function(){return P}});var i,r,a=t(9439),o=t(2791),s=t(9434),l=t(5206),d=t(4925),c=t(292),u=t(3466),p=t(3400),m=t(6151),v=t(9569),h=t(3710),f=t(3535),Z=t(168),x=t(7691),b=x.ZP.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),g=x.ZP.form(r||(r=(0,Z.Z)(["\n  width: 320px;\n  padding: 24px;\n\n  border: 1px solid #000000;\n"]))),j=t(184);function y(){var e=(0,s.I0)(),n=(0,o.useState)(""),t=(0,a.Z)(n,2),i=t[0],r=t[1],Z=(0,o.useState)(""),x=(0,a.Z)(Z,2),y=x[0],P=x[1],w=(0,o.useState)(""),z=(0,a.Z)(w,2),S=z[0],E=z[1],C=(0,o.useState)(!1),M=(0,a.Z)(C,2),L=M[0],k=M[1],R=function(e){var n=e.target,t=n.name,i=n.value;switch(t){case"name":return r(i);case"email":return P(i);case"password":return E(i);default:return}};return(0,j.jsxs)(b,{children:[(0,j.jsx)("h1",{children:"Registration"}),(0,j.jsxs)(g,{onSubmit:function(n){try{n.preventDefault(),e(f.r5.register({name:i,email:y,password:S})),r(""),P(""),E("")}catch(t){l.Am.error("Something wrong, try again.")}},autoComplete:"off",children:[(0,j.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",mb:4},children:["Name",(0,j.jsx)(c.Z,{type:"text",name:"name",value:i,onChange:R,required:!0})]}),(0,j.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",mb:4},children:["Email",(0,j.jsx)(c.Z,{type:"email",name:"email",value:y,onChange:R,required:!0})]}),(0,j.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",mb:4},children:["Password",(0,j.jsx)(c.Z,{type:L?"text":"password",name:"password",value:S,onChange:R,required:!0,endAdornment:(0,j.jsx)(u.Z,{position:"end",children:(0,j.jsx)(p.Z,{onClick:function(){k(!L)},children:L?(0,j.jsx)(v.Z,{}):(0,j.jsx)(h.Z,{})})})})]}),(0,j.jsx)(m.Z,{variant:"contained",size:"medium",type:"submit",children:"Register"})]})]})}var P=y},3710:function(e,n,t){var i=t(9201),r=t(184);n.Z=(0,i.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,n,t){var i=t(9201),r=t(184);n.Z=(0,i.Z)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3466:function(e,n,t){t.d(n,{Z:function(){return P}});var i=t(4942),r=t(3366),a=t(7462),o=t(2791),s=t(8182),l=t(4419),d=t(4036),c=t(890),u=t(3840),p=t(2930),m=t(6934),v=t(5878),h=t(1217);function f(e){return(0,h.Z)("MuiInputAdornment",e)}var Z,x=(0,v.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=t(1402),g=t(184),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,d.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,i.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),P=o.forwardRef((function(e,n){var t=(0,b.Z)({props:e,name:"MuiInputAdornment"}),i=t.children,m=t.className,v=t.component,h=void 0===v?"div":v,x=t.disablePointerEvents,P=void 0!==x&&x,w=t.disableTypography,z=void 0!==w&&w,S=t.position,E=t.variant,C=(0,r.Z)(t,j),M=(0,p.Z)()||{},L=E;E&&M.variant,M&&!L&&(L=M.variant);var k=(0,a.Z)({},t,{hiddenLabel:M.hiddenLabel,size:M.size,disablePointerEvents:P,position:S,variant:L}),R=function(e){var n=e.classes,t=e.disablePointerEvents,i=e.hiddenLabel,r=e.position,a=e.size,o=e.variant,s={root:["root",t&&"disablePointerEvents",r&&"position".concat((0,d.Z)(r)),o,i&&"hiddenLabel",a&&"size".concat((0,d.Z)(a))]};return(0,l.Z)(s,f,n)}(k);return(0,g.jsx)(u.Z.Provider,{value:null,children:(0,g.jsx)(y,(0,a.Z)({as:h,ownerState:k,className:(0,s.Z)(R.root,m),ref:n},C,{children:"string"!==typeof i||z?(0,g.jsxs)(o.Fragment,{children:["start"===S?Z||(Z=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,g.jsx)(c.Z,{color:"text.secondary",children:i})}))})}))}}]);
//# sourceMappingURL=215.d6e9b449.chunk.js.map