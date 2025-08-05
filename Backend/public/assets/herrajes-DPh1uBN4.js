import{r as m,j as e,d as n}from"./index-D0cUJPDZ.js";import{a as C,e as w}from"./normalizeTree-LpHbLW8i.js";import{u as z}from"./useProductos-B9EDYsbv.js";import{S as E}from"./Slider-lMCY7ZUP.js";const I="http://localhost:4000",F=()=>{const{data:t,loading:a,error:i}=z(C),[c,o]=m.useState([]),[s,d]=m.useState(null),[h,l]=m.useState([]);if(m.useEffect(()=>{if(t&&t.length>0){const r=w(t),p=S(r);l(p)}},[t]),a)return e.jsx(u,{children:"Cargando herrajes…"});if(i)return e.jsx(u,{children:"❌ Error al cargar los herrajes"});const g=x(t),j=c.reduce((r,p)=>{var f;return((f=r.find(v=>v.id===p))==null?void 0:f.children)||[]},g),b=r=>{r.children&&r.children.length>0?o([...c,r.id]):d(r)},k=()=>{s?d(null):o(c.slice(0,-1))};return e.jsxs(u,{children:[e.jsx(B,{children:"Herrajes"}),e.jsx(E,{title:"Herrajes destacados",data:h,categoria:"herrajes"}),(c.length>0||s)&&e.jsx(M,{onClick:k,children:"⬅ Volver"}),e.jsx(P,{children:j.map(r=>e.jsxs(H,{onClick:()=>b(r),children:[e.jsx(y,{src:r.imagen,alt:r.nombre}),e.jsx(D,{children:e.jsx(L,{children:r.nombre})})]},r.id))}),s&&e.jsx(T,{onClick:()=>d(null),children:e.jsxs(A,{onClick:r=>r.stopPropagation(),children:[e.jsx(R,{onClick:()=>d(null),children:"×"}),e.jsx(_,{src:s.imagen,alt:s.nombre}),e.jsxs($,{children:[e.jsx(G,{children:s.nombre}),e.jsx(O,{children:s.descripcion})]})]})})]})},S=(t,a=[])=>{const i=[],c=(o,s)=>{var h;const d=[...s,o.nombre];if(!o.children||o.children.length===0){const l=((h=o.imagenes)==null?void 0:h[0])??"placeholder.jpg",g={...o,imagen:l,ruta:d.join("/")};i.push(g)}else o.children.forEach(l=>c(l,d))};return t.forEach(o=>c(o,a)),i},x=t=>t.map(a=>{var i;return{...a,imagen:`${I}/products/${((i=a.imagenes)==null?void 0:i[0])??"placeholder.jpg"}`,children:x(a.children||[])}}),u=n.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,B=n.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #222;
`,M=n.button`
  margin-bottom: 1rem;
  background: #ddd;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`,P=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
`,H=n.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-3px);
  }
`,y=n.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
  background: #f9f9f9;
`,D=n.div`
  padding: 0.5rem;
`,L=n.p`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
`,T=n.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  padding: 1rem;
`,A=n.div`
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  max-width: 500px;
  width: 100%;
  position: relative;
`,R=n.button`
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
`,_=n.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  background: #f9f9f9;
`,$=n.div`
  margin-top: 1rem;
`,G=n.h2`
  font-size: 1.3rem;
  margin: 0;
`,O=n.p`
  font-size: 0.95rem;
  margin-top: 0.5rem;
`;export{F as default};
