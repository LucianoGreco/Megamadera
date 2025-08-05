import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRevestimientos } from "@/api/resources/productsApi";
import Slider from "@/components/ui/Slider";
import Loader from "@/components/ui/Loader";
import { normalizarDatos } from "@/api/utils/normalizeTree";

export default function RevestimientosPage() {
  const [revestimientos, setRevestimientos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const datos = await getRevestimientos();
        const normalizados = normalizarDatos(datos);
        const planos = flatten(normalizados);
        setRevestimientos(planos);
      } catch (err) {
        console.error("❌ Error al cargar revestimientos:", err);
      } finally {
        setLoading(false);
      }
    };

    cargar();
  }, []);

  if (loading) return <Loader />;

  return (
    <Container>
      <Titulo>Revestimientos</Titulo>

      <Slider
        title="Revestimientos destacados"
        data={revestimientos}
        categoria="revestimientos"
      />

      <Grid>
        {revestimientos.map((item) => {
          const imageSrc = item.imagen?.startsWith("http")
            ? item.imagen
            : `http://localhost:4000/products/${item.imagen}`;

          const categoria = formatearRuta(item.ruta);

          const handleClick = () => {
            const pathParts = item.ruta.split("/").map((p) =>
              p
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]/g, "")
            );
            const slug = pathParts.pop();
            const categoriaSlug = pathParts[0] || "revestimientos";
            const url = `/${categoriaSlug}/${slug}`;

            // ✅ ABRIR EN NUEVA PESTAÑA
            window.open(url, "_blank");
          };

          return (
            <Card key={item.id} onClick={handleClick}>
              <EtiquetaRuta>{categoria}</EtiquetaRuta>
              <CardImage src={imageSrc} alt={item.nombre} loading="lazy" />
              <CardContent>
                <Title>{item.nombre}</Title>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
}

// 🔁 Aplanador de nodos hoja con ruta e imagen correctas
const flatten = (nodos, currentPath = []) => {
  const hojas = [];

  const rec = (nodo, path) => {
    const nuevaRuta = [...path, nodo.nombre];

    if (!nodo.children || nodo.children.length === 0) {
      const imagen = nodo.imagenes?.[0] ?? "placeholder.jpg";
      const productoPlano = {
        ...nodo,
        imagen,
        ruta: nuevaRuta.join("/"),
      };
      hojas.push(productoPlano);
    } else {
      nodo.children.forEach((child) => rec(child, nuevaRuta));
    }
  };

  nodos.forEach((n) => rec(n, currentPath));
  return hojas;
};

// 🔤 Formatea rutas como texto legible
const formatearRuta = (ruta) => {
  return ruta
    .split("/")
    .slice(0, -1)
    .map((segmento) =>
      segmento
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
    )
    .join(" > ");
};

// 🎨 Estilos
const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Titulo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Card = styled.div`
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
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  padding: 0.3rem 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-top-right-radius: 4px;
  border: 2px solid #006400;
  border-left: none;
  border-bottom: none;
`;

const Title = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1rem;
  color: #006400;
`;

const EtiquetaRuta = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: #555;
  background: #f0f0f0;
  padding: 0.3rem 0.5rem;
  border-bottom: 1px solid #ccc;
  text-align: center;
  text-transform: capitalize;
`;
