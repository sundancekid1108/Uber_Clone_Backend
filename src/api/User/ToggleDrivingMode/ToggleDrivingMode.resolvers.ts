/**
 * Driving 모드시 운행정보 알리는것
 * 중단할땐 중단하는것도 알림
 */

import User from "../../../entities/User";
import { ToggleDrivingModeResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
    Mutation: {
        ToggleDrivingMode: privateResolver(
            async (_, __, { req }): Promise<ToggleDrivingModeResponse> => {
              const user: User = req.user;
              user.isDriving = !user.isDriving;
              user.save();
              return {
                ok: true,
                error: null
              };
            }
          )
    }
}

export default resolvers;