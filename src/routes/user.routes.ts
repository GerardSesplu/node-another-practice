import { Router } from 'express';
import { usersController } from './../controllers/users.controller';

class UsersRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/', usersController.index);

        this.router.get('/:id', usersController.individual)

        this.router.post('/:id', usersController.create);

        this.router.put('/:id', usersController.update);

        this.router.delete('/:id', usersController.destroy)


    }
}

const userRoutes = new UsersRoutes;

export default userRoutes;




