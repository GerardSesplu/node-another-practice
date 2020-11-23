import express from 'express';
import userRoutes from './routes/user.routes';


const app = express();

app.set('port',3000);

app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});

app.use(express.json());

app.use('/users', userRoutes.router);
