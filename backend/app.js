import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middleware/erros.js";
import clinicRoutes from "./routes/clinicRoutes.js";
import veterinaryRoutes from "./routes/veterinaryRoutes.js";
import vetRoutes from "./routes/vet.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";

const app = express();
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

// CORS - Permitir todas as origens em desenvolvimento
const corsOptions = {
  origin: function (origin, callback) {
    // Em desenvolvimento, permitir todas as origens
    callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

// Middleware para log de requisições
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de health check
app.get("/", (req, res) => {
  res.json({ 
    message: "API está funcionando!",
    timestamp: new Date().toISOString()
  });
});

// Rota de teste da API
app.get("/api/v1/test", (req, res) => {
  res.json({ 
    message: "API v1 está funcionando!",
    timestamp: new Date().toISOString()
  });
});

// Rotas de autenticação
app.use("/api/v1", authRoutes);

// Outras rotas
app.use("/api/v1/chatbot", chatbotRoutes);
app.use("/api/v1", vetRoutes);

const hasPostgres = !!process.env.DATABASE_URL;
if (hasPostgres) {
  app.use("/api/v1/clinics", clinicRoutes);
  app.use("/api/v1/veterinaries", veterinaryRoutes);
} else {
  console.warn(
    "DATABASE_URL não definido. Rotas de clínicas e veterinários desabilitadas."
  );
}

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.log(`ERRO não tratado: ${err}`);
  console.log("Desligando servidor devido Exceção não tratada");
  server.close(() => {
    process.exit(1);
  });
});

process.on("unhandledRejection", (err) => {
  console.log(`ERRO: ${err}`);
  console.log("Desligando servidor devido Rejeição de Promessa não tratadas");
  server.close(() => {
    process.exit(1);
  });
});
