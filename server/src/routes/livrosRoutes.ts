import { Router } from 'express';
import livrosController from '../controllers/livrosController';

class LivrosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', livrosController.list);
        this.router.get('/:id', livrosController.getOne);
        this.router.post('/', livrosController.create);
        this.router.put('/:id', livrosController.update);
        this.router.delete('/:id', livrosController.delete);
    }
    
}

const livrosRoutes = new LivrosRoutes();
export default livrosRoutes.router;