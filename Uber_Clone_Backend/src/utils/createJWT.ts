import jwt from "jsonwebtoken";
require('dotenv').config();

const createJWT = (id: number): string => {
    const token = jwt.sign({
          id
        }, process.env.JWT_TOKEN || ""
      );
      return token;
}

export default createJWT;