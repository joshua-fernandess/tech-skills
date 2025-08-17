# Exercício 4 – Genéricos no TypeScript

## 📌 Objetivo
Criar funções genéricas para trabalhar com diferentes tipos de dados.


## 📂 Estrutura
src/

generics.ts

interfaces.ts


## ⚙️ Funções criadas
1. **`getData<T>`**
   - Retorna o mesmo array recebido, mantendo o tipo.
2. **`getById<T extends { id: number }>`**
   - Busca um item pelo `id` em um array.

---

## ▶️ Executando
```bash
npm run start:dev src/generics.ts