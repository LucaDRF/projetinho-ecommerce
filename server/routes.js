import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.send('olá mundo');
})

export default routes;