// /models/Estudiantes.js
const mongoose = require("mongoose");

const estudianteSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    cursos: [
      {
        type: String,
        required: true,
        enum: ["Matemática", "Historia", "Ciencias", "Arte"],
      },
    ],
  },

  { timestamps: true } //Agrega createdAt y updatedAT automaticamente
);

module.exports = mongoose.model("estudiantes", estudianteSchema);
