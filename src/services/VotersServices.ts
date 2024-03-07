import { AppDataSource } from "../data-source"
import { Candidate } from "../entity/Candidate"
import { User } from "../entity/User"
import { Voter } from "../entity/Voter"

interface IVoters {
    userId: User
    paslonId: Candidate
}

const voterRepo = AppDataSource.getRepository(Voter)
export default new class VotersServices {
    async create(reqBody: IVoters) : Promise<any> {
        try {
            const {userId, paslonId} = reqBody
            const voter = new Voter()
            voter.user = userId,
            voter.candidate = paslonId,

            await voterRepo.save(voter)
            return voter
        } catch (error) {
            throw error
        }
    }
    async find() : Promise<any> {
        try {
            const voters = await voterRepo.find({relations: {user: true, candidate: true}})
            return voters
        } catch (error) {
            throw error
        }
    }
    async update(id: number, reqBody: IVoters) : Promise<any> {
        try {
            const {userId, paslonId} = reqBody
            const voter = await voterRepo.findOne({where: {id}, relations: {user: true, candidate:true}})
            voter.user = userId,
            voter.candidate = paslonId

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