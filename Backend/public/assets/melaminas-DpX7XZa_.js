import{r as m,j as a,c as g,d as o}from"./index-D0cUJPDZ.js";import{g as h,e as f}from"./normalizeTree-LpHbLW8i.js";import{S as u}from"./Slider-lMCY7ZUP.js";const k=()=>{const[s,l]=m.useState([]),[n,i]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{const t=await h(),e=f(t),c=x(e);l(c)}catch(t){console.error("❌ Error al cargar melaminas:",t)}finally{i(!1)}})()},[]),n?a.jsx(g,{}):a.jsxs(b,{children:[a.jsx(j,{children:"Melaminas"}),a.jsx(u,{title:"Melaminas destacadas",data:s,categoria:"melaminas"}),a.jsx(v,{children:s.map(r=>{var e;const t=(e=r.imagen)!=null&&e.startsWith("http")?r.imagen:`http://localhost:4000/products/${r.imagen}`;return a.jsxs(w,{children:[a.jsx(y,{src:t,alt:r.nombre,loading:"lazy"}),a.jsx(E,{children:a.jsx(z,{children:r.nombre})})]},r.id)})})]})},x=(s,l=[])=>{const n=[],i=(r,t)=>{var c;const e=[...t,r.nombre];if(!r.children||r.children.length===0){const d=((c=r.imagenes)==null?void 0:c[0])??"placeholder.jpg",p={...r,imagen:d,ruta:e.join("/")};n.push(p)}else r.children.forEach(d=>i(d,e))};return s.forEach(r=>i(r,l)),n},b=o.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,j=o.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
`,v=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,w=o.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-3px);
  }
`,y=o.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
`,E=o.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  padding: 0.3rem 0.5rem;
  background: rgba(255, 255, 255, 0.85);
  border-top-right-radius: 4px;
  border: 2px solid #006400;
  border-left: none;
  border-bottom: none;
`,z=o.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #006400;
`;export{k as default};
