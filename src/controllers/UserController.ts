import { Request, Response } from "express";
import UserServices from "../services/UserServices";
import { UserValidator } from "../utils/validator/User";

export default new class UserControllers {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const { error, value } = UserValidator.validate(data)
            if (error) return res.status(400).json({ message: error.details[0].message })

            const user = await UserServices.create(value)
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const users = await UserServices.find()
            
            return users.length ? res.status(200).json(users) : res.status(200).json({message: "Data Not Found"})
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const userId = req.params.id

            const { error, value } = UserValidator.validate(data)
            if (error) return res.status(400).json({ message: error.details[0].message })
            const updateUser = await UserServices.update(userId, value)


            return res.status(200).json(updateUser)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id
            await UserServices.delete(userId)

            res.json({ message: `data user dengan id = ${userId} berhasil dihapus` })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}