import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
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
    chairman: string
    
    @Column({type: "text", array:true})
    visiMisi: string[]
    
    @Column({type: "text"})
    address: string

    @ManyToOne(() => Candidate, (candidate) => candidate.parties)
    candidate: Candidate

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}
