import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';


class AuthController {

    public async login (req: Request, res: Response) {

        const token = jwt.sign(

            {
                email: req.body.email,
                password: req.body.password
            }, 
            config.jwtsecret,
            { 
                expiresIn: "1h"
            }

        );

        res.send(token);
    }

}

export let authController = new AuthController();