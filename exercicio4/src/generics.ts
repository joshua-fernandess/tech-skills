import { IUser, IProduct } from "./interfaces";

// Função genérica simples
function getData<T>(items: T[]): T[] {
    return items;
}

const nomes = getData<string>(["João", "Maria"]);
const numeros = getData<number>([1, 2, 3]);

console.log("Nomes:", getData(nomes));
console.log("Números:", getData(numeros));

// Função genérica com restrição
function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}

const usuarios: IUser[] = [
    { id: 1, name: "João", email: "joao@email.com", isActive: true },
    { id: 2, name: "Ana", email: "ana@email.com", isActive: false }
];

const produtos: IProduct[] = [
    { id: 1, name: "Teclado", price: 200, inStock: true, categories: ["Periféricos"] },
    { id: 2, name: "Mouse", price: 100, inStock: true, categories: ["Periféricos"] }
];

console.log(getById(usuarios, 2));
console.log(getById(produtos, 1));
