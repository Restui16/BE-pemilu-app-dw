import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Parties } from "./Parties"

@Entity()
export class Candidates {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    image: string

    @Column({type: "text" , array: true})
    visiMisi: string[]
    
    @OneToMany(() => Parties, (party) => party.candidate)
    party: Parties[]
}
