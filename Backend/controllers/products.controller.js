const path = require("path");
const { normalizarDirectorio } = require("../services/productsNormalizer");

const BASE_DIR = path.join(__dirname, "../products");

exports.getCategoryTree = (req, res) => {
  const { category } = req.params;
  const dir = path.join(BASE_DIR, category);

  try {
    const data = normalizarDirectorio(dir, category);
    res.json({ products: data });
  } catch (err) {
    console.error(`Error leyendo ${category}:`, err);
    res.status(500).json({ error: `No se pudieron leer los productos de ${category}` });
  }
};
