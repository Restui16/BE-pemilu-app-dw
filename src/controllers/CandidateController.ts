import { Request, Response } from "express";
import CandidateServices from "../services/CandidateServices";

export default new class CandidateController {
    async create(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            const paslon = await CandidateServices.create(data)

            return res.status(200).json(paslon)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async find(req: Request, res: Response): Promise<Response>{
        try {
            const paslon = await CandidateServices.find()
            return res.status(200).json(paslon)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response): Promise<Response>{
        try {
            const id = parseInt(req.params.id)
            const data = req.body

            const updatePaslon = await CandidateServices.update(id, data)

            return res.status(200).json(updatePaslon)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response): Promise<Response>{
        try {
            const id = parseInt(req.params.id)
            await CandidateServices.delete(id)
            return res.status(200).json({message: `Candidate ${id} berhasil dihapus`})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}