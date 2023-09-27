import { User } from '../models/UserModel.js';

export const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.getAllUsers();
            res.status(201).json(users);
        } catch (error) {
            res.status(500).json({
                error: 'Não foi possivel conectar ao banco',
            });
        }
    },
    createUser: async (req, res) => {
        const { name, nick, email, password } = req.body;
        try {
            const newUser = await User.createUser(name, nick, email, password);
            res.status(201).json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Não foi possivel criar o usuario',
            });
        }
    },
    updateUser: async (req, res) => {
        const userId = req.params.id;
        const { name, nick, email, password } = req.body;
        try {
            await User.updateUser(userId, {
                name,
                nick,
                email,
                password,
            });
            res.status(201).send();
        } catch (error) {
            console.log('erro>>>>', error);
            res.status(500).json({ error: 'erro a o atualizar o usurários' });
        }
    },
    deleteUser: async (req, res) => {
        const userId = req.params.id;
        try {
            await User.deleteUser(userId);
            res.status(201).send();
        } catch (error) {
            res.status(500).send();
        }
    },
};
