import { AppDataSource } from "../data-source"
import { Candidate } from "../entity/Candidate"

interface ICandidate {
    id: number
    no_candidate: number
    name: string
    image: string
    visiMisi: string[]
}

export default new class CandidateServices {
    private repository = AppDataSource.getRepository(Candidate)
    async create(reqBody: ICandidate): Promise<any> {
        try {
            const { no_candidate, name, image, visiMisi } = reqBody
            const candidate = this.repository.create({
                no_candidate,
                name,
                image,
                visiMisi
            })

            await this.repository.createQueryBuilder()
                .insert()
                .into(Candidate)
                .values(candidate)
                .execute()

            const getCandidateWithPartai = await this.repository
                .createQueryBuilder('candidate')
                .leftJoinAndSelect('candidate.parties', 'party')
                .where('candidate.id = :id', { id: candidate.id })
                .getMany()



            return getCandidateWithPartai
        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any> {
        try {
            const candidate = await this.repository.createQueryBuilder('candidate')
                .leftJoinAndSelect('candidate.parties', 'party')
                .getMany()
            return candidate
        } catch (error) {
            throw error
        }
    }

    async update(id: number, reqBody: ICandidate): Promise<any> {
        try {
            const { no_candidate, name, image, visiMisi } = reqBody
            const candidate = this.repository.create({
                no_candidate,
                name,
                image,
                visiMisi
            })

            await this.repository.createQueryBuilder()
                .update(Candidate)
                .set(candidate)
                .where('id = :id', { id })
                .execute()

            const getCandidateWithPartai = await this.repository
                .createQueryBuilder('candidate')
                .leftJoinAndSelect('candidate.parties', 'party')
                .where('candidate.id = :id', {id})
                .getMany()

            return getCandidateWithPartai
        } catch (error) {
            throw error
        }
    }

    async delete(id: number): Promise<any> {
        try {
            await this.repository.createQueryBuilder()
            .delete()
            .from(Candidate)
            .where('id = :id', {id})
            .execute()

        } catch (error) {
            throw error
        }
    }
}