import express, {Request, Response } from "express";

// Configura um servidor Express básico que roda na porta 3000
const app = express();
const port: number = 3000;

// Configuração para receber dados via JSON
app.use(express.json());

// Banco em memória (array de usuários)
interface IUser{
    id: number,
    name: string,
    email: string,
    isActive: boolean
};

let users: IUser[] = [
    { id:1, name:"Noah Sebastian", email:"noah@gmail.com", isActive:false },
    { id:2, name:"Taylor", email:"taylor@gmail.com", isActive:true },
]

// GET /users -> retorna todos os usuários
app.get( "/users", (req: Request, res: Response) :  Response => {
      return res.json(users);
    } );
  
  // Função encontrar por id
  function getById<T extends { id: number }>(items: T[], id: number): T | undefined
  {
      return items.find(item => item.id === id);
  }
  
  // GET /users/:id -> retorna um usuário específico pelo ID
  app.get('/users/:id', (req: Request<{ id: number }>, res: Response): Response => {
      const { id } = req.params;
      
      const user: IUser | undefined = getById<IUser>(users, Number(id));
  
      if (user) {
          return res.json(user);
      }
  
      return res.send('Usuário não encontrado!');
  });
  
  // POST /users -> adiciona um novo usuário
  // O corpo da requisição deve ser validado para garantir que corresponde à interface IUser
  function validaUsuario(user: any): user is IUser
  {
      return typeof user.id === 'number' &&
             typeof user.name === 'string' &&
             typeof user.email === 'string' &&
             typeof user.isActive === 'boolean'
  }
  
  app.post('/users', (req: Request, res:Response): Response => {
      const dados: any = req.body;
      if (validaUsuario(dados)) {
          users.push(dados);
          return res.send('Usuário cadastrado com sucesso!');
      }
  
      return res.send('Não foi possível adicionar usuário!');
  });
  
  // PUT /users/:id -> atualiza TUDO de um usuário 
  app.put('/users/:id', (req: Request<{ id: number }>, res: Response): Response => {
    const { id } = req.params;
    const dados = req.body;

    if (!validaUsuario(dados)) {
        return res.send('Dados inválidos para atualização!');
    }

    const indexUser: number = users.findIndex(user => user.id === Number(id));

    if (indexUser !== -1) {
        users[indexUser] = dados;
        return res.send('Usuário atualizado!');
    }

    return res.send('Usuário não encontrado!');
});
  
  // DELETE /users/:id -> apaga o usuário
  app.delete('/users/:id', (req: Request<{ id: number }>, res: Response): Response => {
    const { id } = req.params;

    const indexUser: number = users.findIndex(user => user.id === Number(id));

    if (indexUser !== -1) {
        users.splice(indexUser, 1);
        return res.send('Usuário excluído!');
    }

    return res.send('Usuário não encontrado!');
});
  
  app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
  });