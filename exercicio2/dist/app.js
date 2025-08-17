"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variáveis
let nomeProduto = "Labubu";
let precoProduto = 699.90;
let emEstoque = true;
// Array de Strings
let categorias = ["Brinquedos", "Presentes"];
// Tupla com coordenadas
let coordenadas = [-23.5505, -46.6333];
//Enum para status do pedido
var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Pendente"] = 0] = "Pendente";
    StatusPedido[StatusPedido["Processando"] = 1] = "Processando";
    StatusPedido[StatusPedido["Entregue"] = 2] = "Entregue";
    StatusPedido[StatusPedido["Cancelado"] = 3] = "Cancelado";
})(StatusPedido || (StatusPedido = {}));
let status = StatusPedido.Pendente;
// Função formatada
function formatarProduto(nome, preco) {
    return `O produto ${nome} custa R$ ${preco.toFixed(2)}`;
}
console.log(formatarProduto(nomeProduto, precoProduto));
console.log("Status:", StatusPedido[status]);
//# sourceMappingURL=app.js.map