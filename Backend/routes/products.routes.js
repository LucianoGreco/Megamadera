const express = require("express");
const router = express.Router();
const controller = require("../controllers/products.controller");

// árbol completo por categoría
router.get("/products/:category", controller.getCategoryTree);

module.exports = router;
