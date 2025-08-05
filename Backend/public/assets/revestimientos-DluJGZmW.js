import{r as m,j as e,c as h,d as r}from"./index-D0cUJPDZ.js";import{b as x,e as b}from"./normalizeTree-LpHbLW8i.js";import{S as v}from"./Slider-lMCY7ZUP.js";function D(){const[a,l]=m.useState([]),[s,d]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{const o=await x(),n=b(o),i=j(n);l(i)}catch(o){console.error("❌ Error al cargar revestimientos:",o)}finally{d(!1)}})()},[]),s?e.jsx(h,{}):e.jsxs(C,{children:[e.jsx(R,{children:"Revestimientos"}),e.jsx(v,{title:"Revestimientos destacados",data:a,categoria:"revestimientos"}),e.jsx(k,{children:a.map(t=>{var c;const o=(c=t.imagen)!=null&&c.startsWith("http")?t.imagen:`http://localhost:4000/products/${t.imagen}`,n=w(t.ruta),i=()=>{const p=t.ruta.split("/").map(f=>f.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")),g=p.pop(),u=`/${p[0]||"revestimientos"}/${g}`;window.open(u,"_blank")};return e.jsxs(z,{onClick:i,children:[e.jsx(L,{children:n}),e.jsx(E,{src:o,alt:t.nombre,loading:"lazy"}),e.jsx(S,{children:e.jsx(y,{children:t.nombre})})]},t.id)})})]})}const j=(a,l=[])=>{const s=[],d=(t,o)=>{var i;const n=[...o,t.nombre];if(!t.children||t.children.length===0){const c=((i=t.imagenes)==null?void 0:i[0])??"placeholder.jpg",p={...t,imagen:c,ruta:n.join("/")};s.push(p)}else t.children.forEach(c=>d(c,n))};return a.forEach(t=>d(t,l)),s},w=a=>a.split("/").slice(0,-1).map(l=>l.replace(/-/g," ").replace(/\b\w/g,s=>s.toUpperCase())).join(" > "),C=r.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,R=r.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
`,k=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,z=r.div`
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
`,E=r.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
`,S=r.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  padding: 0.3rem 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-top-right-radius: 4px;
  border: 2px solid #006400;
  border-left: none;
  border-bottom: none;
`,y=r.p`
  margin: 0;
  font-weight: 700;
  font-size: 1rem;
  color: #006400;
`,L=r.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: #555;
  background: #f0f0f0;
  padding: 0.3rem 0.5rem;
  border-bottom: 1px solid #ccc;
  text-align: center;
  text-transform: capitalize;
`;export{D as default};
