"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cep_promise_1 = __importDefault(require("cep-promise"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/valida-cep/:cep', async (req, res) => {
    await (0, cep_promise_1.default)(req.params.cep)
        .then((data) => {
        return res.status(200).json({ valido: true, dados: data });
    })
        .catch((error) => {
        console.log(error);
        return res.status(400).json({ valido: false, dados: error });
    });
});
// inicia o servidor
// Boa prática: sempre ser o último comando no arquivo principal, neste exemplo no arquivo server.ts
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
//# sourceMappingURL=server.js.map