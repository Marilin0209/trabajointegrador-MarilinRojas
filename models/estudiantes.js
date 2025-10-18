// /models/Estudiantes.js
const mongoose = require("mongoose");

const estudianteSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    mail: { type: String, required: true },
    cursos: { type: Array, required: true },
  },
  { timestamps: true } //Agrega createdAt y updatedAT automaticamente
);

module.exports = mongoose.model("estudiantes", estudianteSchema);
