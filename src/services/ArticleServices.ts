import { AppDataSource } from "../data-source"
import { Article } from "../entity/Article"
import { User } from "../entity/User"

interface IArticle {
    title: string
    image: string
    description: string
    user: User
}

export default new class ArticleServices {
    private repository = AppDataSource.getRepository(Article)
    async create(reqBody: IArticle): Promise<any> {
        try {
            const { title, image, description, user } = reqBody
            const article = this.repository.create({
                title,
                image,
                description,
                user,
            })

            await AppDataSource
                .createQueryBuilder()
                .insert()
                .into(Article)
                .values(article)
                .execute()


            const findArticle = await this.repository
                .createQueryBuilder('article')
                .leftJoinAndSelect('article.user', 'user')
                .where('article.id = :id', { id: article.id })
                .getMany();

            return findArticle
        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any> {
        try {
            const articles = await this.repository
                .createQueryBuilder('article')
                .leftJoinAndSelect('article.user', 'user')
                .getMany();

            return articles;
        } catch (error) {
            throw error
        }
    }

    async getArticle(id: any): Promise<any> {
        try {
            const article = await this.repository
                .createQueryBuilder('article')
                .leftJoinAndSelect('article.user', 'user')
                .where('article.id = :id', { id })
                .getOne()
            return article
        } catch (error) {
            throw error
        }
    }

    async update(id: number, reqBody: IArticle): Promise<any> {
        try {
            const { title, image, description, user } = reqBody
            const article = this.repository.create({
                title,
                image,
                description,
                user
            })

            await this.repository.createQueryBuilder()
                .update(Article)
                .set(article)
                .where('id = :id', { id })
                .execute()

            const findArticle = await this.repository
                .createQueryBuilder('article')
                .leftJoinAndSelect('article.user', 'user')
                .where('article.id = :id', {id})
                .getMany();

            return findArticle
        } catch (error) {
            throw error
        }
    }

    async delete(id: number): Promise<any> {
        try {
            await this.repository.createQueryBuilder()
                .delete()
                .from(Article)
                .where('id = :id', { id })
                .execute()
        } catch (error) {
            throw error
        }
    }
}