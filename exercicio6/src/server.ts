import express, { Request, Response } from "express";
import validationBr from "validation-br";


const app = express();
const port = 3000;

// rota para validar CPF
app.get("/valida-cpf/:cpf", (req: Request<{ cpf: string | number }>, res: Response) => {
  const { cpf } = req.params;

  if (validationBr.isCPF(cpf)) {
    return res.json({ valido:true, mensagem: "CPF válido" });
  } else {
    return res.json({ valido:false, mensagem: "CPF inválido" });
  }
});

// rota para validar CNPJ
app.get("/valida-cnpj/:cnpj", (req: Request<{ cnpj: string }>, res: Response) => {
  const { cnpj } = req.params;

  if (validationBr.isCNPJ(cnpj)) {
    return res.json({ valido:true, mensagem: "CNPJ válido" });
  } else {
    return res.json({ valido: false, mensagem: "CNPJ inválido" });
  }
});

// rota para validar CNH
app.get("/valida-cnh/:cnh", (req: Request<{ cnh: string }>, res: Response) => {
  const { cnh } = req.params;

  if (validationBr.isCNH(cnh)) {
    return res.json({ valido: true, mensagem: "CNH válida" });
  } else {
    return res.json({ valido:false, mensagem: "CNH inválida" });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log("API rodando na porta " + port);
});
