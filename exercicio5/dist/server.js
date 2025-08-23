"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Configura um servidor Express básico que roda na porta 3000
const app = (0, express_1.default)();
const port = 3000;
// Configuração para receber dados via JSON
app.use(express_1.default.json());
;
let users = [
    { id: 1, name: "Noah Sebastian", email: "noah@gmail.com", isActive: false },
    { id: 2, name: "Taylor", email: "taylor@gmail.com", isActive: true },
];
// GET /users -> retorna todos os usuários
app.get("/users", (req, res) => {
    return res.json(users);
});
// Função encontrar por id
function getById(items, id) {
    return items.find(item => item.id === id);
}
// GET /users/:id -> retorna um usuário específico pelo ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = getById(users, Number(id));
    if (user) {
        return res.json(user);
    }
    return res.send('Usuário não encontrado!');
});
// POST /users -> adiciona um novo usuário
// O corpo da requisição deve ser validado para garantir que corresponde à interface IUser
function validaUsuario(user) {
    return typeof user.id === 'number' &&
        typeof user.name === 'string' &&
        typeof user.email === 'string' &&
        typeof user.isActive === 'boolean';
}
app.post('/users', (req, res) => {
    const dados = req.body;
    if (validaUsuario(dados)) {
        users.push(dados);
        return res.send('Usuário cadastrado com sucesso!');
    }
    return res.send('Não foi possível adicionar usuário!');
});
// PUT /users/:id -> atualiza TUDO de um usuário 
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    if (!validaUsuario(dados)) {
        return res.send('Dados inválidos para atualização!');
    }
    const indexUser = users.findIndex(user => user.id === Number(id));
    if (indexUser !== -1) {
        users[indexUser] = dados;
        return res.send('Usuário atualizado!');
    }
    return res.send('Usuário não encontrado!');
});
// DELETE /users/:id -> apaga o usuário
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const indexUser = users.findIndex(user => user.id === Number(id));
    if (indexUser !== -1) {
        users.splice(indexUser, 1);
        return res.send('Usuário excluído!');
    }
    return res.send('Usuário não encontrado!');
});
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});
//# sourceMappingURL=server.js.map