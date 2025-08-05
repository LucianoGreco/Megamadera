// Componente que muestra una grilla con todos los productos traídos desde un hook personalizado
import React from "react";
import styled from "styled-components";
import useTodosLosProductos from "@/hooks/useTodosLosProductos"; // Hook que trae todos los productos


const TodosLosProductos = () => {
  // Extrae datos, estado de carga y errores del hook
  const { productos, loading, error } = useTodosLosProductos();

  // Muestra mensaje de carga mientras se obtienen los datos
  if (loading) return <div>Cargando todos los productos…</div>;

  // Muestra mensaje de error si la petición falla
  if (error) return <div>{error}</div>;

  // Muestra la grilla de productos una vez cargados
  return (
    <Grid>
      {productos.map((p) => (
        <Card key={`${p.id}-${p.categoria}`}> {/* Clave única combinando ID y categoría */}
          <img src={p.imagenes?.[0] || ""} alt={p.nombre} /> {/* Primera imagen o vacío */}
          <div>
            <strong>{p.nombre}</strong>       {/* Nombre del producto */}
            <p>{p.categoria}</p>              {/* Categoría como subtítulo */}
          </div>
        </Card>
      ))}
    </Grid>
  );
};

export default TodosLosProductos;


// Contenedor de la grilla responsive
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); // Responsive por tarjeta mínima
  gap: 1rem;
  padding: 1rem;
`;

// Tarjeta individual de producto
const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;

  img {
    width: 100%;
    height: 120px;
    object-fit: contain;    // Escala manteniendo proporción
    background: #f7f7f7;    // Fondo gris claro para imágenes vacías o con transparencia
  }

  div {
    padding: 0.5rem;        // Espaciado interno debajo de la imagen
  }
`;
