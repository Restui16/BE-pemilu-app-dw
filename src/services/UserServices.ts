import { AppDataSource } from "../data-source"
import { GenderType, User } from "../entity/User"
import { Equal } from "typeorm"
import { Encrypt } from "../helpers/Encrypt"


interface IUser {
    fullname: string
    address: string
    gender: GenderType
    username: string
    password: string
    is_admin: boolean
}

export default new class UserServices {
    private repository = AppDataSource.getRepository(User)

    async create(reqBody: IUser): Promise<any> {
        try {
            const { fullname, address, gender, username, password, is_admin } = reqBody
            const ecncryptedPassword = await Encrypt.encryptPass(password)
            const user = this.repository.create({
                fullname,
                address,
                gender,
                username,
                password: ecncryptedPassword,
                is_admin
            })

            await this.repository.createQueryBuilder()
            .insert()
            .into(User)
            .values(user)
            .execute()

            return user
        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any> {
        try {
            const users = this.repository.createQueryBuilder()
            .select("user")
            .from(User, 'user')
            .getMany()

            return users
        } catch (error) {
            throw error
        }
    }

    async update(id: any, reqBody: IUser): Promise<any> {
        try {
            const {fullname, address, gender, username, password, is_admin} = reqBody
            const ecncryptedPassword = await Encrypt.encryptPass(password)
            const user = this.repository.create({
                fullname,
                address,
                gender,
                username,
                password: ecncryptedPassword,
                is_admin
            })

            await this.repository.createQueryBuilder()
            .update('user')
            .set(user)
            .where('id = :id', {id})
            .execute()

            return user
        } catch (error) {
            throw error
        }
    }

    async delete(id: any): Promise<any> {
        try {
            await this.repository.createQueryBuilder()
            .delete()
            .from('user')
            .where('id = :id', {id})
            .execute()

        } catch (error) {
            throw error
        }
    }
}