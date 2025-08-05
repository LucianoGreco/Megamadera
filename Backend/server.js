const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 🧪 Ruta de prueba - debe ir antes que el router de productos
app.get("/api/ping", (req, res) => {
  res.json({ ok: true, message: "Servidor activo 🔥" });
});

// 🖼️ Rutas de imágenes estáticas
[
  "revestimientos",
  "melaminas",
  "herrajes",
  "vinilos",
  "muebles"
].forEach(dir => {
  app.use(
    `/products/${dir}`,
    express.static(path.join(__dirname, `products/${dir}`))
  );
});

// 📦 Rutas de la API
const productsRoutes = require("./routes/products.routes");
app.use("/api", productsRoutes);

// 🔌 Conexión a Mongo y arranque seguro
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI no está definido.");
  process.exit(1);
}

(async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ MongoDB conectado");

    app.listen(PORT, () => {
      console.log(`✅ Servidor corriendo en puerto ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error al conectar a Mongo:", err.message);
    process.exit(1);
  }
})();

// 💥 Errores generales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});


const path = require("path");

const distPath = path.join(__dirname, "../Frontend/dist");
app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});


// ❌ Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});
