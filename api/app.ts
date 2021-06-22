import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import {CommonRoutesConfig} from './Routes/common.routes.config';
import {CountriesRoutes} from './Routes/Countries/countries.routes.config';
import debug from 'debug';

const app: express.Application  = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

// Preparando configuração do Winston
// Ele irá captar toda requisição http realizada na aplicação
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // Quando não estiver debungando a aplicação
}

// Inicializando a biblioteca de log
app.use(expressWinston.logger(loggerOptions));

// Puxando as informações de rotas para aplicação principal
routes.push(new CountriesRoutes(app));

// Rota padrão para inicialização da aplicação
const runningMessage = `Servidor iniciado em http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Rotas configuradas para ${route.getName()}`);
    });
    console.log(runningMessage);
});