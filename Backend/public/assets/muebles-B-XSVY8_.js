import{r as m,j as t,c as g,d as a}from"./index-D0cUJPDZ.js";import{c as u,e as h}from"./normalizeTree-LpHbLW8i.js";import{S as f}from"./Slider-lMCY7ZUP.js";function k(){const[s,l]=m.useState([]),[n,i]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{const e=await u(),o=h(e),c=b(o);l(c)}catch(e){console.error("❌ Error al cargar muebles:",e)}finally{i(!1)}})()},[]),n?t.jsx(g,{}):t.jsxs(x,{children:[t.jsx(j,{children:"Muebles"}),t.jsx(f,{title:"Muebles destacados",data:s,categoria:"muebles"}),t.jsx(v,{children:s.map(r=>{var o;const e=(o=r.imagen)!=null&&o.startsWith("http")?r.imagen:`http://localhost:4000/products/${r.imagen}`;return t.jsxs(w,{children:[t.jsx(y,{src:e,alt:r.nombre,loading:"lazy"}),t.jsx(E,{children:t.jsx(z,{children:r.nombre})})]},r.id)})})]})}const b=(s,l=[])=>{const n=[],i=(r,e)=>{var c;const o=[...e,r.nombre];if(!r.children||r.children.length===0){const d=((c=r.imagenes)==null?void 0:c[0])??"placeholder.jpg",p={...r,imagen:d,ruta:o.join("/")};n.push(p)}else r.children.forEach(d=>i(d,o))};return s.forEach(r=>i(r,l)),n},x=a.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,j=a.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
`,v=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,w=a.div`
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
`,y=a.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
`,E=a.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  padding: 0.3rem 0.5rem;
  background: rgba(255, 255, 255, 0.85);
  border-top-right-radius: 4px;
  border: 2px solid #8B4513;
  border-left: none;
  border-bottom: none;
`,z=a.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #8B4513;
`;export{k as default};
