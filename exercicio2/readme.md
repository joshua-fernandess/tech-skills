# Exercício 2 – Tipos Primitivos e Estruturados no TypeScript
## 📌 Objetivo
Declarar variáveis com tipos primitivos e usar `enum`, `array`, `tupla` e funções tipadas.



## 📂 Estrutura
src/
app.ts



## ⚙️ Passos
1. Criar variáveis com tipos:
   - `string` – Nome de produto
   - `number` – Preço
   - `boolean` – Estoque
   - `string[]` – Categorias
   - `[number, number]` – Coordenadas
   - `enum` – Status do pedido

2. Criar função para formatar nome e preço:
```ts
function formatarProduto(nome: string, preco: number): string {
    return `O produto ${nome} custa R$ ${preco.toFixed(2)}`;
}
```
▶️ Executando
```
npm run start:dev src/app.ts
