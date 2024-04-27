import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { UserEntity } from "../entity/UserEntity";

const userService = new UserService();

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser = await userService.createUser(req.body as UserEntity);
        res.status(201).json(newUser);
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            console.error('Ошибка при создании пользователя:');
            res.status(400).json({ error: 'Пользователь с таким email уже существует' });
        } else {
            console.error('Ошибка при создании пользователя:');
            res.status(500).json({ error: 'Ошибка при создании пользователя' });
        }
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
        res.status(500).json({ error: 'Ошибка при получении пользователей' });
    }
};

export const checkCredentials = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        // Проверяем существование пользователя и соответствие пароля
        const isValidCredentials = await userService.checkCredentials(email, password);
        res.json({ isValidCredentials });
    } catch (error) {
        console.error('Ошибка при проверке учетных данных:', error);
        res.status(500).json({ error: 'Ошибка при проверке учетных данных' });
    }
};


