const fs = require('fs');
const path = require('path');

const basePath = 'D:/Empresas/Programacion/Proyectos/MegaMadera/Backend/products';
const outputPath = path.join(__dirname, 'products.json');

function formatName(name) {
  return name.replace(/_/g, ' ').replace(/\\|\//g, ' ').replace(/\s+/g, ' ').trim();
}

function getImageFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.filter(file => /\.(jpe?g|png)$/i.test(file));
}

function isLeaf(dir) {
  return fs.readdirSync(dir).every(item => {
    const fullPath = path.join(dir, item);
    return !fs.statSync(fullPath).isDirectory();
  });
}

function addProductsPrefix(imagePath) {
  return imagePath.startsWith('products/') ? imagePath : `products/${imagePath}`;
}

function scanDir(currentPath, relativePath = '', codePrefix = '') {
  const result = {};
  const entries = fs.readdirSync(currentPath).filter(f => !f.startsWith('.'));
  const dirs = entries.filter(e => fs.statSync(path.join(currentPath, e)).isDirectory());

  // Si hay imágenes y subcarpetas, agregamos imagen al nodo padre (objeto secundario)
  const images = getImageFiles(currentPath);
  if (images.length && dirs.length > 0) {
    result.images = images.map(img =>
      addProductsPrefix(path.join(relativePath, img).replace(/\\/g, '/'))
    );
  }

  dirs.forEach((dirName, index) => {
    const fullDirPath = path.join(currentPath, dirName);
    const relDirPath = path.join(relativePath, dirName);
    const currentCode = codePrefix + (index + 1).toString();

    if (isLeaf(fullDirPath)) {
      const leafImages = getImageFiles(fullDirPath);
      result[dirName] = {
        codigo: currentCode,
        nombre: formatName(dirName),
        descripcion: formatName(relDirPath),
        images: leafImages.map(img =>
          addProductsPrefix(path.join(relDirPath, img).replace(/\\/g, '/'))
        )
      };
    } else {
      result[dirName] = scanDir(fullDirPath, relDirPath, currentCode);
    }
  });

  return result;
}

const data = {
  products: scanDir(basePath)
};

fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

console.log('✅ Archivo products.json generado con códigos jerárquicos en:', outputPath);
