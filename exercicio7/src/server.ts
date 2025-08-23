import express, { Express, Request, Response } from 'express';
import cep from 'cep-promise';

const app: Express = express();
const port: number = 3000;


app.get('/valida-cep/:cep', async (req: Request<{ cep: string | number }>, res: Response) => {
    await cep(req.params.cep)
        .then((data: any) => {
            return res.status(200).json({ valido: true, dados: data });
        })
        .catch((error: any) => {
            console.log(error);
            return res.status(400).json({ valido: false, dados: error});
        });
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});