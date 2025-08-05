import{f as h,r as l,u as k,j as t}from"./index-D0cUJPDZ.js";/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],C=h("chevron-left",S);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],R=h("chevron-right",L),E=({title:W,data:a,categoria:f})=>{const n=l.useRef(null),[p,u]=l.useState(!1),[v,g]=l.useState(!1),[c,m]=l.useState(window.innerWidth<768),b=k(),x="https://backend-megamadera.onrender.com";l.useEffect(()=>{var s;const e=()=>{if(!n.current)return;const{scrollLeft:i,scrollWidth:y,clientWidth:j}=n.current;u(i>0),g(i+j<y-1)},r=()=>{m(window.innerWidth<768),e()};return e(),(s=n.current)==null||s.addEventListener("scroll",e),window.addEventListener("resize",r),()=>{var i;(i=n.current)==null||i.removeEventListener("scroll",e),window.removeEventListener("resize",r)}},[a]);const d=e=>{var r;(r=n.current)==null||r.scrollBy({left:e,behavior:"smooth"})},w=e=>{const r=encodeURIComponent(e.nombre.toLowerCase());b(`/${f}/${r}`,{state:{producto:e}})};return t.jsxs("div",{style:o.container,children:[t.jsxs("div",{style:o.sliderWrapper,children:[!c&&t.jsx("button",{onClick:()=>d(-300),style:{...o.navButton,left:0},disabled:!p,children:t.jsx(C,{size:16})}),t.jsx("div",{ref:n,style:o.slider,children:a.map(e=>{var s;const r=(s=e.imagen)!=null&&s.startsWith("http")?e.imagen:`${x}/products/${e.imagen??"placeholder.jpg"}`;return t.jsx("div",{onClick:()=>w(e),style:{textDecoration:"none",color:"inherit"},children:t.jsxs("div",{style:o.card,className:"slider-card",children:[t.jsx("img",{src:r,alt:e.nombre,style:o.image}),t.jsx("p",{style:o.name,children:e.nombre})]})},e.id)})}),!c&&t.jsx("button",{onClick:()=>d(300),style:{...o.navButton,right:0},disabled:!v,children:t.jsx(R,{size:16})})]}),t.jsx("style",{children:`
        .slider-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .slider-card:hover {
          transform: scale(1.05);
        }
        .slider-card::before {
          content: '';
          position: absolute;
          left: -75%;
          top: 0;
          width: 50%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: skewX(-20deg);
          transition: left 0.4s ease;
        }
        .slider-card:hover::before {
          left: 125%;
        }

        div[style*="overflow-x: auto"] {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }
        div[style*="overflow-x: auto"]::-webkit-scrollbar {
          display: none;
        }
      `})]})},o={container:{height:"100%",position:"relative",background:"transparent"},sliderWrapper:{position:"relative"},slider:{display:"flex",overflowX:"auto",overflowY:"hidden",gap:"0.6rem",scrollBehavior:"smooth",scrollbarWidth:"none",WebkitOverflowScrolling:"touch",scrollSnapType:"x mandatory",padding:"0.25rem 0"},card:{minWidth:"90px",flex:"0 0 auto",scrollSnapAlign:"start",border:"1px solid #ddd",borderRadius:"6px",padding:"0.3rem",textAlign:"center",backgroundColor:"#fff"},image:{width:"100%",height:"50px",objectFit:"cover",marginBottom:"0.25rem"},name:{fontSize:"0.75rem",fontWeight:"500"},navButton:{position:"absolute",top:"50%",transform:"translateY(-50%)",background:"#fff",border:"1px solid #ccc",borderRadius:"50%",width:"26px",height:"26px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,opacity:.85}};export{E as S};
