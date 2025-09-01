# Exercício 10 - Middlewares com tipagem

Este projeto é uma API simples construída com **Node.js**, **Express** e **TypeScript**.   Ela gerencia um banco de usuários em memória e possui um **middleware de logging** que exibe o método, a URL e o timestamp de cada requisição.


## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)



## ⚙️ Instalação e Execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
   cd nome-do-repo

2. Instale as dependências:
    ``` bash
    npm install
    ```
3. Execute o servidor em modo desenvolvimento:
    ``` bash
    npm run dev  
    ```

      Ou compile e execute:
   ```
    npm run build
    npm start
      ```

O servidor rodará em:

👉 http://localhost:3000

## 📜 Middleware de Logging

Cada requisição gera um log no console com:

- Método HTTP

- URL

- Timestamp

Exemplo:

[2025-09-01T20:45:00.123Z] GET /users

## Rotas 
### 🛠️ Endpoints

### 🔹 Listar todos os usuários 
``` http  
GET /users
``` 

### 🔹 Buscar usuário por ID  
``` http 
GET /users/:id
``` 

### 🔹 Criar novo usuário  
``` http 
POST /users  
Content-Type: application/json

{
  "id": 3,  
  "name": "Novo Usuário",  
  "email": "novo@email.com",  
  "isActive": true  
}
``` 

### 🔹 Atualizar usuário  
``` http 
PUT /users/:id  
Content-Type: application/json

{
  "id": 3,  
  "name": "Usuário Atualizado",  
  "email": "atualizado@email.com",  
  "isActive": false  
}
```

### 🔹 Deletar usuário  
``` http 
DELETE /users/:id
