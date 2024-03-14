import { AppDataSource } from "../data-source"
import { Candidate } from "../entity/Candidate"
import { User } from "../entity/User"
import { Voter } from "../entity/Voter"

interface IVoters {
    userId: User
    candidateId: Candidate[]
}

export default new class VotersServices {
    private repository = AppDataSource.getRepository(Voter)
    async create(reqBody: IVoters): Promise<any> {
        try {
            const { userId, candidateId } = reqBody
            const voter = this.repository.create({
                user: userId,
                candidate: candidateId
            })

            await this.repository.createQueryBuilder()
                .insert()
                .into(Voter)
                .values(voter)
                .execute()

            const getVoter = await this.repository.createQueryBuilder('voter')
                .leftJoinAndSelect('voter.user', 'user')
                .leftJoinAndSelect('voter.candidate', 'candidate')
                .where('voter.id = :id', { id: voter.id })
                .getMany()
            return getVoter
        } catch (error) {
            throw error
        }
    }
    async find(): Promise<any> {
        try {
            const voters = await this.repository.createQueryBuilder('voter')
                .leftJoinAndSelect('voter.user', 'user')
                .leftJoinAndSelect('voter.candidate', 'candidate')
                .getMany()

            return voters
        } catch (error) {
            throw error
        }
    }
    async update(id: number, reqBody: IVoters): Promise<any> {
        try {
            const { userId, candidateId } = reqBody
            const voter = this.repository.create({
                user: userId,
                candidate: candidateId
            })

            await this.repository.createQueryBuilder()
                .update(Voter)
                .set(voter)
                .where('id = :id', { id })
                .execute()

            const getVoter = await this.repository.createQueryBuilder('voter')
                .leftJoinAndSelect('voter.user', 'user')
                .leftJoinAndSelect('voter.candidate', 'candidate')
                .where('voter.id = :id', { id })
                .getMany()

            return getVoter
        } catch (error) {
            throw error
        }
    }
    async delete(id: number): Promise<any> {
        try {
            await this.repository.createQueryBuilder()
            .delete()
            .from(Voter)
            .where('id = :id', {id})
            .execute()
        } catch (error) {
            throw error
        }
    }
}