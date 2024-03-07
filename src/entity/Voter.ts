import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Candidate } from "./Candidate"

@Entity()
export class Voter {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @OneToOne(() => Candidate)
    @JoinColumn()
    candidate: Candidate
}
