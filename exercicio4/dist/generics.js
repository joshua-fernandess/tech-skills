"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função genérica simples
function getData(items) {
    return items;
}
const nomes = getData(["João", "Maria"]);
const numeros = getData([1, 2, 3]);
console.log("Nomes:", getData(nomes));
console.log("Números:", getData(numeros));
// Função genérica com restrição
function getById(items, id) {
    return items.find(item => item.id === id);
}
const usuarios = [
    { id: 1, name: "João", email: "joao@email.com", isActive: true },
    { id: 2, name: "Ana", email: "ana@email.com", isActive: false }
];
const produtos = [
    { id: 1, name: "Teclado", price: 200, inStock: true, categories: ["Periféricos"] },
    { id: 2, name: "Mouse", price: 100, inStock: true, categories: ["Periféricos"] }
];
console.log(getById(usuarios, 2));
console.log(getById(produtos, 1));
//# sourceMappingURL=generics.js.map