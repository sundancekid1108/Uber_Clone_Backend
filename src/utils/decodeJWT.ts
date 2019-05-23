/**
 * Token을 이용해 User를 찾는다
 * 이를 활용하여 User의 정보를 요구하는 API 작업
 */
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import User from "../entities/User";


const decodeJWT = async (token: string): Promise<User | undefined> => {
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_TOKEN || "");
    const { id } = decoded;
    const user = await User.findOne({ id });
    return user;
  } catch (error) {
    return undefined;
  }
};

export default decodeJWT;
