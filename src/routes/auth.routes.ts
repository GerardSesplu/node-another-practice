import { Router } from 'express';
import { authController } from '../controllers/auth.controller';

class AuthRoutes {

    public router: Router = Router();

    constructor(){

        this.router.post('/login', authController.login);

    }
}

const authRoutes = new AuthRoutes;

export default authRoutes
