import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Article {
    
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

    @ManyToOne(() => User, (user) => user.articles, {
        cascade: ["remove"],
        onDelete: "SET NULL"
    })
    user: User

}
