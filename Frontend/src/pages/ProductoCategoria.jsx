import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoDestacado from "@/components/ProductoDestacado";
import {
  getHerrajes,
  getMelaminas,
  getMuebles,
  getRevestimientos,
  getVinilos,
} from "@/api/resources/productsApi";
import { normalizarDatos } from "@/api/utils/normalizeTree";

const APIS = {
  melaminas: getMelaminas,
  herrajes: getHerrajes,
  revestimientos: getRevestimientos,
  muebles: getMuebles,
  vinilos: getVinilos,
};

export default function ProductoCategoria() {
  const { categoria, producto } = useParams();
  const [destacado, setDestacado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      setLoading(true);
      const getFn = APIS[categoria.toLowerCase()];
      if (!getFn) return;

      try {
        const data = await getFn();
        const plano = flatten(normalizarDatos(data));

        const match = plano.find((item) =>
          slugify(item.nombre) === slugify(producto)
        );

        setDestacado(match || null);
      } catch (err) {
        console.error("❌ Error al buscar producto:", err);
        setDestacado(null);
      } finally {
        setLoading(false);
      }
    };

    cargar();
  }, [categoria, producto]);

  if (loading) return <div style={{ padding: "2rem" }}>Cargando producto…</div>;
  if (!destacado) return <div style={{ padding: "2rem" }}>Producto no encontrado</div>;

  return <ProductoDestacado producto={destacado} categoria={categoria} />;
}

// 🔁 Versión mejorada del flatten con ruta completa
const flatten = (nodos, currentPath = []) => {
  const hojas = [];

  const rec = (nodo, path) => {
    const nuevaRuta = [...path, nodo.nombre];

    if (!nodo.children || nodo.children.length === 0) {
      const imagenes = nodo.imagenes || [];
      hojas.push({
        ...nodo,
        ruta: nuevaRuta.join("/"), // ✅ RUTA COMPLETA
        imagenes,
      });
    } else {
      nodo.children.forEach((child) => rec(child, nuevaRuta));
    }
  };

  nodos.forEach((n) => rec(n, currentPath));
  return hojas;
};

const slugify = (str = "") =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

