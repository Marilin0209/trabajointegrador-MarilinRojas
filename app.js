// app.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const estudiantesRoutes = require("./routes/estudiantes");

dotenv.config(); // Cargar variables de entorno
connectDB(); // Conectar a la base de datos

const app = express(); // Crear la aplicación de Express
app.use(express.json()); // Middleware para leer JSON

// Ruta base
app.get("/", (req, res) => {
  res.send("API de Estudiantes funcionando correctamente ✅");
});

// Rutas de estudiantes
app.use("/api/estudiantes", estudiantesRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
