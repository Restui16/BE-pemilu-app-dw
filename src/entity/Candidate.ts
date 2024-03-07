import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Party} from "./Party"

@Entity()
export class Candidate {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    image: string

    @Column({type: "text" , array: true})
    visiMisi: string[]
    
    @OneToMany(() => Party, (party) => party.candidate)
    parties: Party[]
}
