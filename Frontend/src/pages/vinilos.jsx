// 📦 Imports
import React, { useState } from "react"; // Importa React y el hook useState para manejar estados
import styled from "styled-components"; // Importa styled-components para definir estilos CSS-in-JS
import useProductos from "@/hooks/useProductos"; // Hook personalizado para manejar carga de productos vía API
import { getVinilos } from "@/api"; // Función que obtiene los vinilos desde el backend (endpoint específico)

// 🌐 Constante que define la base pública del servidor de archivos (ej: imágenes)
const API_PUBLIC_BASE = "http://localhost:4000";

// 🧠 Componente principal que representa la página de vinilos
export default function VinilosPage() {
  // useProductos ejecuta getVinilos internamente y devuelve el estado de carga, error y los datos ya listos
  const { data, loading, error } = useProductos(getVinilos);

  // path: array de IDs que representa la navegación actual en la jerarquía (como un "breadcrumb")
  const [path, setPath] = useState([]);

  // selectedLeaf: guarda el objeto del producto cuando es una hoja (sin hijos)
  const [selectedLeaf, setSelectedLeaf] = useState(null);

  // highlightedImage: almacena cuál imagen está destacada en el modal
  const [highlightedImage, setHighlightedImage] = useState(null);

  // Si la data aún está cargando, mostramos mensaje de espera
  if (loading) return <Container>Cargando vinilos…</Container>;

  // Si hubo un error en la carga, mostramos un mensaje de error
  if (error) return <Container>❌ Error al cargar vinilos</Container>;

  // Normaliza la estructura jerárquica y ajusta rutas de imágenes
  const items = normalizarVinilos(data);

  // Determina qué elementos deben renderizarse según el path actual
  const currentItems = path.reduce(
    (acc, id) => acc.find((x) => x.id === id)?.children || [],
    items
  );

  // Al hacer clic en un ítem:
  // - Si tiene hijos, navegamos más profundo agregando su ID al path
  // - Si no tiene hijos, es una hoja, la seleccionamos y cargamos la imagen destacada
  const handleClick = (item) => {
    if (item.children && item.children.length > 0) {
      setPath([...path, item.id]);
    } else {
      setSelectedLeaf(item);
      setHighlightedImage(item.imagenes?.[0]);
    }
  };

  // Al hacer clic en "Volver":
  // - Si está abierto un producto hoja (modal), lo cerramos
  // - Si no, retrocedemos un nivel en el path
  const handleBack = () => {
    if (selectedLeaf) {
      setSelectedLeaf(null);
      setHighlightedImage(null);
    } else {
      setPath(path.slice(0, -1));
    }
  };

  // Render del componente
  return (
    <Container>
      <Titulo>Vinilos</Titulo>

      {/* Botón de volver solo visible si se está en un subnivel o con un producto abierto */}
      {(path.length > 0 || selectedLeaf) && (
        <BackButton onClick={handleBack}>⬅ Volver</BackButton>
      )}

      {/* Render condicional: si no hay selección, mostramos la grilla. Si hay producto hoja, mostramos modal */}
      {!selectedLeaf ? (
        <Grid>
          {currentItems.map((item) => (
            <Card key={item.id} onClick={() => handleClick(item)}>
              <CardImage src={item.imagenes?.[0]} alt={item.nombre} />
              <CardContent>
                <Title>{item.nombre}</Title>
              </CardContent>
            </Card>
          ))}
        </Grid>
      ) : (
        <ModalContent>
          <ModalImage src={highlightedImage} alt={selectedLeaf.nombre} />
          <ModalInfo>
            <ModalTitle>{selectedLeaf.nombre}</ModalTitle>
            <ModalDesc>{selectedLeaf.descripcion}</ModalDesc>
          </ModalInfo>

          <Slider>
            {selectedLeaf.imagenes.map((img, idx) => (
              <Thumb
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setHighlightedImage(img)} // Al hacer clic en una miniatura, se cambia la imagen principal
                isActive={highlightedImage === img} // Marca cuál thumb está activo visualmente
              />
            ))}
          </Slider>
        </ModalContent>
      )}
    </Container>
  );
}

// Esta función transforma recursivamente el árbol de productos
// - Asegura que cada imagen tenga ruta absoluta (`API_PUBLIC_BASE`)
// - Normaliza hijos recursivamente también
const normalizarVinilos = (productos) =>
  productos.map((item) => ({
    ...item,
    imagenes: item.imagenes.map(
      (img) => `${API_PUBLIC_BASE}/products/${img}`
    ),
    children: normalizarVinilos(item.children || []), // Llama a sí misma si hay hijos
  }));


  const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #222;
`;

const BackButton = styled.button`
  margin-bottom: 1rem;
  background: #ddd;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
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
  height: 160px;
  object-fit: contain;
  background: #f9f9f9;
`;

const CardContent = styled.div`
  padding: 0.5rem;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
`;

const ModalContent = styled.div`
  text-align: center;
`;

const ModalImage = styled.img`
  max-width: 500px;
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const ModalInfo = styled.div`
  margin-bottom: 1rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const ModalDesc = styled.p`
  font-size: 1rem;
`;

const Slider = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  margin-top: 1rem;
  justify-content: center;
`;

const Thumb = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border: ${({ isActive }) => (isActive ? "2px solid blue" : "1px solid #ccc")};
  cursor: pointer;
  padding: 2px;
  background: #fff;
`;
