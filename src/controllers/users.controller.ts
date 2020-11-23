import { Request, Response } from 'express';
import { Users } from './../models/users';

class UsersControllers {

    public async index (req: Request, res: Response) {

        try{
            const users = await Users.findAll({ raw: true })
            res.send(users)
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }

    public async individual (req: Request, res: Response) {

        const path = req.path
        res.send(path)

    }
 
    public async create (req: Request, res: Response) {

        try{

        const params = req.body;
        const result = await Users.create(params);
        res.json(result);

        }
        catch (error) {

            res.json(error)

        }
    }

    public async update (req: Request, res: Response) {

        const result = await Users.update(
            {

                name: req.body.firstname,
                lastname: req.body.lastname,

            },
            { where: { id: req.params.id }
        });
    }

    public async destroy (req: Request, res: Response) {

        try{

            const result = await Users.destroy({
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

export let usersController = new UsersControllers();