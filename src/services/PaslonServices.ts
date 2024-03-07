import { AppDataSource } from "../data-source"
import { Candidate } from "../entity/Candidate"

interface IPaslon {
    id: number
    name: string
    image: string
    visiMisi: string[]
}

const paslonRepo = AppDataSource.getRepository(Candidate)
export default new class PaslonServices {
    async create(reqBody: IPaslon): Promise<any> {
        try {
            const {id, name, image, visiMisi} = reqBody
            const paslon = new Candidate()
            paslon.id = id
            paslon.name = name
            paslon.image = image
            paslon.visiMisi = visiMisi

            await paslonRepo.save(paslon)
            return paslon
        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any> {
        try {
            const paslon = await paslonRepo.find({relations: {parties: true}})
            return paslon
        } catch (error) {
            throw error
        }
    }

    async update(id: number, reqBody: IPaslon): Promise<any> {
        try {
            const {name, image, visiMisi} = reqBody
            const paslon = await paslonRepo.findOne({where: {id}})
            paslon.name = name
            paslon.image = image
            paslon.visiMisi = visiMisi

            await paslonRepo.save(paslon)
            return paslon
        } catch (error) {
            throw error
        }
    }

    async delete(id: number) : Promise<any> {
        try {
            const paslon = await paslonRepo.findOne({where: {id}})
            await paslonRepo.remove(paslon)
        } catch (error) {
            throw error
        }
    }
}