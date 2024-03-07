import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Paslon } from "./Paslon"

@Entity()
export class Partai {

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

    @ManyToOne(() => Paslon, (paslon) => paslon.partai)
    paslon: Paslon
}
