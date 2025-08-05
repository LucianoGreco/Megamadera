import{r as l,d as s,u as U,j as e,l as X,a as x,L as P,b as G}from"./index-D0cUJPDZ.js";import{g as H,a as A,b as N,c as O,d as D,n as k,e as S}from"./normalizeTree-LpHbLW8i.js";import{b as w}from"./breakpoints-Cl0g07MV.js";import{S as f}from"./Slider-lMCY7ZUP.js";import{P as J}from"./ProductoDestacado-gnmdsiTo.js";const z=r=>{const a=[],n=t=>{a.push(t),Array.isArray(t.children)&&t.children.forEach(n)};return Array.isArray(r)?r.forEach(n):n(r),a},C=r=>[r.nombre,r.descripcion,r.categoria,...r.path||[]].join(" ").toLowerCase().split(/[\s,/.-]+/).filter(Boolean).filter((n,t,i)=>i.indexOf(n)===t),K=()=>{const[r,a]=l.useState([]),[n,t]=l.useState(!0),[i,u]=l.useState(null);return l.useEffect(()=>{(async()=>{t(!0);try{const[c,m,g,b,y]=await Promise.all([H(),A(),N(),O(),D()]),M=[...z(k(c)).map(d=>({...d,categoria:"melaminas",tags:C(d)})),...z(k(m)).map(d=>({...d,categoria:"herrajes",tags:C(d)})),...z(k(g)).map(d=>({...d,categoria:"revestimientos",tags:C(d)})),...z(k(b)).map(d=>({...d,categoria:"muebles",tags:C(d)})),...z(k(y)).map(d=>({...d,categoria:"vinilos",tags:C(d)}))];a(M),u(null)}catch(c){console.error(c),u("Error al cargar los productos")}finally{t(!1)}})()},[]),{productos:r,loading:n,error:i}};function Y(r){const{productos:a,loading:n}=K(),t=r.trim().toLowerCase(),i=l.useMemo(()=>!t||a.length===0?[]:a.filter(o=>{var c,m,g,b;return((c=o.nombre)==null?void 0:c.toLowerCase().includes(t))||((m=o.descripcion)==null?void 0:m.toLowerCase().includes(t))||((g=o.categoria)==null?void 0:g.toLowerCase().includes(t))||((b=o.path)==null?void 0:b.join("/").toLowerCase().includes(t))||Array.isArray(o.tags)&&o.tags.some(y=>y.includes(t))}),[t,a]),u=l.useMemo(()=>{if(!t||a.length===0)return[];const o=new Set;return a.forEach(c=>{c.tags&&c.tags.forEach(m=>{m.includes(t)&&o.add(m)})}),[...o].slice(0,6)},[t,a]);return{resultados:i,sugerencias:u,loading:n}}const Z=()=>{const[r,a]=l.useState(""),n=U(),{resultados:t,sugerencias:i}=Y(r),u=o=>{var g;const c=encodeURIComponent(o.nombre.toLowerCase()),m=((g=o.categoria)==null?void 0:g.toLowerCase())||"productos";n(`/${m}/${c}`),a("")};return e.jsxs(_,{children:[e.jsx(ee,{type:"text",placeholder:"Buscar productos...",value:r,onChange:o=>a(o.target.value)}),r.length>1&&i.length>0&&e.jsx(te,{children:i.map((o,c)=>e.jsx(oe,{onClick:()=>a(o),children:o},c))}),r.length>1&&t.length>0&&e.jsx(re,{children:t.slice(0,5).map(o=>{var c;return e.jsxs(se,{onClick:()=>u(o),children:[e.jsx(ae,{src:`http://localhost:4000/products/${((c=o.imagenes)==null?void 0:c[0])??"placeholder.jpg"}`,alt:o.nombre}),e.jsx("span",{children:o.nombre})]},o.id)})})]})},_=s.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 100%;
  max-width: 500px;
  z-index: 20;
`,ee=s.input`
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1.1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  backdrop-filter: blur(8px);
  outline: none;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
  }
`,te=s.div`
  margin-top: 0.5rem;
  background: rgba(30, 30, 30, 0.9);
  border-radius: 10px;
  padding: 0.3rem;
`,oe=s.div`
  padding: 0.4rem 0.8rem;
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,re=s.ul`
  position: absolute;
  width: 100%;
  background: rgba(30, 30, 30, 0.95);
  border-radius: 10px;
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
  max-height: 250px;
  overflow-y: auto;
`,se=s.li`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  span {
    font-size: 0.95rem;
  }
`,ae=s.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  margin-right: 0.75rem;
  border-radius: 6px;
