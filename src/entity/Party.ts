import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Candidate } from "./Candidate"

@Entity()
export class Party {

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

    @ManyToOne(() => Candidate, (candidate) => candidate.parties)
    candidate: Candidate
}
