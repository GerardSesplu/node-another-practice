import express from 'express';
import authRoutes from './routes/auth.routes';
import authorsRoutes from './routes/authors.routes';
import booksRoutes from './routes/books.routes';
import userRoutes from './routes/user.routes';


const app = express();

app.set('port',3000);

app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});

app.use(express.json());

app.use('/authors', authorsRoutes.router);

app.use('/users', userRoutes.router);

app.use('/books', booksRoutes.router);

app.use('/auth', authRoutes.router);

