// app.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const estudiantesRoutes = require("./routes/estudiantes");

dotenv.config(); // Cargar variables de entorno
connectDB(); // Conectar a la base de datos

const app = express(); // Crear la aplicación de Express
app.use(express.json()); // Middleware para leer JSON

// Rutas
app.get("/", (req, res) => {
  res.send("API de Estudiantes");
});
app.use("/api/estudiantes", estudiantesRoutes); // http://localhost:3000/api/estudiantes

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
