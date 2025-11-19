export default (err, req, res, next) => {
  let error = {
    statusCode: err.statusCode || 500,
    message: err?.message || "Erro interno do servidor",
  };

  // Log do erro para debug
  console.error("Error:", {
    statusCode: error.statusCode,
    message: error.message,
    path: req.path,
    method: req.method,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });

  if (err.code === "P2025") {
    error.statusCode = 404;
    error.message = "Registro não encontrado";
  }

  if (err.name === "ValidationError") {
    error.statusCode = 400;
    error.message = Object.values(err.errors).map((e) => e.message).join(", ");
  }

  if (err.code === 11000) {
    error.statusCode = 400;
    error.message = "Registro duplicado. Este valor já existe.";
  }

  // Se for erro de MongoDB
  if (err.name === "MongoServerError") {
    if (err.code === 11000) {
      error.statusCode = 400;
      error.message = "Este email já está cadastrado.";
    }
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};
