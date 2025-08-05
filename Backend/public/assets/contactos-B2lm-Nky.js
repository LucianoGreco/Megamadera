import{R as d,d as s,j as a,e as v}from"./index-D0cUJPDZ.js";import{b as c}from"./breakpoints-Cl0g07MV.js";var w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=d.createContext&&d.createContext(w),z=["attr","size","title"];function y(e,r){if(e==null)return{};var t=O(e,r),n,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function O(e,r){if(e==null)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g.apply(this,arguments)}function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?x(Object(t),!0).forEach(function(n){P(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function P(e,r,t){return r=C(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e){var r=E(e,"string");return typeof r=="symbol"?r:r+""}function E(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function j(e){return e&&e.map((r,t)=>d.createElement(r.tag,f({key:t},r.attr),j(r.child)))}function p(e){return r=>d.createElement(M,g({attr:f({},e.attr)},r),j(e.child))}function M(e){var r=t=>{var{attr:n,size:i,title:l}=e,h=y(e,z),o=i||t.size||"1em",m;return t.className&&(m=t.className),e.className&&(m=(m?m+" ":"")+e.className),d.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,h,{className:m,style:f(f({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&d.createElement("title",null,l),e.children)};return u!==void 0?d.createElement(u.Consumer,null,t=>r(t)):r(w)}function S(e){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function _(e){return p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function b(e){return p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function k(e){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function F(e){return p({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}const $=s.section`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 3rem;
  border-radius: 20px;
  background: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: grid;
  gap: 2rem;
  text-align: center;

  @media (max-width: ${c.tablet}) {
    padding: 2rem;
  }

  @media (max-width: ${c.mobile}) {
    padding: 1rem;
  }
`,A=s.div`
  margin-bottom: 1rem;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #ccc;
    object-fit: contain;
    background: white;
  }
`,N=s.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #222;

  @media (max-width: ${c.mobile}) {
    font-size: 1.8rem;
  }
`,V=s.p`
  color: #666;
  font-size: 1rem;
  margin-top: 0.5rem;

  @media (max-width: ${c.mobile}) {
    font-size: 0.9rem;
  }
`,B=s.div`
  color: #444;
  font-size: 1rem;
  line-height: 1.6;

  p {
    margin: 0.3rem 0;
  }

  @media (max-width: ${c.mobile}) {
    font-size: 0.9rem;
  }
`,I=s.div``,W=s.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: ${c.mobile}) {
    font-size: 1.1rem;
  }
`,D=s.p`
  color: #555;
  font-size: 1rem;

  @media (max-width: ${c.mobile}) {
    font-size: 0.9rem;
  }
`,L=s.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    transition: transform 0.3s ease, color 0.3s ease;
  }

  a:hover {
    transform: scale(1.1);
  }
`,H=s.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1ebe5d;
    transform: scale(1.05);
  }

  @media (max-width: ${c.mobile}) {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
    bottom: 15px;
    right: 15px;
  }
`,R=s.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 12px;
  margin-top: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,q=()=>{const{nombreEmpresa:e,direccion:r,telefono:t,correo:n,horarios:i,dias:l,logo:h,redesSociales:o}=v;return a.jsxs(a.Fragment,{children:[a.jsxs($,{children:[h&&a.jsx(A,{children:a.jsx("img",{src:h,alt:`Logo de ${e}`})}),a.jsx(N,{children:e}),a.jsxs(V,{children:[r.calle,", ",r.localidad,", ",r.provincia,", ",r.pais]}),a.jsxs(B,{children:[a.jsxs("p",{children:["📞 ",a.jsx("strong",{children:t})]}),a.jsxs("p",{children:["✉️ ",a.jsx("strong",{children:n})]})]}),a.jsxs(I,{children:[a.jsx(W,{children:"Horarios de Atención"}),a.jsxs(D,{children:[l.join(", ")," de ",i.mañana.apertura," a ",i.mañana.cierre," y de"," ",i.tarde.apertura," a ",i.tarde.cierre," hs"]})]}),a.jsxs(L,{children:[o.facebook&&a.jsx("a",{href:o.facebook,target:"_blank",rel:"noopener noreferrer",children:a.jsx(S,{size:24,color:"#1877F2"})}),o.instagram&&a.jsx("a",{href:o.instagram,target:"_blank",rel:"noopener noreferrer",children:a.jsx(_,{size:24,color:"#E4405F"})}),o.whatsapp&&a.jsx("a",{href:o.whatsapp,target:"_blank",rel:"noopener noreferrer",children:a.jsx(b,{size:24,color:"#25D366"})}),o.correoVentas&&a.jsx("a",{href:`mailto:${o.correoVentas}`,children:a.jsx(k,{size:24,color:"#EA4335"})}),o.GoogleMaps&&a.jsx("a",{href:o.GoogleMaps,target:"_blank",rel:"noopener noreferrer",children:a.jsx(F,{size:24,color:"#EA4335"})})]}),o.GoogleMaps&&a.jsx(R,{src:"https://maps.google.com/maps?q=Av.%20Moreno%201455%2C%20San%20Rafael%2C%20Mendoza%2C%20Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]}),o.whatsapp&&a.jsxs(H,{href:o.whatsapp,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(b,{size:20}),"WhatsApp"]})]})};export{q as default};
