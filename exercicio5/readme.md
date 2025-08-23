# API REST Básica com Express e TypeScript 🚀

Este projeto é uma API simples criada com **Express** e **TypeScript**, que gerencia usuários em memória (sem banco de dados).  


## ⚙️ Tecnologias usadas
- Node.js
- Express
- TypeScript
- ts-node + nodemon (para desenvolvimento)


## 📂 Estrutura do projeto

exercicio5/

├── src/   
│ ├── server.ts # Código principal do servidor  
├── dist/ # Código compilado (gerado pelo TypeScript)     
├── package.jso  
├── tsconfig.json  
└── readme.md


---

## ▶️ Como rodar o projeto

### 1) Instalar dependências

``` bash 
npm install  
npm install typescript ts-node nodemon @types/node
npm install express @types/express
```

### 2) Rodar em modo desenvolvimento
``` bash
npm run dev
```


O servidor iniciará em:  
👉 http://localhost:3000


### 3) Rodar em produção
``` bash
npm run build
npm start
```


## 📌 Rotas disponíveis
GET /users - Retorna todos os usuários.

GET /users/:id - Retorna um usuário específico pelo ID.

POST /users - Adiciona um novo usuário.  

PUT /users/:id - Atualiza um usuário existente.

DELETE /users/:id - Remove um usuário.