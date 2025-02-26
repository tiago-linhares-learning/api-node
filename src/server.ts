import express, { Request, Response } from "express";

const app = express();
const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "aplicação de teste act digital esta funcionando!" });
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("API Funcionando");
});

// Inicia o servidor apenas se este módulo for executado diretamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

export default app;
