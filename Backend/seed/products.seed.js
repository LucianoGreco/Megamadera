// scripts/seedProducts.js

import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import Product from "../models/products.model.js"; // <- Debe aceptar campo 'products'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "../.env") });

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MONGO_URI no está definido en .env");
  process.exit(1);
}

const productsJsonPath = join(__dirname, "../scripts/preparaProduct/products.json");

try {
  console.log("⏳ Conectando a MongoDB...");
  await mongoose.connect(MONGO_URI);
  console.log("✅ Conexión exitosa");

  console.log("🧹 Eliminando productos existentes...");
  await Product.deleteMany({});
  console.log("✅ Productos eliminados");

  console.log("📄 Leyendo products.json...");
  const rawData = fs.readFileSync(productsJsonPath, "utf-8");
  const jsonData = JSON.parse(rawData);

  if (!jsonData.products) {
    throw new Error("El JSON no contiene el campo 'products'");
  }

  console.log("📤 Insertando árbol completo como un solo documento...");
  await Product.create(jsonData); // Inserta { products: {...} }

  await mongoose.disconnect();
  console.log("✅ Seed completado correctamente");
  console.log("🌳 Árbol de productos cargado con éxito 🎯");
  process.exit(0);
} catch (err) {
  console.error("❌ Error durante el seed:", err);
  process.exit(1);
}
