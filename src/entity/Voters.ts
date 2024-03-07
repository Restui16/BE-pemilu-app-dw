import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Users } from "./Users"
import { Candidates } from "./Candidates"

@Entity()
export class Voters {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Users)
    @JoinColumn()
    user: Users

    @OneToOne(() => Candidates)
    @JoinColumn()
    candidate: Candidates
}
