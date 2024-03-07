import { AppDataSource } from "../data-source"
import { GenderType, Users } from "../entity/Users"
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
    async create(reqBody: IUser): Promise<any> {
        try {
            const {fullname, address, gender, username, password, is_admin} = reqBody
            const ecncryptedPassword = await Encrypt.encryptPass(password)
            const user = new Users()
            user.fullname = fullname
            user.address = address
            user.gender = gender
            user.username = username
            user.password = ecncryptedPassword
            user.is_admin = is_admin

            const userRepository = AppDataSource.getRepository(Users)
            await userRepository.save(user)
            return user
        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any> {
        try {
            const users = AppDataSource.getRepository(Users)

            return users.find()
        } catch (error) {
            throw error
        }
    }

    async update(userId: any, reqBody: any): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Users)

            await repository
                .createQueryBuilder()
                .update(Users)
                .set({
                    fullname: reqBody.fullname,
                    address: reqBody.address,
                    gender: reqBody.gender,
                    username: reqBody.username,
                    password: reqBody.password,
                    is_admin: reqBody.is_admin
                })
                .where("id = :id", { id: userId })
                .execute()

            return repository.findBy({
                id: Equal(userId)
            })
        } catch (error) {
            throw error
        }
    }

    async delete(userId: any): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Users)

            await repository
                .createQueryBuilder()
                .delete()
                .from(Users)
                .where("id = :id", { id: userId })
                .execute()

        } catch (error) {
            throw error
        }
    }
}