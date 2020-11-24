import { Router } from 'express';
import { booksController } from './../controllers/books.controller';

class BooksRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/', booksController.index);

        this.router.post('/', booksController.create);

        this.router.get('/:id', booksController.individual);

        this.router.put('/:id', booksController.update);

        this.router.delete('/:id', booksController.destroy)


    }
}

const booksRoutes = new BooksRoutes;

export default booksRoutes;