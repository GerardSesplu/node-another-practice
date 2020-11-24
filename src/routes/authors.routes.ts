import { Router } from 'express';
import { authorsController } from './../controllers/authors.controller';
import { authorBooksController } from '../controllers/authorBooks.controller';

class AuthorsRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/', authorsController.index);

        this.router.get('/:id', authorsController.individual)

        this.router.post('/', authorsController.create);

        this.router.put('/:id', authorsController.update);

        this.router.delete('/:id', authorsController.destroy)

        this.router.get('/books', authorBooksController.index);
    }
}

const authorsRoutes = new AuthorsRoutes;

export default authorsRoutes;
