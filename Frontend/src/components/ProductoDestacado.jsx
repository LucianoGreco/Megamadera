import React, { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";
import { useLocation } from "react-router-dom";

const ProductoDestacado = ({ producto: propProducto }) => {
  const location = useLocation();
  const producto = propProducto || location.state?.producto || {};
  const [imagenActiva, setImagenActiva] = useState(0);

  console.log("🔥 Producto recibido en ProductoDestacado:");
  console.log(producto);

  const imagenes = Array.isArray(producto.imagenes) ? producto.imagenes : [];

const buildImageUrl = (imgPath) => {
  const base = import.meta.env.VITE_PUBLIC_BASE || "http://localhost:4000";

  // Si el path ya es una ruta relativa completa tipo "revestimientos/pared/.../1.png"
  if (!imgPath.includes("/")) {
    // Solo el nombre del archivo → usamos la ruta
    return `${base}/products/${producto.ruta}/${imgPath}`;
  }

  // Ruta ya armada desde API → no duplicamos
  return `${base}/products/${imgPath}`;
};


  const imagenPrincipal = imagenes[imagenActiva]
    ? buildImageUrl(imagenes[imagenActiva])
    : null;

  return (
    <Destacado>
      <Titulo>Producto destacado</Titulo>
      <Card>
        {imagenPrincipal && (
          <Imagen src={imagenPrincipal} alt={producto.nombre} />
        )}
        <Info>
          <Nombre>{producto.nombre}</Nombre>
          <Descripcion>{producto.descripcion || "Sin descripción"}</Descripcion>
        </Info>
        {imagenes.length > 1 && (
          <Miniaturas>
            {imagenes.map((img, idx) => (
              <Miniatura
                key={idx}
                src={buildImageUrl(img)}
                alt={`Vista ${idx + 1}`}
                onClick={() => setImagenActiva(idx)}
                $activa={idx === imagenActiva}
              />
            ))}
          </Miniaturas>
        )}
      </Card>
    </Destacado>
  );
};

export default ProductoDestacado;

const Destacado = styled.section`
  margin: 1rem auto;
  padding: 1rem;
  background: #fafafa;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 800px;
`;

const Titulo = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imagen = styled.img`
  max-width: 100%;
  max-height: 50vh;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  margin-bottom: 1rem;
`;

const Nombre = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
`;

const Descripcion = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Miniaturas = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Miniatura = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
  border: 2px solid ${(props) => (props.$activa ? "#000" : "#ccc")};
  cursor: pointer;
  transition: border 0.3s ease;
  &:hover {
    border-color: #333;
  }
`;
