import { AppDataSource } from "../data-source"
import { Party } from "../entity/Party"
import { Candidate } from "../entity/Candidate"

interface IPartai {
    logo: string,
    name: string
    ketum: string,
    visiMisi: string[]
    address: string
    paslonId: Candidate
}

const partaiRepo = AppDataSource.getRepository(Party)
export default new class PartaiServices {
    async create(reqBody: IPartai) : Promise<any> {
        try {
            const {logo, name, ketum, visiMisi, address, paslonId} = reqBody

            const partai = new Party()
            partai.logo = logo
            partai.name = name
            partai.ketum = ketum
            partai.visiMisi = visiMisi
            partai.address = address
            partai.candidate = paslonId

            await partaiRepo.save(partai)
            return partai
        } catch (error) {
            throw error
        }
    }
    async find() : Promise<any> {
        try {
            const partai = await partaiRepo.find({relations: {candidate: true}})
            return partai
        } catch (error) {
            throw error
        }
    }
    async update(id: number, reqBody: IPartai) : Promise<any> {
        try {
            const {logo, name, ketum, visiMisi, address, paslonId} = reqBody
            const partai = await partaiRepo.findOne({where: {id}, relations: {candidate: true}})
            partai.logo = logo
            partai.name = name
            partai.ketum = ketum
            partai.visiMisi = visiMisi
            partai.address = address
            partai.candidate = paslonId
            
            await partaiRepo.save(partai)
            return partai
        } catch (error) {
            throw error
        }
    }
    async delete(id: number) : Promise<any> {
        try {
            const partai = await partaiRepo.findOne({where: {id}})
            await partaiRepo.remove(partai)
        } catch (error) {
            throw error
        }
    }
}