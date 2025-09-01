# Exercício 6 - API utilizando o pacote validation-br

API simples feita com **Express + TypeScript**, utilizando a biblioteca [validation-br](https://www.npmjs.com/package/validation-br) para validar documentos brasileiros.


## 🚀 Como rodar o projeto

### 1) Instalar as dependências  
``` bash
npm install
```   

### 2) Instalar o pacote de validação
``` bash 
npm install validation-br
``` 
### 3) Executar
``` bash
npm run build
npm start
```
O servidor vai iniciar em:  
👉 http://localhost:3000

## 📌 Rotas disponíveis
✅ Validar CPF
GET /valida-cpf/:cpf

✅ Validar CNPJ
GET /valida-cnpj/:cnpj


✅ Validar CNH
GET /valida-cnh/:cnh


## 🧪 Testando
Você pode usar:

Postman

Insomnia

Navegador (para GET simples)

Ou o curl no terminal, por exemplo:

``` bash
curl http://localhost:3000/valida-cpf/39053344705`
``` 

## 📖 Tecnologias usadas:
Node.js

Express

TypeScript

validation-br