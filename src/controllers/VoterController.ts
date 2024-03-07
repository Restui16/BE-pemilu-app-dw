import { Request, Response } from "express";
import VotersServices from "../services/VotersServices";

export default new class VoterController {
    async create(req: Request, res: Response) : Promise<Response> {
        try {
            const data = req.body
            const voter = await VotersServices.create(data)
            return res.status(200).json(voter)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async find(req: Request, res: Response) : Promise<Response> {
        try {
            const voters = await VotersServices.find()
            return res.status(200).json(voters)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) : Promise<Response> {
        try {
            const id = parseInt(req.params.id)
            const data = req.body

            const updateVoter = await VotersServices.update(id, data)

            return res.status(200).json(updateVoter)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response) : Promise<Response> {
        try {
            const id = parseInt(req.params.id)
            await VotersServices.delete(id)
            return res.status(200).json({message: `voter ${id} berhasil dihapus`})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}