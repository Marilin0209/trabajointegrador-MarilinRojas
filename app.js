/*/ app.js
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
*/
// app.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // <--- Agregar esto
const connectDB = require("./config/db");
const estudiantesRoutes = require("./routes/estudiantes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// 🔓 Habilitar CORS
app.use(
  cors({
    origin: "*", // o mejor: "https://trabajointegrador-marilin-rojas-rn2vw94z3.vercel.app//" cuando ya tengas el dominio final
  })
);

app.get("/", (req, res) => {
  res.send("API de Estudiantes funcionando correctamente ✅");
});

app.use("/api/estudiantes", estudiantesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
