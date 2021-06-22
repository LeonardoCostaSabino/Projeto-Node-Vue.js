import {CommonRoutesConfig} from '../common.routes.config';
import express from 'express';

export class CountriesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CountriesRoutes');
    }

    configureRoutes() {

        this.app.route(`/countries`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of users`);
            });

        this.app.route(`/countries/:region`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of users ${req.params.region}`);
            });

        return this.app;
    }

}