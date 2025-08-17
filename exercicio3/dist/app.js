"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Instâncias
const user = {
    id: 1,
    name: "Pedro",
    email: "pedro@gmail.com",
    isActive: true
};
const product = {
    id: 1,
    name: "Monitor",
    price: 1200,
    inStock: true,
    categories: ["Informática", "Periféricos"]
};
const admin = {
    id: 2,
    name: "Camila",
    email: "camila@gmail.com",
    isActive: true,
    role: "admin"
};
// Funções
function mostrarUsuario(u) {
    console.log(`ID: ${u.id}, Nome: ${u.name}, Email: ${u.email}, Ativo: ${u.isActive ? 'Sim' : 'Não'}`);
}
function mostrarProduto(p) {
    console.log(`ID: ${p.id}, Nome: ${p.name}, Preço: ${p.price}, Em estoque: ${p.inStock ? 'Sim' : 'Não'}`);
}
mostrarUsuario(user);
mostrarProduto(product);
//# sourceMappingURL=app.js.map