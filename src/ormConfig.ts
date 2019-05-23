import dotenv from "dotenv";
dotenv.config();
import { ConnectionOptions } from "typeorm";


const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "newber",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

export default connectionOptions;


/**
 * TypeORM을 통해 DB와 맵핑.. 
 * 
 * postgres에서 Database를 설정해줘야 
 * 
 * terminal에서 psql, \c newber로 접속..
 * 
 * */