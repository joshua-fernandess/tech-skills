// Interfaces
interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

interface IProduct {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    categories: string[];
}

// Type Alias
type UserRole = 'admin' | 'user';

// Interface estendendo IUser
interface IAdminUser extends IUser {
    role: UserRole;
}

// Instâncias
const user: IUser = {
    id: 1,
    name: "Pedro",
    email: "pedro@gmail.com",
    isActive: true
};

const product: IProduct = {
    id: 1,
    name: "Monitor",
    price: 1200,
    inStock: true,
    categories: ["Informática", "Periféricos"]
};

const admin: IAdminUser = {
    id: 2,
    name: "Camila",
    email: "camila@gmail.com",
    isActive: true,
    role: "admin"
};

// Funções
function mostrarUsuario(u: IUser): void {
    console.log(`ID: ${u.id}, Nome: ${u.name}, Email: ${u.email}, Ativo: ${u.isActive ? 'Sim' : 'Não'}`);
}

function mostrarProduto(p: IProduct): void {
    console.log(`ID: ${p.id}, Nome: ${p.name}, Preço: ${p.price}, Em estoque: ${p.inStock ? 'Sim' : 'Não'}`);
}

mostrarUsuario(user);
mostrarProduto(product);
