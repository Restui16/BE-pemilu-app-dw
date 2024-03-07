import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users";

export async function checkUsernameInUse(username: string) : Promise<boolean> {
    const userRepository = AppDataSource.getRepository(Users)

    const existingUser = await userRepository.findOne({where: {username}})

    return !!existingUser
}