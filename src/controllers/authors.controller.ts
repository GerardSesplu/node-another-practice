import { Request, Response } from 'express';
import { Authors } from './../models/authors';

class AuthorsControllers {

    public async index (req: Request, res: Response) {

        try{
            const authors = await Authors.findAll({ raw: true })
            res.send(authors)
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }

    public async create (req: Request, res: Response) {

        try{

        const params = req.body;
        const result = await Authors.create(params);
        res.json(result);

        }
        catch (error) {

            res.json(error)

        }
    }

    public async individual (req: Request, res: Response) {

        try{

            const author = await Authors.findByPk(req.params.id, { raw: true });
            res.send(author)

        }
        catch (error) {

            res.send(error)
            
        }

    }

    public async update (req: Request, res: Response) {

        try{

            const author = await Authors.update(
                {
                    
                    authorname: req.body.authorname
                    
                },
                { where: { id: req.params.id }
            });
            const newAuthor = await Authors.findByPk(req.params.id, { raw: true });
            res.send(newAuthor);
        }
        catch (error){

            res.send(error);

        }
    }

    public async destroy (req: Request, res: Response) {

        try{

            const result = await Authors.destroy({
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

export let authorsController = new AuthorsControllers();