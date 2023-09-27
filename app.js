import express from 'express';
import { userController } from './controllers/userController.js';

const app = express();
const port = 3333;

app.use(express.json());

app.get('/api/users', userController.getAllUsers);
app.post('/api/user', userController.createUser);
app.put('/api/users/:id', userController.updateUser);
app.delete('/api/users/:id', userController.deleteUser);

app.listen({
    port: port,
});
