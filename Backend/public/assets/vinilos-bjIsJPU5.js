import{r as l,j as e,d as o}from"./index-D0cUJPDZ.js";import{u as k}from"./useProductos-B9EDYsbv.js";import{d as w}from"./normalizeTree-LpHbLW8i.js";const I="http://localhost:4000";function U(){const{data:i,loading:s,error:c}=k(w),[a,h]=l.useState([]),[r,g]=l.useState(null),[p,d]=l.useState(null);if(s)return e.jsx(m,{children:"Cargando vinilos…"});if(c)return e.jsx(m,{children:"❌ Error al cargar vinilos"});const f=u(i),b=a.reduce((n,t)=>{var x;return((x=n.find(C=>C.id===t))==null?void 0:x.children)||[]},f),j=n=>{var t;n.children&&n.children.length>0?h([...a,n.id]):(g(n),d((t=n.imagenes)==null?void 0:t[0]))},v=()=>{r?(g(null),d(null)):h(a.slice(0,-1))};return e.jsxs(m,{children:[e.jsx(S,{children:"Vinilos"}),(a.length>0||r)&&e.jsx(z,{onClick:v,children:"⬅ Volver"}),r?e.jsxs(T,{children:[e.jsx($,{src:p,alt:r.nombre}),e.jsxs(y,{children:[e.jsx(A,{children:r.nombre}),e.jsx(L,{children:r.descripcion})]}),e.jsx(_,{children:r.imagenes.map((n,t)=>e.jsx(D,{src:n,alt:`thumb-${t}`,onClick:()=>d(n),isActive:p===n},t))})]}):e.jsx(B,{children:b.map(n=>{var t;return e.jsxs(M,{onClick:()=>j(n),children:[e.jsx(P,{src:(t=n.imagenes)==null?void 0:t[0],alt:n.nombre}),e.jsx(V,{children:e.jsx(E,{children:n.nombre})})]},n.id)})})]})}const u=i=>i.map(s=>({...s,imagenes:s.imagenes.map(c=>`${I}/products/${c}`),children:u(s.children||[])})),m=o.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,S=o.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #222;
`,z=o.button`
  margin-bottom: 1rem;
  background: #ddd;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
`,B=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
`,M=o.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-3px);
  }
`,P=o.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
  background: #f9f9f9;
`,V=o.div`
  padding: 0.5rem;
`,E=o.p`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
`,T=o.div`
  text-align: center;
`,$=o.img`
  max-width: 500px;
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 1rem;
`,y=o.div`
  margin-bottom: 1rem;
`,A=o.h2`
  font-size: 1.5rem;
  margin: 0;
`,L=o.p`
  font-size: 1rem;
`,_=o.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  margin-top: 1rem;
  justify-content: center;
`,D=o.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border: ${({isActive:i})=>i?"2px solid blue":"1px solid #ccc"};
  cursor: pointer;
  padding: 2px;
  background: #fff;
`;export{U as default};
