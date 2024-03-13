import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
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

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date

}
