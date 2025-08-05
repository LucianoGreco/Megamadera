import{r as s,j as e,d as o,i as F}from"./index-D0cUJPDZ.js";import{g as P,a as q,b as A,d as D,c as N,e as l}from"./normalizeTree-LpHbLW8i.js";import{S as O}from"./Slider-lMCY7ZUP.js";const Q="https://backend-megamadera.onrender.com",se=()=>{const[t,d]=s.useState([]),[m,n]=s.useState({herrajes:[],revestimientos:[],vinilos:[],muebles:[]}),[u,k]=s.useState(!0),[S,$]=s.useState(!1),[b,x]=s.useState(""),[i,f]=s.useState(null),[g,z]=s.useState("simulador-1"),[j,C]=s.useState(100);s.useEffect(()=>{(async()=>{try{const[a,E,B,I,L]=await Promise.all([P(),q(),A(),D(),N()]);d(c(l(a))),n({herrajes:c(l(E)),revestimientos:c(l(B)),vinilos:c(l(I)),muebles:c(l(L))})}catch(a){console.error("❌ Error al cargar productos:",a),$(!0)}finally{k(!1)}})()},[]);const y=t.filter(r=>r.nombre.toLowerCase().includes(b.toLowerCase())),h=(i==null?void 0:i.imagen)||null,v=F[g];return u?e.jsx(p,{children:"Cargando productos..."}):S?e.jsx(p,{children:"Error al cargar productos."}):e.jsxs(R,{children:[e.jsxs(U,{children:[e.jsxs(W,{children:[e.jsx(J,{placeholder:"Buscar melamina...",value:b,onChange:r=>x(r.target.value)}),i&&e.jsxs(e.Fragment,{children:[e.jsx(T,{onClick:()=>{f(null),x("")},children:"✕ Quitar melamina"}),e.jsx(V,{children:"Escala del patrón"}),e.jsx(G,{type:"range",min:"40",max:"200",step:"10",value:j,onChange:r=>C(Number(r.target.value))})]}),e.jsx(w,{children:"Melaminas"}),y.map(r=>e.jsxs(M,{onClick:()=>f(r),$activo:(i==null?void 0:i.nombre)===r.nombre,children:[e.jsx(_,{src:r.imagen,alt:r.nombre,$activo:(i==null?void 0:i.nombre)===r.nombre}),e.jsx(H,{children:r.nombre})]},r.nombre)),e.jsx(w,{children:"Muebles"}),["simulador-1","simulador-2"].map((r,a)=>e.jsxs(M,{onClick:()=>z(r),$activo:g===r,children:["Mueble ",a+1]},r))]}),e.jsx(p,{children:e.jsxs(K,{id:"simulador-export",children:[h&&e.jsx(X,{$mueble:g,children:e.jsx(Y,{$src:h,$size:j})}),v&&e.jsx(Z,{src:v,alt:"Mueble"}),!h&&e.jsx(ee,{children:"Seleccioná una melamina para ver el simulador"})]})})]}),e.jsx(re,{children:Object.entries(m).map(([r,a])=>e.jsx(O,{title:r.toUpperCase(),data:a,onSelect:()=>{}},r))})]})},c=t=>{const d=[],m=n=>{var u;!n.children||n.children.length===0?d.push({...n,imagen:`${Q}/products/${((u=n.imagenes)==null?void 0:u[0])??"placeholder.jpg"}`}):n.children.forEach(m)};return t.forEach(m),d},R=o.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`,U=o.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
`,W=o.aside`
  width: 250px;
  background: #f1f1f1;
  padding: 1rem;
  overflow-y: auto;
  position: sticky;
  top: 0;
  height: 100vh;
`,w=o.h2`
  font-size: 1rem;
  margin: 1.5rem 0 0.5rem;
  color: #444;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.25rem;
`,M=o.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  background-color: ${({$activo:t})=>t?"#d0eaff":"white"};
  color: ${({$activo:t})=>t?"#004080":"#333"};
  border: 1px solid ${({$activo:t})=>t?"#007acc":"#ccc"};
  border-radius: 6px;
  text-align: left;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: #e0e0e0;
  }
`,_=o.img`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
  border: 2px solid ${({$activo:t})=>t?"#007acc":"#aaa"};
`,H=o.span`
  flex: 1;
  text-align: left;
`,T=o.button`
  width: 100%;
  margin: 0.8rem 0 0.6rem;
  padding: 0.5rem;
  background-color: #ffdddd;
  color: #b30000;
  border: 1px solid #b30000;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ffbbbb;
  }
`,V=o.label`
  font-size: 0.85rem;
  margin-top: 0.6rem;
  display: block;
`,G=o.input`
  width: 100%;
  margin: 0.3rem 0 1rem;
`,J=o.input`
  padding: 0.6rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
`,p=o.main`
  flex: 1;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 2rem;
`,K=o.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`,X=o.div`
  position: absolute;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  ${({$mueble:t})=>t==="simulador-1"?"width: 73%;":t==="simulador-2"?"width: 55%;":"width: 100%;"}
`,Y=o.div`
  width: 100%;
  height: 100%;
  background-image: url(${t=>t.$src});
  background-repeat: repeat;
  background-size: ${t=>t.$size}px ${t=>t.$size}px;
  opacity: 0.9;
`,Z=o.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
`,ee=o.p`
  position: relative;
  z-index: 3;
  font-size: 1.1rem;
  color: #555;
  background: rgba(255, 255, 255, 0.85);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: center;
`,re=o.div`
  width: 100%;
  padding: 2rem 1rem;
  background: #f9f9f9;
  box-sizing: border-box;
`;export{se as default};
