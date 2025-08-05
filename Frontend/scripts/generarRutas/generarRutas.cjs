const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');
const outputPath = path.join(__dirname, 'rutas.txt');

console.log(`📂 Recorriendo: ${rootDir}`);
console.log(`📝 Guardando resultado en: ${outputPath}\n`);

const rutas = [];

// Función recursiva para recorrer carpetas
function listarArchivos(directorio) {
    const entradas = fs.readdirSync(directorio, { withFileTypes: true });

    entradas.forEach((entrada) => {
        const rutaCompleta = path.join(directorio, entrada.name);

        // Saltar node_modules
        if (entrada.isDirectory() && entrada.name === 'node_modules') {
            return;
        }

        // Saltar package-lock.json
        if (!entrada.isDirectory() && entrada.name === 'package-lock.json') {
            return;
        }

        if (entrada.isDirectory()) {
            listarArchivos(rutaCompleta);
        } else {
            rutas.push(rutaCompleta);
        }
    });
}

// Ejecutar
listarArchivos(rootDir);

// Escribir el archivo
fs.writeFileSync(outputPath, rutas.join('\n'), 'utf8');

console.log(`✅ ${rutas.length} archivos listados (sin node_modules ni package-lock.json).`);
console.log(`🎯 Archivo generado: ${outputPath}`);
