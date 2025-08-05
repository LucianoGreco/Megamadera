const fs = require('fs');
const path = require('path');

// Ruta al archivo de entrada
const rutaJSON = path.resolve('D:/Empresas/Programacion/Proyectos/MegaMadera/Backend/seed/datos/products.json');

// Ruta al archivo de salida (junto al script)
const rutaSalida = path.resolve(__dirname, 'esquemaCategorias.txt');

// Leer y parsear el archivo
let data;
try {
  const raw = fs.readFileSync(rutaJSON, 'utf-8');
  data = JSON.parse(raw);
} catch (err) {
  console.error('❌ Error al leer o parsear el JSON:', err);
  process.exit(1);
}

// Detecta si el objeto es un producto (tiene atributos clave)
function esProducto(obj) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'codigo' in obj &&
    'nombre' in obj &&
    'descripcion' in obj
  );
}

// Recorrer recursivamente el árbol de productos
function recorrer(obj, nivel = 0, output = []) {
  const indent = '│   '.repeat(nivel);

  for (const clave in obj) {
    const valor = obj[clave];

    if (Array.isArray(valor)) {
      continue; // Ignorar arrays sueltos (ej: imágenes en niveles superiores)
    }

    if (esProducto(valor)) {
      output.push(`${indent}├── 📁 ${clave}`);
      const indentAtributo = '│   '.repeat(nivel + 1);

      // Agregar atributos del producto
      output.push(`${indentAtributo}├── codigo: ${valor.codigo}`);
      output.push(`${indentAtributo}├── nombre: ${valor.nombre}`);
      output.push(`${indentAtributo}├── descripcion: ${valor.descripcion}`);

      if (Array.isArray(valor.images)) {
        valor.images.forEach(img => {
          output.push(`${indentAtributo}├── images: ${img}`);
        });
      }

    } else if (typeof valor === 'object') {
      output.push(`${indent}├── 📁 ${clave}`);
      recorrer(valor, nivel + 1, output);
    }
  }

  return output;
}

// Validar punto de entrada
if (!data.products) {
  console.error('❌ El archivo JSON no tiene una clave "products" válida.');
  process.exit(1);
}

// Generar esquema
const esquema = ['📁 (raíz)', '├── 📁 products'];
recorrer(data.products, 2, esquema);

// Guardar
try {
  fs.writeFileSync(rutaSalida, esquema.join('\n'), 'utf-8');
  console.log(`✅ Esquema con atributos generado en: ${rutaSalida}`);
} catch (err) {
  console.error('❌ Error al escribir el archivo de salida:', err);
}
