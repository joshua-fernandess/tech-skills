// Variáveis
let nomeProduto: string = "Labubu";
let precoProduto: number = 699.90;
let emEstoque: boolean = true;

// Array de Strings
let categorias: string[] = ["Brinquedos", "Presentes"];

// Tupla com coordenadas
let coordenadas: [number, number] = [-23.5505, -46.6333];

//Enum para status do pedido
enum StatusPedido {
    Pendente,
    Processando,
    Entregue,
    Cancelado
}

let status: StatusPedido = StatusPedido.Pendente;

// Função formatada
function formatarProduto(nome: string, preco: number): string {
    return `O produto ${nome} custa R$ ${preco.toFixed(2)}`;
}

console.log(formatarProduto(nomeProduto, precoProduto));
console.log("Status:", StatusPedido[status]);
