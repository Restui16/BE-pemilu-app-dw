import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Party} from "./Party"

@Entity()
export class Candidate {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    no_candidate: number

    @Column()
    name: string

    @Column()
    image: string

    @Column({type: "text" , array: true})
    visiMisi: string[]
    
    @OneToMany(() => Party, (party) => party.candidate)
    parties: Party[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}
