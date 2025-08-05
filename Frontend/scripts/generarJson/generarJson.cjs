const fs = require("fs");
const path = require("path");

// Configuración 🔧
const productsRoot = path.resolve(
  "D:/Empresas/Programacion/Proyectos/MegaMadera/Backend/products"
);
const scriptDir = __dirname;

const ignoreFolders = ["products", "herrajes"]; // ajustá esta lista
let idCounter = 1;

function normalizeName(parts) {
  return parts
    .join(" ")
    .replace(/\\/g, " ")
    .replace(/\//g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function walkDir(currentPath, accumulatedParts = []) {
  const entries = fs.readdirSync(currentPath, { withFileTypes: true });

  const usefulParts = accumulatedParts.filter(
    p => !ignoreFolders.includes(p.toLowerCase())
  );
  const nameKey = normalizeName(usefulParts);

  const node = {
    codigo: `ID-${idCounter++}`,
    nombre: nameKey || path.basename(currentPath),
    descripcion: "",
    imagenes: [],
    children: []
  };

  for (const entry of entries) {
    const fullPath = path.join(currentPath, entry.name);

    if (entry.isDirectory()) {
      const childNode = walkDir(fullPath, [...accumulatedParts, entry.name]);
      if (childNode) node.children.push(childNode);
    } else if (entry.isFile() && /\.(jpe?g|png|webp)$/i.test(entry.name)) {
      const webPath =
        "/" +
        path
          .relative(productsRoot, fullPath)
          .split(path.sep)
          .join("/");
      node.imagenes.push(webPath);
    }
  }

  // Unificar y ordenar imágenes
  node.imagenes = [...new Set(node.imagenes)].sort();

  return node;
}

// Ejecutar
const tree = walkDir(productsRoot);

const result = {
  name: "products",
  children: tree.children || []
};

const outputPath = path.join(scriptDir, "products.json");
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf-8");

console.log(`✅ Archivo jerárquico con metadata generado: ${outputPath}`);
