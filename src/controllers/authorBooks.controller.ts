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


   

}

export let authorBooksController = new AuthorBooksController();