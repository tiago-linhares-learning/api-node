"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({ message: "API funcionando!" });
});
app.get("/health", (req, res) => {
    res.status(200).send("aplicação de teste act digital esta funcionando");
});
// Inicia o servidor apenas se este módulo for executado diretamente
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}
exports.default = app;
