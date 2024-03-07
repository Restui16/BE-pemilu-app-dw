import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Articles } from "./entity/Articles"
import { Parties } from "./entity/Parties"
import { Candidates } from "./entity/Candidates"
import { Voters } from "./entity/Voters"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "micro-app-pemilu-dw",
    synchronize: true,
    logging: false,
    entities: [Users, Articles, Candidates, Parties, Voters],
    migrations: [],
    subscribers: [],
})
