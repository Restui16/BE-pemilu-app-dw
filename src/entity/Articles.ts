import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Users } from "./Users"

@Entity()
export class Articles {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    image: string

    @Column({
        type: "text"
    })
    description: string

    @ManyToOne(() => Users, (user) => user.articles, {
        cascade: ["remove"],
        onDelete: "SET NULL"
    })
    user: Users

}
