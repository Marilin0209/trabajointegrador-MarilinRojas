// /routes/estudiantes.js
const express = require("express");
const router = express.Router();
const Estudiante = require("../models/estudiantes"); // Asegurate de que exista

// GET - Obtener todos los estudiantes (con filtro opcional)
router.get("/", async (req, res) => {
  try {
    const { curso } = req.query;

    //Uso in si se encuentra el paràmetro 'Curso'
    const filtro = curso ? { cursos: { $in: [curso] } } : {};
    const estudiantes = await Estudiante.find(filtro);

    /*vAqui ---const estudiantes = cursos

      ? await Estudiante.find({ cursos })
      : await Estudiante.find(); 
      */

    res.json(estudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener estudiantes" });
  }
});

// POST - Crear estudiante
router.post("/", async (req, res) => {
  try {
    const nuevoEstudiante = new Estudiante(req.body);
    const nuevoEstudianteGuardado = await nuevoEstudiante.save();
    res.status(201).json(nuevoEstudianteGuardado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al crear estudiante" });
  }
});

// PUT - Actualizar estudiante por ID
router.put("/:id", async (req, res) => {
  try {
    const estudianteActualizado = await Estudiante.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!estudianteActualizado)
      return res.status(404).json({ message: "Estudiante no encontrado" });
    res.json(estudianteActualizado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al actualizar estudiante" });
  }
});

// DELETE - Eliminar estudiante por ID
router.delete("/:id", async (req, res) => {
  try {
    const estudianteEliminado = await Estudiante.findByIdAndDelete(
      req.params.id
    );
    if (!estudianteEliminado)
      return res.status(404).json({ message: "Estudiante no encontrado" });
    res.json({ message: "Estudiante eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al eliminar estudiante" });
  }
});

module.exports = router;
