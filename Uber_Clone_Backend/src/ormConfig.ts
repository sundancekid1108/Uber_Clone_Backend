import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "newber",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT || "localhost",
  port: 5432,
  username: process.env.DB_USERNAME || "sundance",
  password: process.env.DB_PASSWORD || ""
};

export default connectionOptions;


/**
 * TypeORM을 통해 DB와 맵핑.. 
 * 
 * postgres에서 Database를 설정해줘야 함
 * 
 * */