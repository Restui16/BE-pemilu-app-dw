import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Partai } from "./Partai"

@Entity()
export class Paslon {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    image: string

    @Column({type: "text" , array: true})
    visiMisi: string[]
    
    @OneToMany(() => Partai, (partai) => partai.paslon)
    partai: Partai[]
}