`,ne=()=>{var i;const[r,a]=l.useState(0),n=l.useMemo(()=>Object.values(x.secciones),[]);l.useEffect(()=>{const u=setInterval(()=>{a(o=>(o+1)%n.length)},6e3);return()=>clearInterval(u)},[n.length]);const t=n[r];return e.jsxs(ce,{children:[e.jsxs(de,{children:[n.map((u,o)=>e.jsx(le,{src:u.background,alt:u.name,$active:o===r,loading:"lazy"},o)),e.jsx(ue,{}),e.jsx(ie,{children:e.jsx(Z,{})})]}),e.jsxs(me,{children:[e.jsx(ge,{children:t.name}),e.jsx(he,{children:(i=t.description)!=null&&i.trim()?t.description:`Descubre lo mejor de nuestra colección en ${t.name}. Explora ahora y transforma tus espacios.`}),e.jsxs(pe,{to:t.page,"aria-label":`Ir a ${t.name}`,children:["Explorar ",t.name]})]})]})},ie=s.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  width: 90%;
  max-width: 600px;
  padding: 1rem;
  border-radius: 12px;

  // Quitamos fondo y borde: que sea el input quien defina la estética
  background: none;
  border: none;
`,ce=s.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
  overflow: hidden;

  // En tablet o menos, se apila vertical
  @media (max-width: ${w.tablet}) {
    flex-direction: column;
    height: auto;
  }
`,de=s.div`
  position: relative;
  flex: 2;
  overflow: hidden;
  min-height: 300px;
`,le=s.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0; // Oculta por defecto
  transition: opacity 1s ease-in-out;

  // Solo la imagen activa es visible
  ${({$active:r})=>r&&X`
      opacity: 1;
    `}
`,ue=s.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0) 90%
  );
  z-index: 1;
`,me=s.div`
  flex: 1;
  z-index: 2;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f9f9f9;

  @media (max-width: ${w.tablet}) {
    padding: 2rem;
  }
`,ge=s.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 1rem 0;

  @media (max-width: ${w.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${w.mobile}) {
    font-size: 2rem;
  }
`,he=s.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (max-width: ${w.tablet}) {
    font-size: 1rem;
  }
`,pe=s(P)`
  display: inline-block;
  width: fit-content;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #222;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #444;
  }
`,j=({name:r,image:a,page:n,children:t})=>e.jsx(xe,{children:e.jsxs(be,{children:[e.jsx(fe,{src:a,alt:r}),e.jsx(je,{children:t}),e.jsx(ve,{}),e.jsx(we,{to:n,children:r})]})}),xe=s.div`
  width: 100%;
  height: 85vh;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`,be=s.div`
  width: 100%;
  height: 100%;
  position: relative;
`,fe=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
`,je=s.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 30%;
  padding: 1rem;
  background: transparent;
  z-index: 2;
  pointer-events: auto;
`,ve=s.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.6) 100%);
  z-index: 1;
`,we=s(P)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: ${w.mobile}) {
    font-size: 1.1rem;
  }
`,Te=()=>{var L;const[r,a]=l.useState([]),[n,t]=l.useState([]),[i,u]=l.useState([]),[o,c]=l.useState([]),[m,g]=l.useState([]),[b,y]=l.useState([]),d=((L=G().state)==null?void 0:L.producto)||null;return l.useEffect(()=>{(async()=>{try{const[E,V,W,q,Q]=await Promise.all([H(),A(),N(),O(),D()]),T=S(E),$=S(V),I=S(W),B=S(q),R=S(Q),F=[...h(T),...h($),...h(I),...h(B),...h(R)];a(F),u(h(T)),t(h($)),c(h(I)),g(h(B)),y(h(R))}catch(E){console.error("❌ Error al cargar productos:",E)}})()},[]),e.jsxs(ye,{children:[e.jsx(ne,{}),d&&e.jsx(p,{children:e.jsx(J,{producto:d})}),e.jsxs(p,{children:[e.jsx(v,{children:"Todos los productos"}),e.jsx(ke,{children:"Melaminas | Revestimientos | Herrajes | Muebles | Vinilos"}),e.jsx(f,{data:r,categoria:"productos"})]}),e.jsx(p,{children:e.jsx(j,{...x.secciones.simulador})}),e.jsxs(p,{children:[e.jsx(v,{children:"Herrajes"}),e.jsx(j,{...x.secciones.herrajes,children:e.jsx(f,{data:n,categoria:"herrajes"})})]}),e.jsxs(p,{children:[e.jsx(v,{children:"Melaminas"}),e.jsx(j,{...x.secciones.melaminas,children:e.jsx(f,{data:i,categoria:"melaminas"})})]}),e.jsxs(p,{children:[e.jsx(v,{children:"Revestimientos"}),e.jsx(j,{...x.secciones.revestimiento,children:e.jsx(f,{data:o,categoria:"revestimientos"})})]}),e.jsxs(p,{children:[e.jsx(v,{children:"Muebles"}),e.jsx(j,{...x.secciones.muebles,children:e.jsx(f,{data:m,categoria:"muebles"})})]}),e.jsxs(p,{children:[e.jsx(v,{children:"Vinilos"}),e.jsx(j,{...x.secciones.vinilos,children:e.jsx(f,{data:b,categoria:"vinilos"})})]})]})},h=(r,a=[])=>{const n=[],t=(i,u)=>{var c;const o=[...u,i.nombre];if(!i.children||i.children.length===0){const m=((c=i.imagenes)==null?void 0:c[0])??"placeholder.jpg",g={...i,imagen:m,ruta:o.join("/")};n.push(g)}else i.children.forEach(m=>t(m,o))};return r.forEach(i=>t(i,a)),n},ye=s.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,p=s.section`
  width: 100%;
  margin: 0 auto 1rem;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`,v=s.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
`,ke=s.p`
  font-size: 0.85rem;
  color: #666;
`;export{Te as default};
