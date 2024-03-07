import { AppDataSource } from "../data-source"
import { Paslon } from "../entity/Paslon"
import { User } from "../entity/User"
import { Voters } from "../entity/Voters"

interface IVoters {
    userId: User
    paslonId: Paslon
}

const voterRepo = AppDataSource.getRepository(Voters)
export default new class VotersServices {
    async create(reqBody: IVoters) : Promise<any> {
        try {
            const {userId, paslonId} = reqBody
            const voter = new Voters()
            voter.user = userId,
            voter.paslon = paslonId,

            await voterRepo.save(voter)
            return voter
        } catch (error) {
            throw error
        }
    }
    async find() : Promise<any> {
        try {
            const voters = await voterRepo.find({relations: {user: true, paslon: true}})
            return voters
        } catch (error) {
            throw error
        }
    }
    async update(id: number, reqBody: IVoters) : Promise<any> {
        try {
            const {userId, paslonId} = reqBody
            const voter = await voterRepo.findOne({where: {id}, relations: {user: true, paslon:true}})
            voter.user = userId,
            voter.paslon = paslonId

            await voterRepo.save(voter)
            return voter
        } catch (error) {
            throw error
        }
    }
    async delete(id: number) : Promise<any> {
        try {
            const voter = await voterRepo.findOne({where: {id}})
            await voterRepo.remove(voter)
        } catch (error) {
            throw error
        }
    }
}