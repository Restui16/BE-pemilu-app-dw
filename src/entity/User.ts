import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Article } from "./Article"

export enum GenderType {
    Male = "Male",
    Female = "Female",
}
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullname: string

    @Column({
        type: "text"
    })
    address: string

    @Column({
        type: "enum",
        enum: ["Male", "Female"]
    })
    gender: GenderType

    @Column({unique: true})
    username: string

    @Column()
    password: string

    @Column({
        type: "boolean",
        default: false
    })
    is_admin: boolean

    @OneToMany(() => Article, (article) => article.user)
    articles: Article[]

}
