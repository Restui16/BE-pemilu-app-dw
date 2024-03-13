import { AppDataSource } from "../data-source"
import { Candidate } from "../entity/Candidate"

interface ICandidate {
    id: number
    no_candidate: number
    name: string
    image: string
    visiMisi: string[]
    
}

const candidateRepo = AppDataSource.getRepository(Candidate)
export default new class CandidateServices {
    async create(reqBody: ICandidate): Promise<any> {
        try {
            const {id, name, image, visiMisi, no_candidate} = reqBody
            const candidate = new Candidate()
            candidate.id = id
            candidate.no_candidate = no_candidate
            candidate.name = name
            candidate.image = image
            candidate.visiMisi = visiMisi

            await candidateRepo.save(candidate)
            return candidate
        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any> {
        try {
            const candidate = await candidateRepo.find({relations: {parties: true,}})
            return candidate
        } catch (error) {
            throw error
        }
    }

    async update(id: number, reqBody: ICandidate): Promise<any> {
        try {
            const {name, image, visiMisi} = reqBody
            const candidate = await candidateRepo.findOne({where: {id}})
            candidate.name = name
            candidate.image = image
            candidate.visiMisi = visiMisi

            await candidateRepo.save(candidate)
            return candidate
        } catch (error) {
            throw error
        }
    }

    async delete(id: number) : Promise<any> {
        try {
            const candidate = await candidateRepo.findOne({where: {id}})
            await candidateRepo.remove(candidate)
        } catch (error) {
            throw error
        }
    }
}