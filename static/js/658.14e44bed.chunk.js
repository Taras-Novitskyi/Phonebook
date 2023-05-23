"use strict";(self.webpackChunkPhonebook=self.webpackChunkPhonebook||[]).push([[658],{8658:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var i,o,r=t(9439),a=t(2791),s=t(9434),l=t(5206),d=t(4925),c=t(292),u=t(3466),p=t(3400),v=t(6151),m=t(9569),h=t(3710),f=t(3535),Z=t(168),x=t(7691),b=x.ZP.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),g=x.ZP.form(o||(o=(0,Z.Z)(["\n  width: 320px;\n  padding: 24px;\n\n  border: 1px solid #000000;\n"]))),j=t(184);var y=function(){var n=(0,s.I0)(),e=(0,a.useState)(""),t=(0,r.Z)(e,2),i=t[0],o=t[1],Z=(0,a.useState)(""),x=(0,r.Z)(Z,2),y=x[0],w=x[1],P=(0,a.useState)(!1),z=(0,r.Z)(P,2),E=z[0],S=z[1],L=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"email":return o(i);case"password":return w(i);default:return}};return(0,j.jsxs)(b,{children:[(0,j.jsx)("h1",{children:"Login"}),(0,j.jsxs)(g,{onSubmit:function(e){try{e.preventDefault(),n(f.r5.logIn({email:i,password:y})),o(""),w("")}catch(t){l.Am.error("Something wrong, try again.")}},autoComplete:"off",children:[(0,j.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",mb:4},children:["Email",(0,j.jsx)(c.Z,{type:"email",name:"email",value:i,required:!0,onChange:L})]}),(0,j.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",mb:4},children:["Password",(0,j.jsx)(c.Z,{type:E?"text":"password",name:"password",value:y,onChange:L,required:!0,endAdornment:(0,j.jsx)(u.Z,{position:"end",children:(0,j.jsx)(p.Z,{onClick:function(){S(!E)},children:E?(0,j.jsx)(m.Z,{}):(0,j.jsx)(h.Z,{})})})})]}),(0,j.jsx)(v.Z,{variant:"contained",size:"medium",type:"submit",children:"Login"})]})]})}},3710:function(n,e,t){var i=t(9201),o=t(184);e.Z=(0,i.Z)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(n,e,t){var i=t(9201),o=t(184);e.Z=(0,i.Z)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3466:function(n,e,t){t.d(e,{Z:function(){return w}});var i=t(4942),o=t(3366),r=t(7462),a=t(2791),s=t(8182),l=t(4419),d=t(4036),c=t(890),u=t(3840),p=t(2930),v=t(6934),m=t(5878),h=t(1217);function f(n){return(0,h.Z)("MuiInputAdornment",n)}var Z,x=(0,m.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=t(1402),g=t(184),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(0,v.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["position".concat((0,d.Z)(t.position))],!0===t.disablePointerEvents&&e.disablePointerEvents,e[t.variant]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&(0,i.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),w=a.forwardRef((function(n,e){var t=(0,b.Z)({props:n,name:"MuiInputAdornment"}),i=t.children,v=t.className,m=t.component,h=void 0===m?"div":m,x=t.disablePointerEvents,w=void 0!==x&&x,P=t.disableTypography,z=void 0!==P&&P,E=t.position,S=t.variant,L=(0,o.Z)(t,j),C=(0,p.Z)()||{},M=S;S&&C.variant,C&&!M&&(M=C.variant);var k=(0,r.Z)({},t,{hiddenLabel:C.hiddenLabel,size:C.size,disablePointerEvents:w,position:E,variant:M}),I=function(n){var e=n.classes,t=n.disablePointerEvents,i=n.hiddenLabel,o=n.position,r=n.size,a=n.variant,s={root:["root",t&&"disablePointerEvents",o&&"position".concat((0,d.Z)(o)),a,i&&"hiddenLabel",r&&"size".concat((0,d.Z)(r))]};return(0,l.Z)(s,f,e)}(k);return(0,g.jsx)(u.Z.Provider,{value:null,children:(0,g.jsx)(y,(0,r.Z)({as:h,ownerState:k,className:(0,s.Z)(I.root,v),ref:e},L,{children:"string"!==typeof i||z?(0,g.jsxs)(a.Fragment,{children:["start"===E?Z||(Z=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,g.jsx)(c.Z,{color:"text.secondary",children:i})}))})}))}}]);
//# sourceMappingURL=658.14e44bed.chunk.js.map