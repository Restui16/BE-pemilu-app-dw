import { Request, Response } from "express";
import ArticleServices from "../services/ArticleServices";

export default new class ArticleController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const article = await ArticleServices.create(req.body)

            return res.status(200).json({ message: "Article Berhasil dibuat", article })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const article = await ArticleServices.find()
            return res.status(200).json(article)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async show(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const article = await ArticleServices.show(id)

            return res.status(200).json(article)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id)
            const data = req.body
            const updateArticle = await ArticleServices.update(id, data)
            return res.status(200).json(updateArticle)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id)

            await ArticleServices.delete(id)
            
            return res.status(200).json({message: `article dengan id ${id} berhasil dihapus`})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}