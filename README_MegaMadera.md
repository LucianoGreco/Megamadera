
# MegaMadera 🪵 – Deploy Fullstack con Render

Este proyecto contiene el frontend y backend unificados de la app MegaMadera, diseñados para ser deployeados juntos desde Render.

---

## 📁 Estructura del Proyecto

```
MegaMadera/
├── Backend/               # API en Express + conexión Mongo
│   ├── index.js
│   ├── routes/
│   ├── products/          # Imágenes servidas por Express
│   ├── .env.example       # Variables necesarias (sin valores)
│   └── ...
├── Frontend/              # Proyecto Vite (Vue o React)
│   ├── src/
│   ├── vite.config.js
│   └── ...
├── render.yaml            # Configuración de deploy Render
└── .gitignore
```

---

## ⚙️ Variables de entorno (crear en el panel de Render)

En `Backend/.env.example`:

```
PORT=4000
MONGO_URI=TU_MONGO_URI
```

> Solo necesitás definir `MONGO_URI` en Render. `PORT` lo maneja Render internamente.

---

## 🚀 Deploy en Render

1. Subí el proyecto completo a un nuevo repo de GitHub
2. En Render:
   - Login → New Web Service
   - Seleccioná el repo
   - Render detectará automáticamente el `render.yaml`
3. Configurá la variable `MONGO_URI` en el panel de Environment
4. Esperá a que termine el deploy (1 a 3 minutos)

---

## 🧠 Qué hace `render.yaml`

```yaml
services:
  - type: web
    name: mega-madera
    env: node
    buildCommand: |
      cd Frontend && npm install && npm run build &&
      cd ../Backend && npm install
    startCommand: node index.js
    envVars:
      - key: MONGO_URI
        value: TU_MONGO_URI
    autoDeploy: true
    rootDir: Backend
```

Esto:
- Construye el frontend (`npm run build`)
- Instala dependencias del backend
- Sirve el frontend estático desde Express
- Expone las rutas `/api` y `/products`

---

## 🧪 Pruebas locales (opcional)

```bash
# 1. Build del frontend
cd Frontend
npm install
npm run build

# 2. Levantar backend (sirviendo frontend)
cd ../Backend
npm install
node index.js
```

Luego entrá a:
- http://localhost:4000/ → frontend
- http://localhost:4000/api/ping → backend
- http://localhost:4000/products/... → imágenes

---

## ✅ Resultado esperado en producción

- `https://mega-madera.onrender.com` → tu frontend completo
- `https://mega-madera.onrender.com/api` → tu backend API
- `https://mega-madera.onrender.com/products/` → imágenes servidas

---

## 🧹 Notas

- `.env` no debe subirse nunca, usá `.env.example`
- `node_modules` y `dist` están ignorados en `.gitignore`
- Render es gratuito pero puede dormir el servicio si no hay tráfico

---

## 🪵 ¡Listo para la madera digital!

Cualquier duda, revisar los logs de Render o revisar el deploy desde GitHub. Todo está conectado por `fetch` en el frontend a la API `/api`.

---
