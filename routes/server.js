const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "tu-connection-string-aqui", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error conectando a MongoDB:", err));

// Importar rutas
const estudiantesRoutes = require("./routes/estudiantes");

// Usar rutas
app.use("/api/estudiantes", estudiantesRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "API de Estudiantes funcionando 🚀" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
