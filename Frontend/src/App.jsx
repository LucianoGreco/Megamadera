// 📄 src/App.jsx — Corregido con lazy loading, rutas dinámicas y componentes persistentes

// 🧩 Imports principales de React y React Router
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🎨 Estilos y componentes persistentes (están siempre en pantalla)
import GlobalStyles from "@/styles/globalStyles";       // Estilos CSS globales (reset, fuentes, etc.)
import Header from "@/components/layout/Header";       // Header que se mantiene en todas las páginas
import Footer from "@/components/layout/Footer";       // Footer persistente
import Cursor from "@/data/components/cursor";         // Cursor personalizado
import Loader from "@/components/ui/Loader";           // Loader para fallback mientras cargan componentes

// 🚀 Lazy loading: importación diferida de páginas
// Evita cargar todo de entrada, mejora performance
const Home = lazy(() => import("@/pages/home"));
const Melaminas = lazy(() => import("@/pages/melaminas"));
const Revestimientos = lazy(() => import("@/pages/revestimientos"));
const Vinilos = lazy(() => import("@/pages/vinilos"));
const Herrajes = lazy(() => import("@/pages/herrajes"));
const Simulador = lazy(() => import("@/pages/simulador"));
const Contactos = lazy(() => import("@/pages/contactos"));
const Muebles = lazy(() => import("@/pages/muebles"));
const Cookies = lazy(() => import("@/components/policies/Cookies"));
const Privacidad = lazy(() => import("@/components/policies/Privacidad"));
const Terminos = lazy(() => import("@/components/policies/Terminos"));
const ProductoCategoria = lazy(() => import("@/pages/ProductoCategoria"));

// 🧠 Componente principal de la app
const App = () => {
  return (
    <div className="App">
      {/* 🧾 Estilos globales aplicados una sola vez al cargar la app */}
      <GlobalStyles />

      {/* 🖱️ Cursor personalizado (probablemente animado o con diseño especial) */}
      <Cursor />

      {/* 🚏 Envolvemos todo en el Router de React Router DOM */}
      <Router>

        {/* 📌 Encabezado persistente en todas las páginas */}
        <Header />

        {/* 💤 Suspense muestra un Loader mientras los componentes lazy se cargan */}
        <Suspense fallback={<Loader />}>

          {/* 🗺️ Definición de rutas usando React Router */}
          <Routes>
            {/* Página de inicio */}
            <Route path="/" element={<Home />} />

            {/* Categorías de productos principales */}
            <Route path="/melaminas" element={<Melaminas />} />
            <Route path="/herrajes" element={<Herrajes />} />
            <Route path="/revestimientos" element={<Revestimientos />} />
            <Route path="/muebles" element={<Muebles />} />
            <Route path="/vinilos" element={<Vinilos />} />

            {/* Herramienta interactiva */}
            <Route path="/simulador" element={<Simulador />} />

            {/* Página de contacto */}
            <Route path="/contactos" element={<Contactos />} />

            {/* 📜 Rutas para políticas legales */}
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />

            {/* 🔄 Ruta dinámica para ver un producto individual basado en la categoría y el slug */}
            {/* Ej: /melaminas/roble-amargo */}
            <Route path="/:categoria/:producto" element={<ProductoCategoria />} />

            {/* ❌ Fallback para cualquier ruta no definida */}
            <Route path="*" element={<div style={{ padding: '2rem' }}>Página no encontrada</div>} />
          </Routes>

        </Suspense>

        {/* 📌 Footer persistente al final de todas las páginas */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
