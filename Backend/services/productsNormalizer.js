const fs = require("fs");
const path = require("path");

const IGNORE_FILES = ["desktop.ini"];
const BASE_DIR = path.join(__dirname, "../products");

function encontrarPrimeraImagen(dirPath) {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const item of items) {
    if (item.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(item.name)) {
      return path.posix.join(
        path.relative(BASE_DIR, dirPath).replace(/\\/g, "/"),
        item.name
      );
    }
    if (item.isDirectory()) {
      const img = encontrarPrimeraImagen(path.join(dirPath, item.name));
      if (img) return img;
    }
  }
  return null;
}

function normalizarDirectorio(dirPath, categoria = "", relPath = "") {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  const resultado = [];

  for (const item of items) {
    if (IGNORE_FILES.includes(item.name)) continue;

    const currentPath = path.join(dirPath, item.name);
    const relativePath = path.posix.join(relPath, item.name);

    if (item.isDirectory()) {
      const hijos = normalizarDirectorio(currentPath, categoria || item.name, relativePath);

      resultado.push({
        id: relativePath.replace(/\//g, "-"),
        nombre: item.name,
        descripcion: relativePath.replace(/\//g, " "),
        categoria: categoria || item.name,
        subcategoria: relativePath.split("/")[1] || null,
        imagenes: [
          encontrarPrimeraImagen(currentPath) || `${relativePath}/errorImg.jpg`
        ],
        children: hijos
      });
    }
  }

  return resultado;
}

module.exports = { normalizarDirectorio };
