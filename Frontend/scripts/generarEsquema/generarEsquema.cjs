const fs = require("fs");
const path = require("path");

const outputDir = __dirname;
const txtOutput = [];
const indentChar = "│   ";

const raiz = "D:/Empresas/Programacion/Proyectos/MegaMadera/Frontend";

const patronesIgnorados = [
  /^node_modules$/,
  // /^\.git$/,
  /^scripts$/,
  /^desktop\.ini$/i,
  /\.gitignore$/i,
  /^package-lock\.json$/i,
  /^styles$/i,
];

const extensionesIgnoradas = [
  ".css",
  ".scss",
  ".sass",
  ".less",
];

txtOutput.push(`Estructura del Proyecto:\n`);
txtOutput.push(`📁 (raíz)\n│`);

function seIgnora(nombre) {
  return patronesIgnorados.some((pat) => pat.test(nombre));
}

function recorrerDirectorio(dir, prefix = "│") {
  let elementos = fs.readdirSync(dir, { withFileTypes: true });
  elementos = elementos
    .filter((e) => !seIgnora(e.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  elementos.forEach((elem, idx) => {
    const isLast = idx === elementos.length - 1;
    const connector = isLast ? "└──" : "├──";
    const nextPrefix = prefix + (isLast ? "    " : indentChar);

    const fullPath = path.join(dir, elem.name);

    if (elem.isDirectory()) {
      txtOutput.push(`${prefix}${connector} 📁 ${elem.name}`);
      recorrerDirectorio(fullPath, nextPrefix);
    } else {
      const ext = path.extname(elem.name);
      if (!extensionesIgnoradas.includes(ext)) {
        txtOutput.push(`${prefix}${connector} ${elem.name}`);
      }
    }
  });
}

// 🧼 Elimina estilos embebidos (styled-components, objetos de estilos y etiquetas <style>)
function eliminarEstilos(contenido) {
  return contenido
    // styled.div`...` o styled(Componente)`...`
    .replace(/const\s+\w+\s*=\s*styled\.\w+`[\s\S]*?`;/g, "")
    .replace(/const\s+\w+\s*=\s*styled\([^)]*\)`[\s\S]*?`;/g, "")
    // const styles = { ... }
    .replace(/const\s+styles\s*=\s*{[\s\S]*?};/g, "")
    // <style>{\`...\`}</style> → escapamos el backtick con doble barra
    .replace(/<style>\{\`[\s\S]*?\`\}<\/style>/g, "")
    // import styled from "styled-components"
    .replace(/import\s+styled\s+from\s+["']styled-components["'];?/g, "")
    // import { breakpoints } from "..."
    .replace(/import\s+{[^}]*breakpoints[^}]*}\s+from\s+["'][^"']+["'];?/g, "")
    .trim();
}



recorrerDirectorio(raiz);

txtOutput.push(`\n\nContenido de archivos clave:\n`);

const archivosClave = [
  "src/api/resources/productsApi.js",
  "src/api/utils/errorHandler.js",
  "src/api/utils/fixImagePath.js",
  "src/api/utils/flattenTree.js",
  "src/api/utils/normalizeTree.js",
  "src/api/utils/slugify.js",
  "src/api/utils/validatePath.js",
  "src/api/apiClient.js",
  "src/api/index.js",
  "src/components/cards/CardHome.jsx",
  "src/components/layout/navbar/Navbar.jsx",
  "src/components/layout/Footer.jsx",
  "src/components/layout/Header.jsx",
  "src/components/policies/Cookies.jsx",
  "src/components/policies/Privacidad.jsx",
  "src/components/policies/Terminos.jsx",
  "src/components/ui/Banner.jsx",
  "src/components/ui/Loader.jsx",
  "src/components/ui/Slider.jsx",
  "src/components/ui/Buscador",
  "src/components/ui/todosLosProductos.jsx",
  "src/components/ProductoDestacado.jsx",
  
  "src/data/components/cursor.jsx",
  "src/data/image/gestorImage.js",

  "src/data/pages/contactos.js",
  "src/data/pages/home.js",

  "src/hooks/useBuscador.js",
  "src/hooks/useProductos.js",
  "src/hooks/useTodosLosProductos.js",

  "src/pages/contactos.jsx",
  "src/pages/herrajes.jsx",
  "src/pages/home.jsx",
  "src/pages/melaminas.jsx",
  "src/pages/muebles.jsx",
  "src/pages/productoCategoria.jsx",
  "src/pages/revestimientos.jsx",
  "src/pages/simulador.jsx",
  "src/pages/vinilos.jsx",
  "src/styles/breakpoints.js",
  "src/styles/globalStyles.js",
  "src/utils/slugify.js",
  "src/App.jsx",
  "package.json",
  ".env",
  "Vercel.json",
  ".git"
];

function esArchivoDeEstilo(ruta) {
  const ext = path.extname(ruta);
  return extensionesIgnoradas.includes(ext) || ruta.toLowerCase().includes("/styles/");
}

archivosClave.forEach((relPath) => {
  if (esArchivoDeEstilo(relPath)) return;

  const absPath = path.join(raiz, relPath);
  txtOutput.push(`\n📝 ${absPath}`);
  txtOutput.push("────────────────────────────────────────────");

  if (fs.existsSync(absPath)) {
    const contenido = fs.readFileSync(absPath, "utf8");
    const sinEstilos = eliminarEstilos(contenido);
    txtOutput.push(sinEstilos || "[archivo vacío]");
  } else {
    txtOutput.push("[archivo no encontrado]");
  }

  txtOutput.push("────────────────────────────────────────────\n");
});

const outputPath = path.join(outputDir, "esquema.txt");
fs.writeFileSync(outputPath, txtOutput.join("\n"), "utf8");

console.log(`✅ Archivo esquema.txt generado en: ${outputPath}`);
