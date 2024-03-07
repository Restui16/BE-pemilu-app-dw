import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Paslon } from "./Paslon"

@Entity()
export class Voters {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @OneToOne(() => Paslon)
    @JoinColumn()
    paslon: Paslon
}
