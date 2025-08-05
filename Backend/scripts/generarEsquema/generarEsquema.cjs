const fs = require("fs");
const path = require("path");

const outputDir = __dirname;
const txtOutput = [];
const indentChar = "│   ";

const raiz = "D:/Empresas/Programacion/Proyectos/MegaMadera/Backend";

// patrones a ignorar: carpeta o archivo que cumpla con alguno de estos
const patronesIgnorados = [
  /^node_modules$/,
  /^scripts$/,
  /^desktop\.ini$/i,
  /^package-lock\.json$/i,
  // /^.git$/i

];

txtOutput.push(`Estructura del Proyecto:\n`);
txtOutput.push(`📁 (raíz)\n│`);

function seIgnora(nombre) {
  return patronesIgnorados.some(pat => pat.test(nombre));
}

function recorrerDirectorio(dir, prefix = "│") {
  let elementos = fs.readdirSync(dir, { withFileTypes: true });
  elementos = elementos
    .filter(e => !seIgnora(e.name))
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
      txtOutput.push(`${prefix}${connector} ${elem.name}`);
    }
  });
}

recorrerDirectorio(raiz);

txtOutput.push(`\n\nContenido de archivos clave:\n`);

const archivosClave = [
  "products/*",
  "controllers/products.controller.js",
  "models/products.model.js",
  "routes/products.routes.js",
  "seed/products.seed.js",
  "seed/datos/products.json",
  "services/productsNormalizer.js",
  ".env",
  "package.json",
  "server.js",
  ".git"
];

archivosClave.forEach(relPath => {
  const absPath = path.join(raiz, relPath);
  txtOutput.push(`\n📝 ${absPath}`);
  txtOutput.push("────────────────────────────────────────────");
  if (fs.existsSync(absPath)) {
    const contenido = fs.readFileSync(absPath, "utf8");
    txtOutput.push(contenido.trim() || "[archivo vacío]");
  } else {
    txtOutput.push("[archivo no encontrado]");
  }
  txtOutput.push("────────────────────────────────────────────\n");
});

const outputPath = path.join(outputDir, "esquema.txt");
fs.writeFileSync(outputPath, txtOutput.join("\n"), "utf8");

console.log(`✅ Archivo esquema.txt generado en: ${outputPath}`);
