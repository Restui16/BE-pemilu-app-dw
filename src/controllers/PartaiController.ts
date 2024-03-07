import { Request, Response } from "express";
import PartaiServices from "../services/PartaiServices";
import UserServices from "../services/UserServices";

export default new class PartaiController {
    async create(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            const partai = await PartaiServices.create(data)

            return res.status(200).json(partai)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async find(req: Request, res: Response): Promise<Response>{
        try {
            const partai = await PartaiServices.find()
            return res.status(200).json(partai)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response): Promise<Response>{
        try {
            const id = parseInt(req.params.id)
            const data = req.body

            const updatePartai = await PartaiServices.update(id, data)
            return res.status(200).json(updatePartai)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response): Promise<Response>{
        try {
            const id = parseInt(req.params.id)
            await PartaiServices.delete(id)

            return res.status(200).json({message: `Partai ${id} berhasil dihapus`})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}