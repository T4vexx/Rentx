import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource: DataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    synchronize: true,
    logging: true,
    entities: ["./src/modules/**/entities/*.ts"],
    subscribers: [],
    migrations: ["./src/database/migrations/*.ts"],
});

AppDataSource.initialize()
    .then(() => {
        console.log("app initialize");
    })
    .catch((error) => console.log(error));
