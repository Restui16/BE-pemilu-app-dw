import { Request, Response } from "express";
import PaslonServices from "../services/PaslonServices";

export default new class CandidateController {
    async create(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            const paslon = await PaslonServices.create(data)

            return res.status(200).json(paslon)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async find(req: Request, res: Response): Promise<Response>{
        try {
            const paslon = await PaslonServices.find()
            return res.status(200).json(paslon)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response): Promise<Response>{
        try {
            const id = parseInt(req.params.id)
            const data = req.body

            const updatePaslon = await PaslonServices.update(id, data)

            return res.status(200).json(updatePaslon)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response): Promise<Response>{
        try {
            const id = parseInt(req.params.id)
            await PaslonServices.delete(id)
            return res.status(200).json({message: `Paslon ${id} berhasil dihapus`})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}