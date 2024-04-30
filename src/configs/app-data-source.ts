import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user_work_pimp_2",
    password: "Qwerty123#",
    database: "db_work_pimp_2",
    synchronize: true,
    logging: true,
    entities: ["src/core/entity/**/*.ts" ],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    
})