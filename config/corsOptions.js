//config/corsOptions.js

const corsOptions = {
  origin: ["http://localhost:5173", "https://app-estudiantes.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = corsOptions;
