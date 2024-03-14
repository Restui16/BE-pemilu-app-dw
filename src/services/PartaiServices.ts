import { AppDataSource } from "../data-source"
import { Party } from "../entity/Party"
import { Candidate } from "../entity/Candidate"

interface IPartai {
    logo: string,
    name: string
    chairman: string,
    visiMisi: string[]
    address: string
    candidate_id: Candidate
}

export default new class PartaiServices {
    private repository = AppDataSource.getRepository(Party)
    async create(reqBody: IPartai): Promise<any> {
        try {
            const { logo, name, chairman, visiMisi, address, candidate_id } = reqBody

            const party = this.repository.create({
                logo,
                name,
                chairman,
                visiMisi,
                address,
                candidate: candidate_id
            })

            await this.repository.createQueryBuilder()
                .insert()
                .into(Party)
                .values(party)
                .execute()

            const getPartaiWithCandidate = await this.repository.createQueryBuilder('party')
                .leftJoinAndSelect('party.candidate', 'candidate')
                .where('party.id = :id', { id: party.id })
                .getMany()
            return getPartaiWithCandidate
        } catch (error) {
            throw error
        }
    }
    async find(): Promise<any> {
        try {
            const parties = await this.repository.createQueryBuilder('party')
                .leftJoinAndSelect('party.candidate', 'candidate')
                .getMany()

            return parties
        } catch (error) {
            throw error
        }
    }
    async update(id: number, reqBody: IPartai): Promise<any> {
        try {
            const { logo, name, chairman, visiMisi, address, candidate_id } = reqBody
            const party = this.repository.create({
                logo,
                name,
                chairman,
                visiMisi,
                address,
                candidate: candidate_id
            })

            await this.repository.createQueryBuilder()
                .update(Party)
                .set(party)
                .where('id = :id', { id })
                .execute()

            const getPartyWithCandidate = await this.repository.createQueryBuilder('party')
                .leftJoinAndSelect('party.candidate', 'candidate')
                .where('party.id = :id', { id })
                .getMany()

            return getPartyWithCandidate
        } catch (error) {
            throw error
        }
    }
    async delete(id: number): Promise<any> {
        try {
            await this.repository.createQueryBuilder()
            .delete()
            .from(Party)
            .where('id = :id', {id})
            .execute()
        } catch (error) {
            throw error
        }
    }
}