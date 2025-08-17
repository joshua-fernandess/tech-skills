# Exercício 1 – Configuração do Ambiente e Hello World com TypeScript

## 📌 Objetivo
Criar um ambiente Node.js com TypeScript e executar o primeiro código.

## 📂 Estrutura do Projeto
src/
app.ts

package.json

tsconfig.json

## ⚙️ Passos

1. **Inicializar projeto e instalar dependências**
```bash
npm init -y
npm install typescript ts-node nodemon @types/node
npx tsc --init
```

2. **Configurar tsconfig.json**
``` bash
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true
  }
}
```


3. **Criar arquivo src/app.ts**

``` ts
console.log("Hello, TypeScript!");
```

5. **Scripts no package.json**
```bash
"scripts": {
  "start:dev": "nodemon src/app.ts",
  "build": "tsc",
  "start": "node dist/app.js"
}
```

▶️ Executando

Modo desenvolvimento
```
npm run start:dev
```

Modo produção
```bash
npm run build

npm start

