"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplos
const user = {
    id: 1,
    name: "João",
    email: "joao@gmail.com",
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
    name: "Maria",
    email: "maria@gmail.com",
    isActive: true,
    role: "admin"
};
// Funções
function mostrarUsuario(u) {
    console.log(`ID: ${u.id}, Nome: ${u.name}, Email: ${u.email}, Ativo: ${u.isActive}`);
}
function mostrarProduto(p) {
    console.log(`ID: ${p.id}, Nome: ${p.name}, Preço: ${p.price}, Em estoque: ${p.inStock}`);
}
mostrarUsuario(user);
mostrarProduto(product);
//# sourceMappingURL=interfaces.js.map