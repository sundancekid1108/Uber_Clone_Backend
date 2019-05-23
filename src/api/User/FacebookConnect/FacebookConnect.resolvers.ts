/**
 * facebook test 계정을 통해 진행..
 * fbID = facebook test계정의 "사용자 ID"
 * 
 * playground에서 실행
 * 
 * mutation{
  FacebookConnect(firstName: "woncheol", lastName:"yang", email:"sundancekid1108@gmail.com", fbId: "sundancekid1108@gmail.com"){
    ok
    error
    token
  }
}
 * 
 */

import User from "../../../entities/User";
import {
  FacebookConnectMutationArgs,
  FacebookConnectResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
  
  Mutation: {
    FacebookConnect: async (_, args: FacebookConnectMutationArgs): Promise<FacebookConnectResponse> => {
      const { fbId } = args;
      try {
        const existingUser = await User.findOne({ fbId });
        if (existingUser) {
          const token = createJWT(existingUser.id);
          return {
            ok: true,
            error: null,
            token
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
      try {
        const newUser = await User.create({
          ...args,
          profilePhoto: `http://graph.facebook.com/${fbId}/picture?type=square`
        }).save();
        const token = createJWT(newUser.id);
        return {
          ok: true,
          error: null,
          token
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;