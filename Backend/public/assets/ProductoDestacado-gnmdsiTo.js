import{b as u,r as x,j as o,d as t}from"./index-D0cUJPDZ.js";const D=({producto:c})=>{var m;const l=u(),r=c||((m=l.state)==null?void 0:m.producto)||{},[a,p]=x.useState(0);console.log("🔥 Producto recibido en ProductoDestacado:"),console.log(r);const s=Array.isArray(r.imagenes)?r.imagenes:[],i=n=>{const e="https://backend-megamadera.onrender.com";return n.includes("/")?`${e}/products/${n}`:`${e}/products/${r.ruta}/${n}`},d=s[a]?i(s[a]):null;return o.jsxs(g,{children:[o.jsx(b,{children:"Producto destacado"}),o.jsxs(h,{children:[d&&o.jsx(f,{src:d,alt:r.nombre}),o.jsxs(j,{children:[o.jsx(v,{children:r.nombre}),o.jsx($,{children:r.descripcion||"Sin descripción"})]}),s.length>1&&o.jsx(w,{children:s.map((n,e)=>o.jsx(y,{src:i(n),alt:`Vista ${e+1}`,onClick:()=>p(e),$activa:e===a},e))})]})]})},g=t.section`
  margin: 1rem auto;
  padding: 1rem;
  background: #fafafa;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 800px;
`,b=t.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`,h=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=t.img`
  max-width: 100%;
  max-height: 50vh;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
`,j=t.div`
  margin-bottom: 1rem;
`,v=t.h3`
  font-size: 1.4rem;
  font-weight: 600;
`,$=t.p`
  font-size: 1rem;
  color: #555;
`,w=t.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
`,y=t.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
  border: 2px solid ${c=>c.$activa?"#000":"#ccc"};
  cursor: pointer;
  transition: border 0.3s ease;
  &:hover {
    border-color: #333;
  }
`;export{D as P};
