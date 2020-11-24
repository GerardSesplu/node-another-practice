import { Request, Response } from 'express';
import { Books } from './../models/books';

class BooksControllers {

    public async index (req: Request, res: Response) {

        try{
            const books = await Books.findAll({ raw: true })
            res.send(books)
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }

    public async create (req: Request, res: Response) {

        try{

        const params = req.body;
        const result = await Books.create(params);
        res.json(result);

        }
        catch (error) {

            res.json(error)

        }
    }

    public async individual (req: Request, res: Response) {

        try{

            const book = await Books.findByPk(req.params.id, { raw: true });
            res.send(book)

        }
        catch (error) {

            res.send(error)
            
        }

    }

    public async update (req: Request, res: Response) {

        try{

            const book = await Books.update(
                {

                    titulo: req.body.titulo,
                    autor: req.body.autor,
                    genero: req.body.genero

                },
                { where: { id: req.params.id }
            });
            res.json(book)
        }
        catch (error){

            res.send(error);

        }
    }

    public async destroy (req: Request, res: Response) {

        try{

            const result = await Books.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send(result);

        }
        catch(error){

            res.json(error);

        }
        

        

    }
   

}

export let booksController = new BooksControllers();