import { Request, Response } from 'express';
import { Authors } from './../models/authors';
import { Books } from './../models/books';
import { AuthorsBooks } from './../models/author-books';

class AuthorBooksController {

    public async index (req: Request, res: Response) {

        try{

            res.send('OK')

        }
        catch (error) {

            res.send(error)
            console.log('hola');
               
        }
    }

    public async create (req: Request, res: Response){

        try{

            const related = {
                authorId: req.params.id,
                bookId: req.body.bookId
            }
            const authorId = req.body.authorId;
            const bookId = req.body.bookId;

            

            const result = await AuthorsBooks.create(related);

            res.send(result);

        }
        catch (error) {

            res.send(error);
        }

    }



   

}

export let authorBooksController = new AuthorBooksController();