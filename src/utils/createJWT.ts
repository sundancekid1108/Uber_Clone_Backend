/*
  WebToken 생성함수
  https://passwordsgenerator.net/에서 password 생성후 .env에 저장

*/
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";


const createJWT = (id: number): string => {
    const token = jwt.sign({
          id
        }, process.env.JWT_TOKEN || ""
      );
      return token;
}

export default createJWT;