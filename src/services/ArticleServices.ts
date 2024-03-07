import { AppDataSource } from "../data-source"
import { Articles } from "../entity/Articles"
import { Users } from "../entity/Users"

interface IArticle {
    title: string
    image: string
    description: string
    user: Users
}

const articleRepo = AppDataSource.getRepository(Articles)

export default new class ArticleServices {
    async create(reqBody: IArticle): Promise<any> {
        try {
            const { title, image, description, user } = reqBody
            const article = articleRepo.create({
                title,
                image,
                description,
                user,
            })

            await AppDataSource
                .createQueryBuilder()
                .insert()
                .into(Articles)
                .values(article)
                .execute()

        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any> {
        try {
            return articleRepo.find({
                relations: {
                    user: true
                }
            })
        } catch (error) {
            throw error
        }
    }

    async show(id: any): Promise<any> {
        try {
            const article = await articleRepo.findOne({where: {id}, relations: {user: true}})
            return article
        } catch (error) {
            throw error
        }
    }

    async update(id: number, reqBody: IArticle): Promise<any> {
        try {
            const {title, image, description, user} = reqBody
            const article = await articleRepo.findOne({where: {id}})
            article.title = title
            article.image = image
            article.description = description
            article.user = user

            await articleRepo.save(article)
            return article
        } catch (error) {
            throw error
        }
    }

    async delete(id: number) : Promise<any> {
        try {
            const article = await articleRepo.findOne({where: {id}})
            await articleRepo.remove(article)
        } catch (error) {
            throw error
        }
    }
}