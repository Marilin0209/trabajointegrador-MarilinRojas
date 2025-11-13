<<<<<<< HEAD
/*/ app.js
=======
// app.js
>>>>>>> fc0868f (Subiendo Trabajo Integrador)
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
const corsOptions = require("./config/corsOptions"); // 2. Importar las opciones de CORS
const app = express();
dotenv.config();
connectDB();

//Configuración de cors
app.use(cors(corsOptions)); // 3. Usar el middleware de CORS con las opciones definidas
app.use(express.json());
//ruta base
app.get("/", (req, res) => {
  res.send("API de Estudiantes funcionando correctamente ✅");
});

app.use("/api/estudiantes", estudiantesRoutes);

//Iniciamos el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);

  console.log(`CORS configurado para http://localhost:5173`); // Confirmación de configuración de CORS
});
