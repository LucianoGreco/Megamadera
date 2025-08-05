const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('D:/Empresas/Programacion/Proyectos/MegaMadera/Backend/products');
const outputFile = path.resolve(__dirname, 'rutas.txt');
const baseUrl = 'http://localhost:4000/';

const rutas = [];

/**
 * Recursivamente recorre un directorio y acumula rutas de archivos.
 * Ignora los archivos `.ini`.
 * @param {string} dir Ruta absoluta del directorio actual
 */
function recorrerDirectorio(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
            recorrerDirectorio(fullPath);
        } else if (item.isFile()) {
            if (path.extname(item.name).toLowerCase() === '.ini') continue;

            // obtener ruta relativa desde baseDir, y normalizar a /
            const relativePath = path.relative(baseDir, fullPath).split(path.sep).join('/');
            rutas.push(`${baseUrl}products/${relativePath}`);
        }
    }
}

recorrerDirectorio(baseDir);

// escribir archivo de salida
fs.writeFileSync(outputFile, rutas.join('\n'), 'utf8');

console.log(`✅ Rutas generadas (sin .ini) y guardadas en: ${outputFile}`);
