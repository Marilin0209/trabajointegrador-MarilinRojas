// /config/db.js
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
    process.exit(1); //DEtiene el servidor si hay un error
  }
};
module.exports = connectDB;
