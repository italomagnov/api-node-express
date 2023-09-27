import { sql } from '../db/db.js';
import { randomUUID } from 'node:crypto';

export const User = {
    getAllUsers: async () => {
        try {
            const result = await sql`select * from users`;
            return result;
        } catch (error) {
            throw error;
        }
    },
    createUser: async (name, nick, email, password) => {
        const userId = randomUUID();

        const user = {
            id: userId,
            name,
            nick,
            email,
            password,
        };
        try {
            const result = await sql`insert into users ${sql(user)}`;
            return result;
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (id, user) => {
        const { name, nick, email, password } = user;

        try {
            const result =
                await sql`update users set name = ${name}, nick = ${nick}, email = ${email}, password = ${password} where id = ${id}`;
            return result;
        } catch (error) {
            throw error;
        }
    },
    deleteUser: async (id) => {
        try {
            const result = await sql`delete from users where id = ${id}`;
            return result;
        } catch (error) {
            throw error;
        }
    },
};
