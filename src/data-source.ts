import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Article } from "./entity/Article"
import { Party } from "./entity/Party"
import { Candidate} from "./entity/Candidate"
import { Voter } from "./entity/Voter"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "micro-app-pemilu-dw",
    synchronize: true,
    logging: false,
    entities: [User, Article, Party, Candidate, Voter],
    migrations: [],
    subscribers: [],
})
