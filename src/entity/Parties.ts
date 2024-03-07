import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Candidates } from "./Candidates"

@Entity()
export class Parties {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    logo: string

    @Column()
    name: string
    
    @Column()
    ketum: string
    
    @Column({type: "text", array:true})
    visiMisi: string[]
    
    @Column({type: "text"})
    address: string

    @ManyToOne(() => Candidates, (candidate) => candidate.party)
    candidate: Candidates
}
