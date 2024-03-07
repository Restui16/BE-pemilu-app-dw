import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export async function checkUsernameInUse(username: string) : Promise<boolean> {
    const userRepository = AppDataSource.getRepository(User)

    const existingUser = await userRepository.findOne({where: {username}})

    return !!existingUser
}